defmodule RealworldWeb.ProfilesController do
  use RealworldWeb, :controller
  alias RealworldWeb.ArticleSerializer
  alias RealworldWeb.UserSerializer
  alias Realworld.Accounts
  alias Realworld.Articles
  alias Realworld.Profiles

  def show(conn, %{"username" => username}) do
    current_user = conn.assigns[:current_user]
    page_limit = 20

    with {:ok, user} <- Accounts.get_user_by_username(username),
         {:ok, page} <-
           Articles.list_articles(actor: current_user) do
      conn
      |> assign_prop(:articles, page.results |> Enum.map(&ArticleSerializer.to_map/1))
      |> assign_prop(:pages, ceil(page.count / page_limit))
      |> assign_prop(:profile, user |> UserSerializer.to_map())
      |> assign_prop(:following, following(current_user, user))
      |> render_inertia("user/ProfilePage")
    else
      _err ->
        conn
        |> put_flash(:error, "Unable to fetch articles. Please try again later.")
        |> redirect(to: "/")
    end
  end

  def follow(conn, %{"slug" => slug}) do
    with {:ok, %{id: id}} <- Realworld.Articles.get_article_by_slug(slug),
         {:ok, _thing} <- Realworld.Articles.favorite(id, actor: conn.assigns.current_user) do
      conn
      |> redirect(to: ~p"/articles/#{slug}")
    else
      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> render_inertia("articles/ViewArticle")
    end
  end

  def unfollow(conn, %{"slug" => slug}) do
    with {:ok, %{id: id}} <- Realworld.Articles.get_article_by_slug(slug),
         :ok <- Realworld.Articles.unfavorite(id, actor: conn.assigns.current_user) do
      conn
      |> redirect(to: ~p"/articles/#{slug}")
    else
      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> render_inertia("articles/ViewArticle")
    end
  end

  defp following(_current_user = nil, _profile_user), do: false

  defp following(current_user, profile_user) do
    case Profiles.following(profile_user.id, actor: current_user) do
      {:ok, follow} ->
        follow

      _ ->
        nil
    end
  end
end
