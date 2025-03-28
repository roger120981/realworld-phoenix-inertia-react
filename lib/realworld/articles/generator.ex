defmodule Realworld.Articles.Generator do
  use Ash.Resource,
    otp_app: :realworld,
    domain: Realworld.Articles

  actions do
    action :generate_article, :struct do
      constraints instance_of: __MODULE__
      argument :count, :integer, allow_nil?: false

      run fn input, ctx ->
        Realworld.Articles.ArticleGenerator.article(Ash.Context.to_opts(ctx))
        |> Ash.Generator.generate_many(input.arguments.count)
        |> then(&{:ok, &1})
      end
    end
  end
end
