defmodule Realworld.Accounts do
  require AshAuthentication.Strategies

  use Ash.Domain,
    otp_app: :realworld,
    extensions: [AshOps]

  mix_tasks do
    action Realworld.Accounts.User, :generate_user, :generate
    list Realworld.Accounts.User, :list_users, :read
  end

  resources do
    resource Realworld.Accounts.Token

    resource Realworld.Accounts.User do
      define :get_user_by_id, action: :read, get_by: :id
      define :get_user_by_username, action: :get_by_username, args: [:username]
    end
  end

  def sign_in(params) do
    Ash.Query.for_read(Realworld.Accounts.User, :sign_in_with_password, params, authorize?: false)
    |> Ash.read_one()
    |> case do
      {:ok, user} ->
        {:ok, user}

      {:error, error} ->
        {:error, %{email: "Could not be found"}}
    end
  end

  def register_user(params) do
    action(Realworld.Accounts.User, :register_with_password, params, authorize?: false)
  end

  def request_password_reset(params) do
    action(Realworld.Accounts.User, :request_password_reset_token, params, authorize?: false)
  end

  def update_user(params, opts) do
    with {:ok, user} <- Realworld.Accounts.get_user_by_id(params["id"], opts) do
      action(user, :update, params, opts)
    end
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
