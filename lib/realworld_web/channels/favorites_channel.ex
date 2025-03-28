defmodule RealworldWeb.FavoritesChannel do
  use RealworldWeb, :channel

  @impl true
  def join("favorites:" <> article_id, payload, socket) do
    if authorized?(payload) do
      socket =
        socket
        |> assign(:article_id, article_id)

      Phoenix.PubSub.subscribe(Realworld.PubSub, "article:favorited:#{article_id}")
      Phoenix.PubSub.subscribe(Realworld.PubSub, "article:unfavorited:#{article_id}")

      send(self(), :after_join)

      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  @impl true
  def handle_in("favorite", _params, socket) do
    Realworld.Articles.favorite(socket.assigns.article_id, %{},
      actor: socket.assigns.current_user
    )

    {:reply, {:ok, %{}}, socket}
  end

  def handle_in("unfavorite", _params, socket) do
    Realworld.Articles.unfavorite!(socket.assigns.article_id, %{},
      actor: socket.assigns.current_user
    )

    {:reply, {:ok, %{}}, socket}
  end

  # Send the current state immediately after joining.
  # This addresses the issue with Inertia pages being shown with stale
  # props when navigating by history back / forward.
  @impl true
  def handle_info(:after_join, socket) do
    article =
      Ash.get!(Realworld.Articles.Article, socket.assigns.article_id,
        load: [:favorites_count, :is_favorited],
        actor: socket.assigns.current_user
      )

    push(socket, "article", %{
      "articleId" => article.id,
      "favoritesCount" => article.favorites_count,
      "isFavorited" => article.is_favorited
    })

    {:noreply, socket}
  end

  @impl true
  def handle_info(%{topic: "article:favorited:" <> _} = message, socket) do
    favorite =
      message.payload.data
      |> Ash.load!([article: [:favorites_count, :is_favorited]],
        strict?: true,
        actor: socket.assigns.current_user
      )

    push(socket, "article:favorited", %{
      "articleId" => favorite.article_id,
      "favoritesCount" => favorite.article.favorites_count,
      "isFavorited" => favorite.article.is_favorited
    })

    {:noreply, socket}
  end

  @impl true
  def handle_info(%{topic: "article:unfavorited:" <> _} = message, socket) do
    favorite =
      message.payload.data
      |> Ash.load!([article: [:favorites_count, :is_favorited]],
        strict?: true,
        actor: socket.assigns.current_user
      )

    push(socket, "article:unfavorited", %{
      "articleId" => favorite.article_id,
      "favoritesCount" => favorite.article.favorites_count,
      "isFavorited" => favorite.article.is_favorited
    })

    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
