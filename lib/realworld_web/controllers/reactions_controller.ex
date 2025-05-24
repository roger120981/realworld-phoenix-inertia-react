defmodule RealworldWeb.ReactionsController do
  use RealworldWeb, :controller
  alias Realworld.Articles

  def react(conn, %{"comment_id" => comment_id, "type" => type}) do
    current_user = conn.assigns.current_user

    case Articles.react(comment_id, type,
           actor: current_user,
           load: [comment: [:reaction_counts, :user_reaction]]
         ) do
      {:ok, reaction} ->
        conn
        |> put_status(:ok)
        |> json(%{reactions: reaction.comment.reaction_counts, userReaction: type})

      {:error, error} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(%{error: error})
    end
  end

  def unreact(conn, %{"comment_id" => comment_id}) do
    current_user = conn.assigns.current_user

    with {:ok, reaction} <- Articles.unreact(comment_id, actor: current_user) do
      conn
      |> put_status(:ok)
      |> json(%{reactions: reaction.comment.reaction_counts, userReaction: nil})
    else
      {:error, error} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(%{error: error})
    end
  end
end
