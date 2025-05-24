defmodule RealworldWeb.ErrorTestController do
  use RealworldWeb, :controller

  def index(conn, _params) do
    conn
    |> render_inertia("ErrorTestPage")
  end
end