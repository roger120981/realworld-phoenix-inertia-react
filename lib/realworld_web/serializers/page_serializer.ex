defmodule RealworldWeb.PageSerializer do
  def to_map(%Ash.Page.Offset{} = page, results_serializer) do
    %{
      results: Enum.map(page.results, results_serializer),
      limit: page.limit,
      offset: page.offset,
      count: page.count,
      hasMore: page.more?,
      pages: ceil(page.count / page.limit),
      page: ceil(page.offset / page.limit)
    }
  end
end
