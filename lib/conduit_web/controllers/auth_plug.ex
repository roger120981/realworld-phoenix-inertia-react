defmodule ConduitWeb.AuthPlug do
  use ConduitWeb, :verified_routes

  def init(mode) when is_atom(mode) do
    [mode: mode]
  end

  def init(opts) when is_list(opts) do
    [mode, to] = opts
    [mode: mode, to: to]
  end

  def call(conn, opts) do
    case Keyword.get(opts, :mode, :user_required) do
      :user_required ->
        if !conn.assigns[:current_user],
          do: conn |> Phoenix.Controller.redirect(to: Keyword.get(opts, :to, ~p"/sign-in")),
          else: conn |> assign_user_prop()

      :user_optional ->
        if conn.assigns[:current_user],
          do: conn |> assign_user_prop(),
          else: Plug.Conn.assign(conn, :current_user, nil)

      :no_user ->
        if conn.assigns[:current_user],
          do:
            conn
            |> assign_user_prop()
            |> Phoenix.Controller.redirect(to: Keyword.get(opts, :to, ~p"/")),
          else: conn
    end
  end

  defp assign_user_prop(conn) do
    conn
    |> Inertia.Controller.assign_prop(
      :user,
      Map.take(conn.assigns.current_user, [:id, :first_name, :last_name])
    )
  end
end
