defmodule RealworldWeb.PageController do
  alias RealworldWeb.PageSerializer
  alias RealworldWeb.ArticleSerializer
  use RealworldWeb, :controller

  def home(conn, params) do
    filter =
      Enum.reduce(params, %{}, fn
        {"tag", tag}, filter -> Map.put(filter, :tag, tag)
        _, filter -> filter
      end)

    page = Map.get(params, "page", "1") |> String.to_integer()

    conn
    |> assign(:page_title, "Realworld")
    |> assign_prop(:articles, fn -> list_articles(filter, page) end)
    |> assign_prop(:tags, fn -> Realworld.Articles.popular_tags!() end)
    |> assign_prop(:tab, params["tab"])
    |> assign_prop(:tag, params["tag"])
    |> render_inertia("RealWorldHome")
  end

  defp list_articles(filter, page) do
    page_size = 10

    articles =
      Realworld.Articles.list_articles!(
        %{filter: filter},
        page: [limit: page_size, offset: page_size * (page - 1)],
        load: [:user, :tags, :is_favorited, :favorites_count]
      )

    PageSerializer.to_map(articles, &ArticleSerializer.to_map/1)
  end
end
