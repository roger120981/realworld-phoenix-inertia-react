defmodule RealworldWeb.SignInController do
  use RealworldWeb, :controller

  def index(conn, _params) do
    conn
    |> render_inertia("SignInPage")
  end

  def sign_in(conn, params) do
    params = Map.take(params, ["email", "password"])

    case Realworld.Accounts.sign_in(params) do
      {:ok, user} ->
        conn
        |> AshAuthentication.Phoenix.Plug.store_in_session(user)
        |> redirect(to: ~p"/vehicle-details")

      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> redirect(to: "/sign-in")
    end
  end
end
