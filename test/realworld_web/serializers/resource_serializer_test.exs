defmodule RealworldWeb.ResourceSerializerTest do
  use RealworldWeb.ConnCase

  alias RealworldWeb.ResourceSerializer

  # Define test resources

  defmodule Author do
    use Ash.Resource,
      data_layer: Ash.DataLayer.Ets,
      domain: RealworldWeb.ResourceSerializerTest.Domain,
      validate_domain_inclusion?: false

    attributes do
      uuid_primary_key :id, public?: true
      attribute :name, :string, public?: true
      attribute :email, :string, public?: true
      attribute :private_field, :string, public?: false
    end

    relationships do
      has_many :posts, RealworldWeb.ResourceSerializerTest.Post,
        destination_attribute: :author_id,
        public?: true

      has_one :profile, RealworldWeb.ResourceSerializerTest.Profile,
        destination_attribute: :author_id,
        public?: true
    end
  end

  defmodule Post do
    use Ash.Resource,
      data_layer: Ash.DataLayer.Ets,
      domain: RealworldWeb.ResourceSerializerTest.Domain,
      validate_domain_inclusion?: false

    attributes do
      uuid_primary_key :id, public?: true
      attribute :title, :string, public?: true
      attribute :body, :string, public?: true
      attribute :view_count, :integer, public?: false
      attribute :author_id, :uuid, public?: true
    end

    relationships do
      belongs_to :author, RealworldWeb.ResourceSerializerTest.Author,
        source_attribute: :author_id,
        public?: true

      has_many :comments, RealworldWeb.ResourceSerializerTest.Comment,
        destination_attribute: :post_id,
        public?: true
    end
  end

  defmodule Comment do
    use Ash.Resource,
      data_layer: Ash.DataLayer.Ets,
      domain: RealworldWeb.ResourceSerializerTest.Domain,
      validate_domain_inclusion?: false

    attributes do
      uuid_primary_key :id, public?: true
      attribute :body, :string, public?: true
      attribute :hidden, :boolean, public?: false
      attribute :post_id, :uuid, public?: true
    end

    relationships do
      belongs_to :post, RealworldWeb.ResourceSerializerTest.Post,
        source_attribute: :post_id,
        public?: true
    end
  end

  defmodule Profile do
    use Ash.Resource,
      data_layer: Ash.DataLayer.Ets,
      domain: RealworldWeb.ResourceSerializerTest.Domain,
      validate_domain_inclusion?: false

    attributes do
      uuid_primary_key :id, public?: true
      attribute :bio, :string, public?: true
      attribute :avatar_url, :string, public?: true
      attribute :author_id, :uuid, public?: true
    end

    relationships do
      belongs_to :author, RealworldWeb.ResourceSerializerTest.Author,
        source_attribute: :author_id,
        public?: true
    end
  end

  # Define test domain
  defmodule Domain do
    use Ash.Domain,
      validate_config_inclusion?: false

    resources do
      resource Author
      resource Post
      resource Comment
      resource Profile
    end
  end

  # Setup test data
  setup do
    author_id = Ecto.UUID.generate()
    post_id = Ecto.UUID.generate()
    profile_id = Ecto.UUID.generate()

    # Create test resources
    author = %Author{
      id: author_id,
      name: "Test Author",
      email: "author@example.com",
      private_field: "secret info"
    }

    profile = %Profile{
      id: profile_id,
      bio: "Test bio",
      avatar_url: "https://example.com/avatar.jpg",
      author_id: author_id
    }

    post = %Post{
      id: post_id,
      title: "Test Post",
      body: "This is a test post body",
      view_count: 100,
      author_id: author_id
    }

    comment1 = %Comment{
      id: Ecto.UUID.generate(),
      body: "First comment",
      hidden: false,
      post_id: post_id
    }

    comment2 = %Comment{
      id: Ecto.UUID.generate(),
      body: "Second comment",
      hidden: true,
      post_id: post_id
    }

    # Add relationships
    author = %{author | profile: profile, posts: [post]}
    post = %{post | author: author, comments: [comment1, comment2]}

    %{
      author: author,
      post: post,
      profile: profile,
      comments: [comment1, comment2]
    }
  end

  describe "to_map/1" do
    test "returns nil when input is nil" do
      assert ResourceSerializer.to_map(nil) == nil
    end

    test "includes only public attributes", %{author: author} do
      # Convert the author using to_map
      result = ResourceSerializer.to_map(author)

      # Check that public attributes are included
      assert Map.has_key?(result, :id)
      assert Map.has_key?(result, :name)
      assert Map.has_key?(result, :email)

      # Check that private attributes are not included
      refute Map.has_key?(result, :private_field)
    end

    test "serializes a resource with loaded relationships", %{author: author} do
      # Convert the author using to_map
      result = ResourceSerializer.to_map(author)

      # Check that relationships are included
      assert Map.has_key?(result, :profile)
      assert Map.has_key?(result, :posts)
      assert is_map(result.profile)
      assert is_list(result.posts)
      assert length(result.posts) == 1

      # Check nested attributes
      assert result.profile.bio == "Test bio"
      assert result.profile.avatar_url == "https://example.com/avatar.jpg"

      # Check nested relationships exclude private fields
      post = List.first(result.posts)
      assert post.title == "Test Post"
      assert post.body == "This is a test post body"
      refute Map.has_key?(post, :view_count)
    end

    test "handles unloaded relationships", %{author: author} do
      # Create a version of author with unloaded relationships
      author_with_unloaded = %{
        author
        | profile: %Ash.NotLoaded{field: :profile},
          posts: %Ash.NotLoaded{field: :posts}
      }

      # Convert using to_map
      result = ResourceSerializer.to_map(author_with_unloaded)

      # Check that public attributes are present
      assert Map.has_key?(result, :id)
      assert Map.has_key?(result, :name)
      assert Map.has_key?(result, :email)

      # Check that unloaded relationships are not included
      refute Map.has_key?(result, :profile)
      refute Map.has_key?(result, :posts)
    end

    test "handles nested relationships correctly", %{post: post} do
      # Convert using to_map
      result = ResourceSerializer.to_map(post)

      # Check post attributes
      assert result.title == "Test Post"
      assert result.body == "This is a test post body"
      refute Map.has_key?(result, :view_count)

      # Check author relationship
      assert Map.has_key?(result, :author)
      assert result.author.name == "Test Author"
      assert result.author.email == "author@example.com"
      refute Map.has_key?(result.author, :private_field)

      # Check comments relationship
      assert Map.has_key?(result, :comments)
      assert is_list(result.comments)
      assert length(result.comments) == 2

      # Verify comments don't include private fields
      comment = List.first(result.comments)
      assert Map.has_key?(comment, :body)
      refute Map.has_key?(comment, :hidden)
    end

    test "handles nil relationships", %{author: author} do
      # Create a version of author with nil relationships
      author_with_nil = %{author | profile: nil}

      # Convert using to_map
      result = ResourceSerializer.to_map(author_with_nil)

      assert Map.has_key?(result, :profile)
      assert is_nil(result.profile)
    end

    test "maps list of resources to list of maps", %{comments: comments} do
      # Convert using to_map
      result = ResourceSerializer.to_map(comments)

      assert is_list(result)
      assert length(result) == 2

      # Check that all items are properly serialized
      Enum.each(result, fn comment ->
        assert Map.has_key?(comment, :id)
        assert Map.has_key?(comment, :body)
        refute Map.has_key?(comment, :hidden)
      end)
    end

    test "returns non-Ash resources as-is" do
      # Regular map (not an Ash resource)
      regular_map = %{key: "value", another_key: 123}
      assert ResourceSerializer.to_map(regular_map) == regular_map

      # Other data types
      assert ResourceSerializer.to_map("string") == "string"
      assert ResourceSerializer.to_map(123) == 123
      assert ResourceSerializer.to_map([1, 2, 3]) == [1, 2, 3]
    end

    test "handles mixed lists with Ash and non-Ash resources", %{author: author} do
      mixed_list = [author, %{plain: "map"}, "string", 123]

      # Convert using to_map
      result = ResourceSerializer.to_map(mixed_list)

      assert is_list(result)
      assert length(result) == 4

      # First item should be serialized author
      serialized_author = List.first(result)
      assert Map.has_key?(serialized_author, :id)
      assert Map.has_key?(serialized_author, :name)
      refute Map.has_key?(serialized_author, :private_field)

      # Other items should be unchanged
      assert Enum.at(result, 1) == %{plain: "map"}
      assert Enum.at(result, 2) == "string"
      assert Enum.at(result, 3) == 123
    end
  end

  describe "assign_prop/3" do
    test "assigns a prop to conn with serialization", %{conn: conn, author: author} do
      conn = ResourceSerializer.assign_prop(conn, "author", author)
      author_prop = conn.private[:inertia_shared]["author"]

      assert is_map(author_prop)
      assert Map.has_key?(author_prop, :id)
      assert Map.has_key?(author_prop, :name)
      assert Map.has_key?(author_prop, :email)
      refute Map.has_key?(author_prop, :private_field)
    end
  end
end
