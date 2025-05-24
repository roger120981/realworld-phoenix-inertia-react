defmodule RealworldWeb.ReactionsControllerTest do
  use RealworldWeb.ConnCase
  alias Realworld.Articles.ArticleGenerator
  alias Realworld.Accounts.UserGenerator
  alias AshAuthentication.Phoenix.Plug, as: AuthPlug

  import Phoenix.ConnTest

  setup [
    :create_users,
    :create_article,
    :create_comment
  ]

  describe "reactions" do
    test "can add reaction to a comment", %{conn: conn, users: users, comment: comment} do
      # Add reaction
      conn =
        conn
        |> authenticate_user(users.user1)
        |> post(~p"/comments/#{comment.id}/react", %{type: "like"})

      # Check response
      assert %{
               "reactions" => %{"like" => 1},
               "userReaction" => "like"
             } = json_response(conn, 200)
    end

    test "can remove reaction from a comment", %{conn: conn, users: users, comment: comment} do
      # First add reaction
      conn =
        conn
        |> authenticate_user(users.user1)
        |> post(~p"/comments/#{comment.id}/react", %{type: "like"})

      assert %{"userReaction" => "like"} = json_response(conn, 200)

      # Then remove reaction
      conn =
        conn
        |> recycle()
        |> delete(~p"/comments/#{comment.id}/react")

      assert %{
               "reactions" => %{},
               "userReaction" => nil
             } = json_response(conn, 200)
    end

    test "different users can have different reactions", %{
      conn: conn1,
      users: users,
      comment: comment
    } do
      # User 1 reacts with "like"
      conn1 =
        conn1
        |> authenticate_user(users.user1)
        |> post(~p"/comments/#{comment.id}/react", %{type: "like"})

      assert %{"userReaction" => "like"} = json_response(conn1, 200)

      # User 2 reacts with "love"
      conn2 =
        Phoenix.ConnTest.build_conn()
        |> authenticate_user(users.user2)
        |> post(~p"/comments/#{comment.id}/react", %{type: "love"})

      assert %{
               "reactions" => %{"like" => 1, "love" => 1},
               "userReaction" => "love"
             } = json_response(conn2, 200)

      # User 1 unreacts
      conn1 =
        conn1
        |> delete(~p"/comments/#{comment.id}/react")

      assert %{
               "reactions" => %{"love" => 1},
               "userReaction" => nil
             } = json_response(conn1, 200)
    end

    test "changing a reaction type", %{conn: conn, users: users, comment: comment} do
      # First add "like" reaction
      conn =
        conn
        |> authenticate_user(users.user1)
        |> post(~p"/comments/#{comment.id}/react", %{type: "like"})

      assert %{"reactions" => %{"like" => 1}} = json_response(conn, 200)

      # Then change to "love" reaction
      conn =
        conn
        |> post(~p"/comments/#{comment.id}/react", %{type: "love"})

      assert %{
               "reactions" => %{"love" => 1},
               "userReaction" => "love"
             } = json_response(conn, 200)

      # Note: the "like" count should be 0 and no longer in the map
    end
  end

  defp create_users(%{}) do
    [author, user1, user2] =
      Ash.Generator.generate_many(UserGenerator.user(), 3)

    %{
      users: %{
        author: author,
        user1: user1,
        user2: user2
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
      Realworld.Articles.create_comment!(
        %{
          body: "Test comment",
          article_id: article.id
        },
        actor: author
      )

    %{comment: comment}
  end

  defp authenticate_user(conn, user) do
    conn
    |> Plug.Test.init_test_session(%{})
    |> AuthPlug.store_in_session(user)
    |> Plug.Conn.assign(:current_user, user)
  end
end
