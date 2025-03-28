defmodule Realworld.Articles.ArticleGenerator do
  alias Ash.Generator
  alias Realworld.Articles.Article

  def article(opts \\ []) do
    Generator.changeset_generator(
      Article,
      :publish,
      defaults: [
        title: StreamData.repeatedly(fn -> Faker.Lorem.sentence(3..6) end),
        description: StreamData.repeatedly(fn -> Faker.Lorem.paragraph(1..2) end),
        body_raw:
          StreamData.repeatedly(fn -> Faker.Lorem.paragraphs(3..5) |> Enum.join("\n\n") end),
        tags:
          StreamData.repeatedly(fn ->
            Faker.Lorem.words(3)
            |> Enum.uniq()
            |> Enum.map(&%{name: &1})
          end)
      ],
      overrides: opts,
      actor: opts[:actor]
    )
  end
end
