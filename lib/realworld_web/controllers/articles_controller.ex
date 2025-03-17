defmodule RealworldWeb.ArticlesController do
  use RealworldWeb, :controller
  alias RealworldWeb.ArticleSerializer
  alias RealworldWeb.UserSerializer

  def new(conn, _params) do
    conn
    |> render_inertia("CreateArticle")
  end

  def edit(conn, %{"slug" => slug}) do
    case Realworld.Articles.get_article_by_slug(slug,
           load: [:user, :tags],
           actor: conn.assigns.current_user
         ) do
      {:ok, article} ->
        conn
        |> ArticleSerializer.assign_prop("article", article)
        |> render_inertia("EditArticle")

      {:error, error} ->
        conn
        |> assign_errors(error)
        |> redirect(to: ~p"/")
    end
  end

  def create(conn, params) do
    params =
      params
      |> Map.update("tags", [], fn tags -> Enum.map(tags, &%{"name" => &1}) end)
      |> Map.put("body_raw", params["bodyRaw"])
      |> Map.delete("bodyRaw")

    case Realworld.Articles.publish(params, actor: conn.assigns.current_user) do
      {:ok, article} ->
        conn
        |> redirect(to: ~p"/articles/#{article.slug}")

      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> render_inertia("CreateArticle")
    end
  end

  def show(conn, %{"slug" => slug}) do
    case Realworld.Articles.get_article_by_slug(slug,
           load: [:user, :favorites_count, :is_favorited],
           actor: conn.assigns.current_user
         ) do
      {:ok, article} ->
        conn
        |> assign_prop("slug", slug)
        |> ArticleSerializer.assign_prop("article", article)
        |> UserSerializer.assign_prop("user", conn.assigns.current_user)
        |> render_inertia("ViewArticle")

      {:error, %Ash.Error.Query.NotFound{}} ->
        conn
        |> put_flash(:error, "We couldn't find that article")
        |> redirect(to: ~p"/")
    end
  end

  def favorite(conn, %{"slug" => slug}) do
    with {:ok, %{id: id}} <- Realworld.Articles.get_article_by_slug(slug),
         {:ok, thing} <- Realworld.Articles.favorite(id, actor: conn.assigns.current_user) do
      conn
      |> redirect(to: ~p"/articles/#{slug}")
    else
      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> render_inertia("ViewArticle")
    end
  end

  def unfavorite(conn, %{"slug" => slug}) do
    with {:ok, %{id: id}} <- Realworld.Articles.get_article_by_slug(slug),
         :ok <- Realworld.Articles.unfavorite(id, actor: conn.assigns.current_user) do
      conn
      |> redirect(to: ~p"/articles/#{slug}")
    else
      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> render_inertia("ViewArticle")
    end
  end

  def update(conn, %{"slug" => slug, "bodyRaw" => body_raw} = params) do
    params =
      params
      |> Map.update("tags", [], fn tags -> Enum.map(tags, &%{"name" => &1}) end)
      |> Map.delete("bodyRaw")
      |> Map.put("body_raw", body_raw)

    with {:ok, article} <-
           Realworld.Articles.get_article_by_slug(slug, actor: conn.assigns.current_user),
         {:ok, updated_article} <-
           Realworld.Articles.update(article, params, actor: conn.assigns.current_user) do
      conn
      |> redirect(to: ~p"/articles/#{slug}")
    else
      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> render_inertia("EditArticle")
    end
  end

  def delete(conn, %{"slug" => slug} = params) do
    case Realworld.Articles.destroy_article(params, actor: conn.assigns.current_user) do
      :ok ->
        conn
        |> redirect(to: "/")

      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> redirect(to: "/articles/#{slug}")
    end
  end
end
