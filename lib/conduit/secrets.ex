defmodule Conduit.Secrets do
  use AshAuthentication.Secret

  def secret_for([:authentication, :tokens, :signing_secret], Conduit.Accounts.User, _opts) do
    Application.fetch_env(:conduit, :token_signing_secret)
  end
end
