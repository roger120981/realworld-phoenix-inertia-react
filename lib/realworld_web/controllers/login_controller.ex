defmodule RealworldWeb.LoginController do
  use RealworldWeb, :controller

  def index(conn, _params) do
    conn
    |> render_inertia("user/Login")
  end

  def login(conn, params) do
    params = Map.take(params, ["email", "password"])

    case Realworld.Accounts.sign_in(params) do
      {:ok, user} ->
        conn
        |> AshAuthentication.Phoenix.Plug.store_in_session(user)
        |> redirect(to: ~p"/")

      {:error, %Ash.Error.Forbidden{}} ->
        conn
        |> put_flash(:error, "Invalid username or password")
        |> redirect(to: ~p"/login")
    end
  end
end
