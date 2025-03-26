defmodule RealworldWeb.DataTableController do
  use RealworldWeb, :controller

  def index(conn, _params) do
    conn
    |> render_inertia("DataTablePage")
  end
end
