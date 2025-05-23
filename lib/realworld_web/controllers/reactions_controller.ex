defmodule RealworldWeb.ReactionsController do
  use RealworldWeb, :controller

  def react(conn, %{"comment_id" => comment_id, "type" => type}) do
    current_user = conn.assigns.current_user

    case Realworld.Articles.react(comment_id, type,
           actor: current_user,
           load: [comment: :reaction_counts]
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
end
