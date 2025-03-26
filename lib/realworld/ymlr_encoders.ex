require Protocol

defimpl Ymlr.Encoder, for: Ash.CiString do
  def encode(data, indent_level, opts) do
    data |> to_string() |> Ymlr.Encoder.encode(indent_level, opts)
  end
end

defimpl Ymlr.Encoder, for: Ash.NotLoaded do
  def encode(_data, indent_level, opts) do
    nil |> Ymlr.Encoder.encode(indent_level, opts)
  end
end

exclude_fields = [:__meta__,   :__lateral_join_source__,  :__metadata__, :__order__, :calculations, :aggregates, :created_at, :updated_at]

Protocol.derive(Ymlr.Encoder, Realworld.Accounts.User, except: [:hashed_password | exclude_fields])
Protocol.derive(Ymlr.Encoder, Realworld.Articles.Article, except: exclude_fields)
Protocol.derive(Ymlr.Encoder, Realworld.Articles.Tag, except: exclude_fields)
