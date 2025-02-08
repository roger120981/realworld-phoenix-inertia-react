defmodule Conduit.Repo do
  use AshSqlite.Repo,
    otp_app: :conduit
end
