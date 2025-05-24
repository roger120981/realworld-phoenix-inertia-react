defmodule Realworld.Articles.Calculations.UserReaction do
  use Ash.Resource.Calculation
  import Ecto.Query

  @impl true
  def init(opts), do: {:ok, opts}

  @impl true
  def calculate(records, _opts, %{actor: nil}) do
    # When no actor is present, return nil for all records
    Enum.map(records, fn _ -> nil end)
  end

  @impl true
  def calculate(records, _opts, %{actor: actor}) do
    ids = Enum.map(records, & &1.id)
    user_id = actor.id

    user_reactions = 
      Realworld.Repo.all(
        from r in Realworld.Articles.Reaction,
        where: r.comment_id in ^ids and r.user_id == ^user_id,
        select: {r.comment_id, r.type}
      )
      |> Map.new()

    Enum.map(records, fn %{id: id} ->
      Map.get(user_reactions, id)
    end)
  end

  # Fallback for when context doesn't have actor
  @impl true
  def calculate(records, _opts, _context) do
    Enum.map(records, fn _ -> nil end)
  end
end