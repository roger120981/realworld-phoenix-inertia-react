defmodule Realworld.Articles.ArticleTag do
  @moduledoc """
  The join resource between Article and Tag
  """
  use Ash.Resource,
    data_layer: AshSqlite.DataLayer,
    domain: Realworld.Articles

  alias Realworld.Articles.Article
  alias Realworld.Articles.Tag

  sqlite do
    table "article_tag"
    repo Realworld.Repo

    references do
      reference :article, on_delete: :delete
      reference :tag, on_delete: :delete
    end
  end

  relationships do
    belongs_to :article, Article, primary_key?: true, allow_nil?: false
    belongs_to :tag, Tag, primary_key?: true, allow_nil?: false
  end

  actions do
    defaults [:create, :read, :update, :destroy]
  end
end
