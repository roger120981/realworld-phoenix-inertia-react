defmodule RealworldWeb.CommentsController do
  use RealworldWeb, :controller

  def create(conn, params) do
    {slug, params} = Map.pop(params, "slug")
    current_user = conn.assigns.current_user

    with {:ok, article} <- Realworld.Articles.get_article_by_slug(slug, actor: current_user),
         params <- Map.put(params, "article_id", article.id),
         {:ok, comment} <- Realworld.Articles.create_comment(params, actor: current_user) do
      conn
      |> redirect(to: ~p"/articles/#{article.slug}/##{comment.id}")
    else
      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> redirect(to: ~p"/articles/#{slug}")
    end
  end

  def delete(conn, %{"id" => comment_id}) do
    current_user = conn.assigns.current_user

    with {:ok, comment} <-
           Realworld.Articles.get_comment_by_id(comment_id, actor: current_user, load: [:article]),
         :ok <- Realworld.Articles.destroy_comment(comment, actor: current_user) do
      conn
      |> redirect(to: ~p"/articles/#{comment.article.slug}")
    else
      _err ->
        conn
        |> put_flash(:error, "Failed to delete comment")
        |> redirect(to: "/")
    end
  end
end
