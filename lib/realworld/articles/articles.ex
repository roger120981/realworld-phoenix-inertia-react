defmodule Realworld.Articles do
  use Ash.Domain, otp_app: :realworld, extensions: [AshGraphql.Domain]

  resources do
    resource Realworld.Articles.Article do
      define :get_article_by_slug, action: :read, get_by: :slug
      define :list_articles
      define :destroy_article, action: :destroy
    end

    resource Realworld.Articles.ArticleTag do
      define :popular_tags
    end

    resource Realworld.Articles.Comment do
      define :destroy_comment, action: :destroy
    end

    resource Realworld.Articles.Favorite do
      define :favorite, action: :add_favorite, args: [:article_id]

      define :unfavorite,
        action: :remove_favorite,
        args: [:article_id],
        require_reference?: false,
        get?: true

      define :favorited, action: :favorited, args: [:article_id]
    end

    resource Realworld.Articles.Tag
  end

  authorization do
    authorize :by_default
  end

  def publish(params, opts) do
    action(Realworld.Articles.Article, :publish, params, opts)
  end

  def update(article, params, opts) do
    action(article, :update, params, opts)
  end

  defp action(resource, action, params, opts) do
    AshPhoenix.Form.for_action(resource, action, opts)
    |> AshPhoenix.Form.submit(params: params)
    |> case do
      :ok -> :ok
      {:ok, result} -> {:ok, result}
      {:error, form} -> {:error, form |> AshPhoenix.Form.errors(format: :simple) |> Map.new()}
    end
  end
end
