defmodule ConduitWeb.UserProfileController do
  use ConduitWeb, :controller

  def user_props(user) do
    %{
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    }
  end

  def show(conn, %{"id" => id}) do
    case Conduit.Accounts.get_user_by_id(id, actor: conn.assigns.current_user) do
      {:ok, user} ->
        conn
        |> assign_prop(:user, user_props(user))
        |> render_inertia("UserProfilePage")

      {:error, %Ash.Error.Query.NotFound{}} ->
        conn
        |> assign_errors(%{error: "We couldn't find that user"})
        |> redirect(to: ~p"/")
    end
  end

  def show(conn, _params) do
    id = conn.assigns.current_user.id
    redirect(conn, to: ~p"/user/#{id}")
  end

  def update(conn, params) do
    params = Map.take(params, ~w(id first_name last_name))

    case Conduit.Accounts.update_user_profile(params, actor: conn.assigns.current_user) do
      {:ok, user} ->
        conn
        |> assign_prop(:user, user_props(user))
        |> redirect(to: ~p"/user")

      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> redirect(to: ~p"/user")
    end
  end
end
