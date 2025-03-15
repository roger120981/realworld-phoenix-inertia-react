defmodule RealworldWeb.ArticleSerializer do
  def to_map(article) do
    %{
      id: article.id,
      slug: article.slug,
      title: article.title,
      description: article.description,
      body: article.body,
      isFavorited: article.is_favorited,
      favoritesCount: article.favorites_count,
      author: RealworldWeb.UserSerializer.to_map(article.user),
      createdAt: article.created_at
    }
  end

  def assign_prop(conn, name, article) do
    Inertia.Controller.assign_prop(conn, name, fn -> to_map(article) end)
  end
end
