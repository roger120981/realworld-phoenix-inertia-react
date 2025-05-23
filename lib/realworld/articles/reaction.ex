defmodule Realworld.Articles.Reaction do
  use Ash.Resource,
    data_layer: AshSqlite.DataLayer,
    authorizers: [Ash.Policy.Authorizer],
    notifiers: [Ash.Notifier.PubSub],
    domain: Realworld.Articles

  sqlite do
    table "reaction"
    repo Realworld.Repo

    references do
      reference :user, on_delete: :delete
      reference :comment, on_delete: :delete
    end
  end

  attributes do
    uuid_primary_key :id

    attribute :type, :atom do
      constraints one_of: [:like, :laugh, :love, :clap, :wow, :sad, :angry]
      allow_nil? false
      public? true
    end

    create_timestamp :created_at
    update_timestamp :updated_at
  end

  relationships do
    belongs_to :user, Realworld.Accounts.User do
      allow_nil? false
    end

    belongs_to :comment, Realworld.Articles.Comment do
      allow_nil? false
    end
  end

  identities do
    identity :unique_user_comment_reaction, [:user_id, :comment_id]
  end

  actions do
    defaults [:read]

    create :react do
      primary? true
      upsert? true
      upsert_identity :unique_user_comment_reaction

      argument :comment_id, :uuid do
        allow_nil? false
      end

      argument :type, :atom do
        constraints one_of: [:like, :laugh, :love, :clap, :wow, :sad, :angry]
        allow_nil? false
      end

      change relate_actor(:user)
      change set_attribute(:comment_id, arg(:comment_id))
      change set_attribute(:type, arg(:type))
    end

    destroy :unreact do
      primary? true
    end

    read :reactions_by_comment do
      argument :comment_id, :uuid do
        allow_nil? false
      end

      filter expr(comment_id == ^arg(:comment_id))
    end

    read :reaction_by_user_and_comment do
      argument :comment_id, :uuid do
        allow_nil? false
      end

      filter expr(comment_id == ^arg(:comment_id) and user_id == ^actor(:id))
    end
  end

  policies do
    policy action_type(:read) do
      authorize_if always()
    end

    policy action(:react) do
      authorize_if actor_present()
    end

    policy action(:unreact) do
      authorize_if relates_to_actor_via(:user)
    end
  end

  pub_sub do
    module RealworldWeb.Endpoint
    prefix "comment"

    publish :react, ["reaction", :comment_id]
    publish :unreact, ["reaction", :comment_id]
  end
end
