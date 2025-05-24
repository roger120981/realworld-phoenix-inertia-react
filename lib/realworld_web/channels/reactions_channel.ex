defmodule RealworldWeb.ReactionsChannel do
  use RealworldWeb, :channel

  @impl true
  def join("reactions:" <> comment_id, payload, socket) do
    if authorized?(payload) do
      socket =
        socket
        |> assign(:comment_id, comment_id)

      Phoenix.PubSub.subscribe(Realworld.PubSub, "comment:reaction:#{comment_id}")

      send(self(), :after_join)

      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  @impl true
  def handle_in("react", %{"type" => type}, socket) do
    Realworld.Articles.react(socket.assigns.comment_id, type, actor: socket.assigns.current_user)

    {:reply, {:ok, %{}}, socket}
  end

  def handle_in("unreact", _params, socket) do
    Realworld.Articles.unreact(socket.assigns.comment_id,
      actor: socket.assigns.current_user
    )

    {:reply, {:ok, %{}}, socket}
  end

  # Send the current state immediately after joining.
  # This addresses the issue with Inertia pages being shown with stale
  # props when navigating by history back / forward.
  @impl true
  def handle_info(:after_join, socket) do
    comment =
      Ash.get!(Realworld.Articles.Comment, socket.assigns.comment_id,
        load: [:reaction_counts, :user_reaction],
        actor: socket.assigns.current_user
      )

    # Cache the user's reaction in socket assigns
    socket = assign(socket, :user_reaction, comment.user_reaction)

    push(socket, "comment", %{
      "commentId" => comment.id,
      "reactions" => comment.reaction_counts,
      "userReaction" => comment.user_reaction
    })

    {:noreply, socket}
  end

  @impl true
  def handle_info(%{topic: "comment:reaction:" <> _} = message, socket) do
    # Check if the current user was the one who reacted
    reacting_user_id = message.payload.actor.id
    current_user_id = socket.assigns.current_user.id
    current_user_reacted = reacting_user_id == current_user_id

    # Only reload user_reaction if the current user was the one who reacted
    {comment, user_reaction, socket} = if current_user_reacted do
      comment = message.payload.data.comment
        |> Ash.load!([:user_reaction], strict?: true, actor: socket.assigns.current_user)
      
      # Update cached user reaction
      socket = assign(socket, :user_reaction, comment.user_reaction)
      {comment, comment.user_reaction, socket}
    else
      # Use cached user reaction for efficiency
      comment = message.payload.data.comment
      user_reaction = socket.assigns.user_reaction
      {comment, user_reaction, socket}
    end

    event =
      case message.payload.changeset.action.name do
        :react -> "reaction:added"
        :destroy -> "reaction:removed"
      end

    push(socket, event, %{
      "commentId" => comment.id,
      "reactions" => comment.reaction_counts,
      "userReaction" => user_reaction
    })

    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
