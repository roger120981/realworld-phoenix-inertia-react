defmodule Realworld.Accounts.Generator do
  use Ash.Resource,
    otp_app: :realworld,
    domain: Realworld.Accounts

  actions do
    action :generate_user, {:array, :struct} do
      constraints items: [instance_of: Realworld.Accounts.User]
      argument :count, :integer, allow_nil?: false

      run fn input, ctx ->
        Realworld.Accounts.UserGenerator.user()
        |> Ash.Generator.generate_many(input.arguments.count)
        |> then(&{:ok, &1})
      end
    end
  end
end
