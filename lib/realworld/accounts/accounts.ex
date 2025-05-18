defmodule Realworld.Accounts do
  require AshAuthentication.Strategies

  use Ash.Domain,
    otp_app: :realworld,
    extensions: [AshOps]

  mix_tasks do
    action Realworld.Accounts.Generator, :generate_user, :generate_user, arguments: [:count]
    list Realworld.Accounts.User, :list_users, :read
  end

  resources do
    resource Realworld.Accounts.Token

    resource Realworld.Accounts.User do
      define :get_user_by_id, action: :read, get_by: :id
      define :get_user_by_username, action: :get_by_username, args: [:username]
      define :register_user, action: :register_with_password
      define :request_password_reset, action: :request_password_reset_token
      define :sign_in, action: :sign_in_with_password
      define :update_user, action: :update
    end

    resource Realworld.Accounts.Generator
  end
end
