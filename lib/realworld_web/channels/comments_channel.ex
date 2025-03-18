defmodule RealworldWeb.CommentsChannel do
  use RealworldWeb, :channel

  @impl true
  def join("comments:" <> article_id, payload, socket) do
    Phoenix.PubSub.subscribe(Realworld.PubSub, "comment:created:#{article_id}")
    Phoenix.PubSub.subscribe(Realworld.PubSub, "comment:destroyed:#{article_id}")

    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  @impl true
  def handle_info(%{topic: "comment:created:" <> _} = message, socket) do
    comment = message.payload.data
    push(socket, "comment:created", RealworldWeb.CommentSerializer.to_map(comment))
    {:noreply, socket}
  end

  @impl true
  def handle_info(%{topic: "comment:destroyed:" <> _} = message, socket) do
    comment = message.payload.data |> Ash.load!(:user)

    push(socket, "comment:destroyed", RealworldWeb.CommentSerializer.to_map(comment))
    {:noreply, socket}
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  @impl true
  def handle_in("create", payload, socket) do
    with {:ok, comment} <-
           Realworld.Articles.create_comment(payload, actor: socket.assigns.current_user) do
      {:reply, {:ok, payload}, socket}
    else
      err ->
        dbg(err)
        {:reply, {:error, :failed}, socket}
    end
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
