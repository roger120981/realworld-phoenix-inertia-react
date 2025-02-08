defmodule ConduitWeb.PageController do
  use ConduitWeb, :controller

  def home(conn, _params) do
    conn
    |> assign(:page_title, "Conduit")
    |> assign_prop(:text, "Hello world")
    |> render_inertia("HomePage")
  end
end
