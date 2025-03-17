defmodule RealworldWeb.PageController do
  use RealworldWeb, :controller

  def home(conn, params) do
    articles =
      Realworld.Articles.list_articles!(load: [:user, :tags, :is_favorited, :favorites_count]).results

    conn
    |> assign(:page_title, "Realworld")
    |> assign_prop(
      :articles,
      Enum.map(articles, &RealworldWeb.ArticleSerializer.to_map(&1))
    )
    |> assign_prop(:tags, Realworld.Articles.popular_tags!())
    |> assign_prop(:tab, params["tab"])
    |> assign_prop(:tag, params["tag"])
    |> render_inertia("RealWorldHome")
  end
end
