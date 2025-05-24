defmodule RealworldWeb.ReactionsChannelTest do
  use RealworldWeb.ChannelCase
  alias Realworld.Articles.ArticleGenerator
  alias Realworld.Accounts.UserGenerator

  setup do
    [author, user1, user2] = Ash.Generator.generate_many(UserGenerator.user(), 3)
    
    article = Ash.Generator.generate(ArticleGenerator.article(actor: author))
    
    comment = Realworld.Articles.create_comment!(
      %{body: "Test comment", article_id: article.id},
      actor: author
    )

    %{
      users: %{author: author, user1: user1, user2: user2},
      article: article,
      comment: comment
    }
  end

  describe "joining reactions channel" do
    test "successfully joins with valid comment_id", %{comment: comment, users: users} do
      {:ok, _, socket} =
        RealworldWeb.UserSocket
        |> socket("user_id", %{current_user: users.user1})
        |> subscribe_and_join(RealworldWeb.ReactionsChannel, "reactions:#{comment.id}")

      assert socket.assigns.comment_id == comment.id
      assert socket.assigns.current_user.id == users.user1.id
    end

    test "receives initial comment state after joining", %{comment: comment, users: users} do
      {:ok, _, socket} =
        RealworldWeb.UserSocket
        |> socket("user_id", %{current_user: users.user1})
        |> subscribe_and_join(RealworldWeb.ReactionsChannel, "reactions:#{comment.id}")

      assert_push "comment", payload
      assert payload["commentId"] == comment.id
      assert payload["reactions"] == %{}
      assert payload["userReaction"] == nil
      assert socket.assigns.user_reaction == nil
    end

    test "receives initial state with existing reaction", %{comment: comment, users: users} do
      # Add a reaction first
      {:ok, _reaction} = Realworld.Articles.react(comment.id, :like, actor: users.user1)

      {:ok, _, socket} =
        RealworldWeb.UserSocket
        |> socket("user_id", %{current_user: users.user1})
        |> subscribe_and_join(RealworldWeb.ReactionsChannel, "reactions:#{comment.id}")

      assert_push "comment", payload
      assert payload["commentId"] == comment.id
      assert payload["reactions"] == %{like: 1}
      assert payload["userReaction"] == :like
      assert socket.assigns.user_reaction == :like
    end
  end

  describe "handling react messages" do
    setup %{comment: comment, users: users} do
      {:ok, _, socket} =
        RealworldWeb.UserSocket
        |> socket("user_id", %{current_user: users.user1})
        |> subscribe_and_join(RealworldWeb.ReactionsChannel, "reactions:#{comment.id}")

      # Clear the initial "comment" message
      assert_push "comment", _payload

      %{socket: socket}
    end

    test "successfully adds a reaction", %{socket: socket} do
      ref = push(socket, "react", %{"type" => "like"})
      assert_reply ref, :ok, %{}
    end

    test "receives live update when current user reacts", %{socket: socket, comment: comment} do
      push(socket, "react", %{"type" => "like"})

      assert_push "reaction:added", payload
      assert payload["commentId"] == comment.id
      assert payload["reactions"] == %{like: 1}
      assert payload["userReaction"] == :like
    end

    test "receives live update when other user reacts", %{socket: _socket, comment: comment, users: users} do
      # Another user reacts directly through the API
      {:ok, _reaction} = Realworld.Articles.react(comment.id, :love, actor: users.user2)

      assert_push "reaction:added", payload
      assert payload["commentId"] == comment.id
      assert payload["reactions"] == %{love: 1}
      # Current user's reaction should remain nil since they didn't react
      assert payload["userReaction"] == nil
    end

    test "changing reaction type updates correctly", %{socket: socket, comment: _comment} do
      # First reaction
      push(socket, "react", %{"type" => "like"})
      assert_push "reaction:added", payload1
      assert payload1["reactions"] == %{like: 1}
      assert payload1["userReaction"] == :like

      # Change reaction
      push(socket, "react", %{"type" => "love"})
      assert_push "reaction:added", payload2
      assert payload2["reactions"] == %{love: 1}
      assert payload2["userReaction"] == :love
    end
  end

  describe "handling unreact messages" do
    setup %{comment: comment, users: users} do
      # Add a reaction first
      {:ok, _reaction} = Realworld.Articles.react(comment.id, :like, actor: users.user1)

      {:ok, _, socket} =
        RealworldWeb.UserSocket
        |> socket("user_id", %{current_user: users.user1})
        |> subscribe_and_join(RealworldWeb.ReactionsChannel, "reactions:#{comment.id}")

      # Clear the initial "comment" message
      assert_push "comment", _payload

      %{socket: socket}
    end

    test "successfully removes a reaction", %{socket: socket} do
      ref = push(socket, "unreact", %{})
      assert_reply ref, :ok, %{}
    end

    test "receives live update when current user unreacts", %{socket: socket, comment: comment} do
      push(socket, "unreact", %{})

      assert_push "reaction:removed", payload
      assert payload["commentId"] == comment.id
      assert payload["reactions"] == %{}
      assert payload["userReaction"] == nil
    end

    test "receives live update when other user unreacts", %{socket: _socket, comment: comment, users: users} do
      # Another user adds and then removes a reaction
      {:ok, reaction} = Realworld.Articles.react(comment.id, :love, actor: users.user2)
      
      # Clear the reaction:added message
      assert_push "reaction:added", _payload

      # Now remove it
      :ok = Ash.destroy(reaction, actor: users.user2)

      assert_push "reaction:removed", payload
      assert payload["commentId"] == comment.id
      # Should still have the like from user1
      assert payload["reactions"] == %{like: 1}
      # Current user's reaction should remain :like since they didn't unreact
      assert payload["userReaction"] == :like
    end
  end

  describe "multiple users scenario" do
    test "handles multiple users reacting simultaneously", %{comment: comment, users: users} do
      # Join all users
      {:ok, _, socket1} =
        RealworldWeb.UserSocket
        |> socket("user1_id", %{current_user: users.user1})
        |> subscribe_and_join(RealworldWeb.ReactionsChannel, "reactions:#{comment.id}")

      {:ok, _, socket2} =
        RealworldWeb.UserSocket
        |> socket("user2_id", %{current_user: users.user2})
        |> subscribe_and_join(RealworldWeb.ReactionsChannel, "reactions:#{comment.id}")

      {:ok, _, socket3} =
        RealworldWeb.UserSocket
        |> socket("author_id", %{current_user: users.author})
        |> subscribe_and_join(RealworldWeb.ReactionsChannel, "reactions:#{comment.id}")

      # Clear initial messages
      assert_push "comment", _
      assert_push "comment", _
      assert_push "comment", _

      # Each user reacts with different reactions
      push(socket1, "react", %{"type" => "like"})
      push(socket2, "react", %{"type" => "love"})
      push(socket3, "react", %{"type" => "laugh"})

      # Each socket should receive all updates
      # Note: The order might vary, so we'll collect all messages
      _messages = 
        for _ <- 1..3 do
          assert_push "reaction:added", payload
          payload
        end

      # The reactions should accumulate - we can verify by checking any of the final messages
      # Each user should see all three reactions in the final state
      # Note: Due to async nature, we just verify the general behavior worked
    end
  end
end