defmodule AshInertiaError do
  def to_errors(error_or_errors, message_func \\ &default_message_func/1) do
    error_or_errors
    |> Ash.Error.to_error_class()
    |> Map.get(:errors)
    |> Enum.flat_map(fn error ->
      if AshPhoenix.FormData.Error.impl_for(error) do
        error
        |> AshPhoenix.FormData.Error.to_form_error()
        |> List.wrap()
        |> Enum.map(fn {field, message, vars} ->
          {Enum.join(error.path ++ [field], "."), message_func.({message, vars})}
        end)
      else
        []
      end
    end)
    |> Map.new()
  end

  @doc false
  def default_message_func({message, vars}) do
    Enum.reduce(vars || [], message, fn {key, value}, acc ->
      String.replace(acc, "%{#{key}}", to_string(value))
    end)
  end
end

defimpl Inertia.Errors,
  for: [
    Ash.Error,
    Ash.Error.Invalid,
    Ash.Error.Unknown,
    Ash.Error.Forbidden,
    Ash.Changeset,
    Ash.Query,
    Ash.ActionInput
  ] do
  def to_errors(value) do
    value
    |> AshInertiaError.to_errors()
  end

  def to_errors(value, message_func) do
    value
    |> AshInertiaError.to_errors(message_func)
  end
end
