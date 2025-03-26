defmodule RealworldWeb.PageControllerTest do
  use RealworldWeb.ConnCase
  import Ash.Generator

  test "GET /", %{conn: conn} do
    props = conn = conn |> get(~p"/") |> Inertia.Testing.inertia_props()
    assert props.articles.results == []
  end

  test "GET / with articles", %{conn: conn} do
    user = generate(Realworld.Accounts.UserGenerator.user())
    article = generate(Realworld.Articles.ArticleGenerator.article(actor: user))

    props = conn |> get(~p"/") |> Inertia.Testing.inertia_props()
    assert [article] = props.articles.results
    assert article.author.id == user.id
  end
end
