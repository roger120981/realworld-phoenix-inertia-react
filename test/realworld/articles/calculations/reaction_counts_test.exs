defmodule Realworld.Articles.Calculations.ReactionCountsTest do
  alias Realworld.Articles.ArticleGenerator
  alias Realworld.Accounts.UserGenerator
  use Realworld.DataCase

  require Ash.Query

  alias Realworld.Articles

  setup [
    :create_users,
    :create_article,
    :create_comment
  ]

  describe "reaction_counts calculation" do
    test "counts reactions by type correctly", %{users: users, comment: comment} do
      # Add reactions to the comment
      {:ok, _} = Articles.react(comment.id, :like, actor: users.user1)
      {:ok, _} = Articles.react(comment.id, :like, actor: users.user2)
      {:ok, _} = Articles.react(comment.id, :love, actor: users.user3)
      {:ok, _} = Articles.react(comment.id, :love, actor: users.author)

      # Load the comment with reaction_counts calculation
      loaded_comment = Articles.get_comment_by_id!(comment.id, load: :reaction_counts)

      # Assert the reaction counts
      assert loaded_comment.reaction_counts == %{like: 2, love: 2}

      # Change user1 reaction to different type
      {:ok, _} = Articles.react(comment.id, :laugh, actor: users.user1)

      # Reload and verify counts again
      reloaded_comment = comment |> Ash.load!(:reaction_counts)

      # Assert the updated reaction counts
      assert reloaded_comment.reaction_counts == %{like: 1, love: 2, laugh: 1}
    end
  end

  defp create_users(%{}) do
    [author, user1, user2, user3] =
      Ash.Generator.generate_many(UserGenerator.user(), 4)

    %{
      users: %{
        author: author,
        user1: user1,
        user2: user2,
        user3: user3
      }
    }
  end

  defp create_article(%{users: users}) do
    article = Ash.Generator.generate(ArticleGenerator.article(actor: users.author))
    %{article: article}
  end

  defp create_comment(%{users: users, article: article}) do
    author = users.author

    comment =
      Articles.create_comment!(
        %{
          body: "Test comment",
          article_id: article.id
        },
        actor: author
      )

    %{comment: comment}
  end
end
