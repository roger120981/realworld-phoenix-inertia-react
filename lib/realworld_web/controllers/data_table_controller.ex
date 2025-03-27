defmodule RealworldWeb.DataTableController do
  use RealworldWeb, :controller

  def data(search, sort_config) do
    [
      %{
        "id" => 1,
        "name" => "Contact properties",
        "workspace" => "Workspace 1, Workspace 2",
        "type" => "System",
        "elements" => 12,
        "version" => 1,
        "lastModified" => "2023-04-15",
        "attachedTo" => "Programs",
        "status" => "Enabled"
      },
      %{
        "id" => 2,
        "name" => "Regional questions",
        "workspace" => "Workspace 1",
        "type" => "System",
        "elements" => 45,
        "version" => 5,
        "lastModified" => "2022-11-30",
        "attachedTo" => "Contacts",
        "status" => "Enabled"
      },
      %{
        "id" => 3,
        "name" => "Skills",
        "workspace" => "Workspace 2",
        "type" => "System",
        "elements" => 45,
        "version" => 5,
        "lastModified" => "2022-11-30",
        "attachedTo" => "Contacts",
        "status" => "Enabled"
      },
      %{
        "id" => 4,
        "name" => "Delegation properties",
        "workspace" => "Workspace 1, Workspace 2",
        "type" => "System",
        "elements" => 31,
        "version" => 1,
        "lastModified" => "2021-07-22",
        "attachedTo" => "Users",
        "status" => "Enabled"
      },
      %{
        "id" => 5,
        "name" => "Automatic scoring",
        "workspace" => "Workspace 2",
        "type" => "System",
        "elements" => 4,
        "version" => 5,
        "lastModified" => "2020-03-11",
        "attachedTo" => "Project",
        "status" => "Disabled"
      },
      %{
        "id" => 6,
        "name" => "Organization information",
        "workspace" => "Workspace 2",
        "type" => "Custom",
        "elements" => 4,
        "version" => 5,
        "lastModified" => "2020-03-11",
        "attachedTo" => "Project",
        "status" => "Enabled"
      },
      %{
        "id" => 7,
        "name" => "Budget info",
        "workspace" => "Workspace 2",
        "type" => "Custom",
        "elements" => 4,
        "version" => 5,
        "lastModified" => "2020-03-11",
        "attachedTo" => "Project",
        "status" => "Disabled"
      }
    ]
    |> apply_search(search)
    |> apply_sorting(sort_config)
  end

  defp apply_search(data, nil) do
    data
  end

  defp apply_search(data, search) do
    Enum.filter(data, fn item ->
      Enum.any?(item, fn {_key, value} ->
        is_binary(value) and value =~ search
      end)
    end)
  end

  defp apply_sorting(data, nil) do
    data
  end

  defp apply_sorting(data, sort_config) do
    Enum.sort_by(data, &Map.get(&1, sort_config.key), sort_config.direction)
  end

  def sort_config(params) do
    case {Map.get(params, "sort"), Map.get(params, "sort_dir", "asc")} do
      {nil, _} -> nil
      {field, dir} -> %{key: field, direction: String.to_existing_atom(dir)}
    end
  end

  def index(conn, params) do
    sort_config = sort_config(params)
    search = Map.get(params, "search", "")

    conn
    |> assign_prop(:sort, sort_config)
    |> assign_prop(:search, search)
    |> assign_prop(:items, data(search, sort_config))
    |> render_inertia("DataTablePage")
  end
end
