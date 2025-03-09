defmodule RealworldWeb.PageController do
  use RealworldWeb, :controller

  def home(conn, _params) do
    conn
    |> assign(:page_title, "Realworld")
    |> assign_prop(:text, "Hello world")
    |> render_inertia("HomePage")
  end
end
