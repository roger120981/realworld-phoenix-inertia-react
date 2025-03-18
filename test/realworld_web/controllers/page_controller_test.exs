defmodule RealworldWeb.PageControllerTest do
  use RealworldWeb.ConnCase
  import Ash.Generator, only: [generate: 1]

  def user(opts \\ []) do
    Ash.Generator.changeset_generator(
      Realworld.Accounts.User,
      :register_with_password,
      defaults: [
        username: StreamData.repeatedly(fn -> Faker.Internet.user_name() end),
        email: StreamData.repeatedly(fn -> Faker.Internet.email() end),
        password: "Passw0rd",
        password_confirmation: "Passw0rd"
      ],
      overrides: opts
    )
  end

  def article(opts \\ []) do
    actor =
      opts[:actor] ||
        Ash.Generator.once(:default_actor, fn ->
          generate(user())
        end)

    Ash.Generator.changeset_generator(
      Realworld.Articles.Article,
      :publish,
      defaults: [
        slug: StreamData.repeatedly(fn -> Faker.Internet.slug() end),
        title: StreamData.repeatedly(fn -> Faker.Lorem.sentence() end),
        description: StreamData.repeatedly(fn -> Faker.Lorem.paragraph(1) end),
        body_raw: StreamData.repeatedly(fn -> Faker.Lorem.paragraph(10..20) end)
      ],
      overrides: opts,
      actor: actor
    )
  end

  test "GET /", %{conn: conn} do
    props = conn = conn |> get(~p"/") |> Inertia.Testing.inertia_props()
    assert props.articles == []
  end

  test "GET / with articles", %{conn: conn} do
    user = generate(user())
    article = generate(article(actor: user))

    props = conn |> get(~p"/") |> Inertia.Testing.inertia_props()
    assert [article] = props.articles
    assert article.author.id == user.id
  end
end
