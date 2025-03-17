defmodule RealworldWeb.ArticleSerializer do
  def to_map(article) do
    %{
      id: article.id,
      slug: article.slug,
      title: article.title,
      description: article.description,
      body: article.body,
      bodyRaw: article.body_raw,
      isFavorited: article.is_favorited,
      favoritesCount: article.favorites_count,
      author: RealworldWeb.UserSerializer.to_map(article.user),
      createdAt: article.created_at,
      tags:
        case article.tags do
          %Ash.NotLoaded{} = not_loaded -> not_loaded
          tags -> Enum.map(tags, fn tag -> tag.name end)
        end
    }
    |> Map.filter(fn x -> not match?({_, %Ash.NotLoaded{}}, x) end)
  end

  def assign_prop(conn, name, article) do
    Inertia.Controller.assign_prop(conn, name, fn -> to_map(article) end)
  end
end
