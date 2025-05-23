defmodule Realworld.Articles.Calculations.ReactionCounts do
  use Ash.Resource.Calculation
  import Ecto.Query

  @impl true
  def init(opts), do: {:ok, opts}

  @impl true
  def calculate(records, _opts, _context) do
    ids = Enum.map(records, & &1.id)

    reaction_counts =
      Realworld.Repo.all(
        from(c in Realworld.Articles.Comment,
          join: r in assoc(c, :reactions),
          where: c.id in ^ids,
          group_by: [c.id, r.type],
          select: {c.id, r.type, count("*")}
        )
      )
      |> Enum.group_by(
        fn {comment_id, _type, _count} -> comment_id end,
        fn {_comment_id, type, count} -> {type, count} end
      )

    Enum.map(records, fn %{id: id} ->
      case Map.get(reaction_counts, id) do
        nil -> %{}
        counts -> Map.new(counts)
      end
    end)
  end
end
