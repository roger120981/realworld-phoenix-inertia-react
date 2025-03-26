defimpl Ymlr.Encoder, for: Ash.CiString do
  def encode(data, indent_level, opts) do
    data |> to_string() |> Ymlr.Encoder.encode(indent_level, opts)
  end
end

defimpl Ymlr.Encoder, for: Ash.NotLoaded do
  def encode(data, indent_level, opts) do
    nil |> Ymlr.Encoder.encode(indent_level, opts)
  end
end
