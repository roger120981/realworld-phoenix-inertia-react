defmodule Realworld.Articles.Comment do
  use Ash.Resource,
    data_layer: AshSqlite.DataLayer,
    authorizers: [Ash.Policy.Authorizer],
    notifiers: [Ash.Notifier.PubSub],
    domain: Realworld.Articles

  sqlite do
    table "comment"
    repo Realworld.Repo
  end

  attributes do
    uuid_primary_key :id

    attribute :body, :string do
      allow_nil? false
      public? true
    end

    create_timestamp :created_at
    update_timestamp :updated_at
  end

  calculations do
    calculate :reaction_counts, :map, {Realworld.Articles.Calculations.ReactionCounts, []} do
      public? true
    end

    calculate :user_reaction, :atom, {Realworld.Articles.Calculations.UserReaction, []} do
      public? true
    end
  end

  relationships do
    belongs_to :article, Realworld.Articles.Article do
      allow_nil? false
    end

    belongs_to :user, Realworld.Accounts.User

    has_many :reactions, Realworld.Articles.Reaction
  end

  actions do
    defaults [:read, :destroy]

    create :create do
      primary? true
      accept [:body]

      argument :article_id, :uuid do
        allow_nil? false
      end

      change relate_actor(:user)

      change manage_relationship(:article_id, :article, type: :append)
    end

    read :comments_by_article do
      argument :article_id, :uuid do
        allow_nil? false
      end

      filter expr(article_id == ^arg(:article_id))
    end
  end

  policies do
    policy action_type(:read) do
      authorize_if always()
    end

    policy action_type(:create) do
      authorize_if actor_present()
    end

    policy action_type(:update) do
      authorize_if relates_to_actor_via(:user)
    end

    policy action_type(:destroy) do
      authorize_if relates_to_actor_via(:user)
    end
  end

  pub_sub do
    module RealworldWeb.Endpoint
    prefix "comment"

    publish :create, ["created", :article_id]
    publish :destroy, ["destroyed", :article_id]
  end
end
