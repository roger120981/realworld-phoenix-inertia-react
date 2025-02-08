defmodule Conduit.Repo do
  use AshSqlite.Repo,
    otp_app: :conduit

  def installed_extensions() do
    ["ash-functions"]
  end
end
