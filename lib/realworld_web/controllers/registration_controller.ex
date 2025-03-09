defmodule RealworldWeb.RegistrationController do
  use RealworldWeb, :controller

  def index(conn, _params) do
    conn
    |> render_inertia("RegistrationPage")
  end

  def register(conn, params) do
    case Realworld.Accounts.register_user(params) do
      {:ok, user} ->
        conn
        |> AshAuthentication.Phoenix.Plug.store_in_session(user)
        |> redirect(to: ~p"/")

      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> redirect(to: "/register")
    end
  end
end
