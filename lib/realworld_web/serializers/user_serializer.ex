defmodule RealworldWeb.UserSerializer do
  def to_map(user = %Realworld.Accounts.User{}) do
    %{
      id: user.id,
      username: user.username,
      email: user.email,
      image: user.image,
      bio: user.bio
    }
  end

  def assign_prop(conn, name, user) do
    Inertia.Controller.assign_prop(conn, name, fn -> to_map(user) end)
  end
end
