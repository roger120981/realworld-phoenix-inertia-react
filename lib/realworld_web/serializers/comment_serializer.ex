defmodule RealworldWeb.CommentSerializer do
  alias RealworldWeb.UserSerializer

  def to_map(comment) do
    %{
      id: comment.id,
      body: comment.body,
      createdAt: comment.created_at,
      user: UserSerializer.to_map(comment.user)
    }
  end
end
