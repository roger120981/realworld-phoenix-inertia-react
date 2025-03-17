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
        |> render_inertia("ViewArticle")
    end
  end

  # def delete(conn, %{"slug" => slug} = params) do
  #   case Realworld.Articles.destroy_article(params, actor: conn.assigns.current_user) do
  #     :ok ->
  #       conn
  #       |> redirect(to: "/")

  #     {:error, errors} ->
  #       conn
  #       |> assign_errors(errors)
  #       |> redirect(to: "/articles/#{slug}")
  #   end
  # end
end
