defmodule Realworld.Articles.Calculations.UserReactionTest do
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

  describe "user_reaction calculation" do
    test "returns nil when there is no actor", %{comment: comment} do
      # Load the comment with user_reaction calculation but no actor
      loaded_comment = Articles.get_comment_by_id!(comment.id, load: :user_reaction)

      # Assert the user_reaction is nil
      assert loaded_comment.user_reaction == nil
    end

    test "returns the correct reaction type for the actor", %{users: users, comment: comment} do
      # Add reactions from different users
      {:ok, _} = Articles.react(comment.id, :like, actor: users.user1)
      {:ok, _} = Articles.react(comment.id, :love, actor: users.user2)
      {:ok, _} = Articles.react(comment.id, :laugh, actor: users.user3)

      # Load comment with user_reaction for user1
      loaded_comment = Articles.get_comment_by_id!(comment.id, 
        load: :user_reaction, 
        actor: users.user1
      )
      assert loaded_comment.user_reaction == :like

      # Load comment with user_reaction for user2
      loaded_comment = Articles.get_comment_by_id!(comment.id, 
        load: :user_reaction, 
        actor: users.user2
      )
      assert loaded_comment.user_reaction == :love

      # Load comment with user_reaction for user3
      loaded_comment = Articles.get_comment_by_id!(comment.id, 
        load: :user_reaction, 
        actor: users.user3
      )
      assert loaded_comment.user_reaction == :laugh

      # Load comment with user_reaction for author (who has no reaction)
      loaded_comment = Articles.get_comment_by_id!(comment.id, 
        load: :user_reaction, 
        actor: users.author
      )
      assert loaded_comment.user_reaction == nil
    end

    test "updates when a user changes their reaction", %{users: users, comment: comment} do
      # Initial reaction
      {:ok, _} = Articles.react(comment.id, :like, actor: users.user1)
      
      loaded_comment = Articles.get_comment_by_id!(comment.id, 
        load: :user_reaction, 
        actor: users.user1
      )
      assert loaded_comment.user_reaction == :like

      # Change the reaction
      {:ok, _} = Articles.react(comment.id, :love, actor: users.user1)
      
      loaded_comment = Articles.get_comment_by_id!(comment.id, 
        load: :user_reaction, 
        actor: users.user1
      )
      assert loaded_comment.user_reaction == :love
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