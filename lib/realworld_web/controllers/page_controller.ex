defmodule RealworldWeb.PageController do
  use RealworldWeb, :controller

  def home(conn, params) do
    conn
    |> assign(:page_title, "Realworld")
    |> assign_prop(:articles, [])
    |> assign_prop(:tags, Realworld.Articles.popular_tags!())
    |> assign_prop(:tab, params["tab"])
    |> assign_prop(:tag, params["tag"])
    |> render_inertia("RealWorldHome")
  end
end
