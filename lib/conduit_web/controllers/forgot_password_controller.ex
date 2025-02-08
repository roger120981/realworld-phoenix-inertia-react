defmodule ConduitWeb.ForgotPasswordController do
  use ConduitWeb, :controller

  def index(conn, _params) do
    conn
    |> render_inertia("ForgotPasswordPage")
  end

  def forgot_password(conn, params) do
    params = Map.take(params, ["email"])

    case Conduit.Accounts.request_password_reset(params) do
      :ok ->
        conn
        |> assign_prop(:success, true)
        |> render_inertia("ForgotPasswordPage")

      {:error, errors} ->
        conn
        |> assign_errors(errors)
        |> redirect(to: ~p"/forgot-password")
    end
  end
end
