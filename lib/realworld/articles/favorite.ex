defmodule Realworld.Articles.Favorite do
  use Ash.Resource,
    data_layer: AshSqlite.DataLayer,
    authorizers: [Ash.Policy.Authorizer],
    domain: Realworld.Articles,
    notifiers: [Ash.Notifier.PubSub]

  sqlite do
    table "favorite"
    repo Realworld.Repo

    references do
      reference :user, on_delete: :delete
      reference :article, on_delete: :delete
    end
  end

  attributes do
    create_timestamp :created_at
    update_timestamp :updated_at
  end

  relationships do
    belongs_to :user, Realworld.Accounts.User do
      primary_key? true
      allow_nil? false
    end

    belongs_to :article, Realworld.Articles.Article do
      primary_key? true
      allow_nil? false
    end
  end

  identities do
    identity :unique_favorite, [:user_id, :article_id]
  end

  actions do
    defaults [:read, :destroy]

    read :favorited do
      get? true

      argument :article_id, :uuid, allow_nil?: false

      filter expr(user_id == ^actor(:id) and article_id == ^arg(:article_id))
    end

    create :add_favorite do
      primary? true
      upsert? true
      upsert_identity :unique_favorite

      accept [:article_id]

      change relate_actor(:user)
    end

    action :remove_favorite, :struct do
      constraints instance_of: __MODULE__
      argument :article_id, :string

      run fn %{arguments: %{article_id: article_id}}, context ->
        opts = Ash.Context.to_opts(context)
        favorite = Realworld.Articles.favorited!(article_id, opts)

        if favorite do
          Ash.destroy!(favorite, actor: context.actor)
        end

        {:ok, favorite}
      end
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

    policy action(:remove_favorite) do
      authorize_if actor_present()
    end
  end

  pub_sub do
    module RealworldWeb.Endpoint
    prefix "article"
    publish :add_favorite, ["favorited", :article_id]
    publish :destroy, ["unfavorited", :article_id]
  end
end
