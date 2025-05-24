defmodule RealworldWeb.CommentSerializerTest do
  use Realworld.DataCase

  alias RealworldWeb.CommentSerializer
  alias Realworld.Articles.Comment
  alias Realworld.Accounts.User

  describe "to_map/1" do
    test "serializes a comment with all fields" do
      user = %User{
        id: "user-123",
        username: "testuser",
        email: "test@example.com",
        image: "https://example.com/image.jpg",
        bio: "Test bio"
      }

      comment = %Comment{
        id: "comment-123",
        body: "Test comment body",
        created_at: ~U[2023-01-01 12:00:00Z],
        user: user,
        reaction_counts: %{like: 3, love: 2},
        user_reaction: :like
      }

      serialized = CommentSerializer.to_map(comment)

      assert serialized == %{
        id: "comment-123",
        body: "Test comment body",
        createdAt: ~U[2023-01-01 12:00:00Z],
        user: %{
          id: "user-123",
          username: "testuser",
          email: "test@example.com",
          image: "https://example.com/image.jpg",
          bio: "Test bio"
        },
        reactions: %{like: 3, love: 2},
        userReaction: :like
      }
    end

    test "handles nil user_reaction" do
      user = %User{
        id: "user-123",
        username: "testuser",
        email: "test@example.com"
      }

      comment = %Comment{
        id: "comment-123",
        body: "Test comment body",
        created_at: ~U[2023-01-01 12:00:00Z],
        user: user,
        reaction_counts: %{like: 3, love: 2},
        user_reaction: nil
      }

      serialized = CommentSerializer.to_map(comment)

      assert serialized.userReaction == nil
    end
  end
end