defmodule Conduit.Accounts do
  require AshAuthentication.Strategies

  use Ash.Domain,
    otp_app: :conduit

  resources do
    resource Conduit.Accounts.Token

    resource Conduit.Accounts.User do
      define :update_user_profile, action: :update_profile
      define :get_user_by_id, action: :read, get_by: :id
    end
  end

  def sign_in(params) do
    Ash.Query.for_read(Conduit.Accounts.User, :sign_in_with_password, params, authorize?: false)
    |> Ash.read_one()
    |> case do
      {:ok, user} ->
        {:ok, user}

      {:error, error} ->
        dbg(error)
        {:error, %{email: "Could not be found"}}
    end
  end

  def register_user(params) do
    action(Conduit.Accounts.User, :register_with_password, params, authorize?: false)
  end

  def request_password_reset(params) do
    action(Conduit.Accounts.User, :request_password_reset_token, params, authorize?: false)
  end

  defp action(resource, action, params, opts) do
    AshPhoenix.Form.for_action(resource, action, opts)
    |> AshPhoenix.Form.submit(params: params)
    |> case do
      :ok -> :ok
      {:ok, result} -> {:ok, result}
      {:error, form} -> {:error, form |> AshPhoenix.Form.errors(format: :simple) |> Map.new()}
    end
  end
end
