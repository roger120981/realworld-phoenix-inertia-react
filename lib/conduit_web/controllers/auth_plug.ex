defmodule ConduitWeb.AuthPlug do
  use ConduitWeb, :verified_routes

  def init(mode) do
    [mode: mode]
  end

  def call(conn, opts) do
    dbg(conn.assigns)

    case Keyword.get(opts, :mode, :user_required) do
      :user_required ->
        if !conn.assigns[:current_user],
          do: conn |> Phoenix.Controller.redirect(to: ~p"/sign-in"),
          else: conn

      :user_optional ->
        if conn.assigns[:current_user], do: conn, else: Plug.Conn.assign(conn, :current_user, nil)

      :no_user ->
        if conn.assigns[:current_user],
          do: conn |> Phoenix.Controller.redirect(to: ~p"/"),
          else: conn
    end
  end
end
