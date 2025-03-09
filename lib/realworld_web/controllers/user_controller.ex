defmodule RealworldWeb.ArticlesController do
  use RealworldWeb, :controller

  defp article(article) do
    %{
      id: article.id,
      slug: article.slug,
      title: article.title,
      description: article.description,
      body: article.body
    }
  end

  def new(conn, _params) do
    conn
    |> render_inertia("CreateArticle")
  end

  # def show(conn, %{"id" => id}) do
  #   case Realworld.Accounts.get_user_by_id(id, actor: conn.assigns.current_user) do
  #     {:ok, user} ->
  #       conn
  #       |> assign_prop("currentUser", current_user(user))
  #       |> render_inertia("Settings")

  #     {:error, %Ash.Error.Query.NotFound{}} ->
  #       conn
  #       |> assign_errors(%{error: "We couldn't find that user"})
  #       |> redirect(to: ~p"/")
  #   end
  # end

  # def show(conn, _params) do
  #   id = conn.assigns.current_user.id
  #   redirect(conn, to: ~p"/user/#{id}/settings")
  # end

  # def update(conn, params) do
  #   case Realworld.Accounts.update_user(params, actor: conn.assigns.current_user) do
  #     {:ok, user} ->
  #       conn
  #       |> assign_prop("currentUser", current_user(user))
  #       |> render_inertia("Settings")

  #     {:error, errors} ->
  #       conn
  #       |> assign_errors(errors)
  #       |> redirect(to: ~p"/user")
  #   end
  # end
end
