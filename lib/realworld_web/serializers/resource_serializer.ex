defmodule RealworldWeb.ResourceSerializer do
  @moduledoc """
  Generic serializer for Ash resources.
  Converts Ash resource structs to plain maps for serialization.
  Only includes attributes and relationships with public?: true.
  """

  @type ash_resource :: struct()
  @type serialized_resource :: map()

  @doc """
  Converts an Ash resource struct to a map with only public attributes and relationships.
  Returns the plain map representation of the resource.
  """
  @spec to_map(any()) :: nil | serialized_resource | list(serialized_resource)
  def to_map(nil), do: nil
  def to_map(%Ash.NotLoaded{}), do: nil

  def to_map(resource) when is_list(resource), do: Enum.map(resource, &to_map/1)

  # For Ash resources
  def to_map(%{__struct__: module} = resource) do
    if is_ash_resource?(module) do
      serialize_ash_resource(module, resource)
    else
      resource
    end
  end

  # For non-struct values (maps, primitives, etc.)
  def to_map(value), do: value

  @doc """
  Assigns a prop to the Inertia connection.
  """
  @spec assign_prop(Plug.Conn.t(), atom(), any() | (-> any())) :: Plug.Conn.t()
  def assign_prop(conn, name, resource_or_fn) when is_function(resource_or_fn, 0) do
    prop_fn = fn -> to_map(resource_or_fn.()) end
    Inertia.Controller.assign_prop(conn, name, prop_fn)
  end

  def assign_prop(conn, name, resource) do
    Inertia.Controller.assign_prop(conn, name, to_map(resource))
  end

  # Private functions

  @spec is_ash_resource?(module()) :: boolean()
  defp is_ash_resource?(module) do
    Ash.Resource.Info.resource?(module)
  end

  @spec serialize_ash_resource(module(), ash_resource()) :: serialized_resource()
  defp serialize_ash_resource(module, resource) do
    attribute_map = build_attribute_map(module, resource)
    relationship_map = build_relationship_map(module, resource)

    Map.merge(attribute_map, relationship_map)
  end

  @spec build_attribute_map(module(), ash_resource()) :: map()
  defp build_attribute_map(module, resource) do
    module
    |> Ash.Resource.Info.public_attributes()
    |> Enum.map(& &1.name)
    |> Map.new(fn attr -> {attr, Map.get(resource, attr)} end)
  end

  @spec build_relationship_map(module(), ash_resource()) :: map()
  defp build_relationship_map(module, resource) do
    module
    |> Ash.Resource.Info.public_relationships()
    |> Enum.map(& &1.name)
    |> Enum.map(fn rel -> serialize_relationship(rel, Map.get(resource, rel)) end)
    |> Enum.reject(&is_nil/1)
    |> Map.new()
  end

  @spec serialize_relationship(atom(), Ash.NotLoaded.t()) :: nil
  defp serialize_relationship(_rel_name, %Ash.NotLoaded{}), do: nil

  @spec serialize_relationship(atom(), nil) :: {atom(), nil}
  defp serialize_relationship(rel_name, nil), do: {rel_name, nil}

  @spec serialize_relationship(atom(), list()) :: {atom(), list()}
  defp serialize_relationship(rel_name, values) when is_list(values),
    do: {rel_name, Enum.map(values, &to_map/1)}

  @spec serialize_relationship(atom(), any()) :: {atom(), any()}
  defp serialize_relationship(rel_name, value), do: {rel_name, to_map(value)}
end
