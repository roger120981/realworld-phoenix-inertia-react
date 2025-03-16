defmodule Realworld.Articles.ArticleTag.PopularTags do
  import Ecto.Query
  alias Realworld.Articles.ArticleTag

  def run(_input, _opts, _context) do
    Realworld.Repo.all(
      from(article_tag in ArticleTag,
        join: tag in assoc(article_tag, :tag),
        group_by: article_tag.tag_id,
        select: %{name: tag.name, count: count("*")},
        order_by: [desc: count("*")],
        limit: 20
      )
    )
    |> Enum.map(fn %{name: tag} -> tag end)
    |> then(&{:ok, &1})
  end
end
