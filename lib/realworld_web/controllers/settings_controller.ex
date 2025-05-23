defmodule RealworldWeb.SettingsController do
  use RealworldWeb, :controller
  alias RealworldWeb.UserSerializer

  def show(conn, %{"id" => id}) do
    case Realworld.Accounts.get_user_by_id(id, actor: conn.assigns.current_user) do
      {:ok, _user} ->
        conn
        |> render_inertia("user/Settings")

      {:error, %Ash.Error.Query.NotFound{}} ->
        conn
        |> assign_errors(%{error: "We couldn't find that user"})
        |> redirect(to: ~p"/")
    end
  end

  def show(conn, _params) do
    id = conn.assigns.current_user.id
    redirect(conn, to: ~p"/user/#{id}/settings")
  end

  def update(conn, params) do
    case Realworld.Accounts.update_user(params, actor: conn.assigns.current_user) do
      {:ok, user} ->
        conn
        |> put_flash(:success, "User profile updated")
        |> UserSerializer.assign_prop("currentUser", user)
        |> render_inertia("user/Settings")

      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> redirect(to: ~p"/user")
    end
  end
end
