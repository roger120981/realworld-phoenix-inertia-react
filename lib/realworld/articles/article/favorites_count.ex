defmodule Realworld.Articles.Calculations.FavoritesCount do
  use Ash.Resource.Calculation
  import Ecto.Query

  @impl true
  def init(opts), do: {:ok, opts}

  # def load(_query, _opts, _context), do: []

  @impl true
  def calculate(records, _opts, _context) do
    ids = Enum.map(records, & &1.id)

    counts =
      Realworld.Repo.all(
        from(a in Realworld.Articles.Article,
          join: favorite in assoc(a, :favorites),
          where: a.id in ^ids,
          group_by: a.id,
          select: {a.id, count("*")}
        )
      )
      |> Map.new()

    Enum.map(records, fn %{id: id} ->
      Map.get(counts, id, 0)
    end)
  end
end
