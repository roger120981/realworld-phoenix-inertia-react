defmodule ConduitWeb.Router do
  use ConduitWeb, :router

  import AshAuthentication.Phoenix.Router, only: [auth_routes: 3]
  import AshAuthentication.Phoenix.Plug, only: [load_from_bearer: 2, load_from_session: 2]
  import AshAuthentication.Plug.Helpers, only: [set_actor: 2]

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :put_root_layout, html: {ConduitWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :load_from_session
    plug Inertia.Plug
  end

  pipeline :authenticated do
    plug ConduitWeb.AuthPlug, :user_required
  end

  pipeline :unauthenticated do
    plug ConduitWeb.AuthPlug, [:no_user, "/vehicle-details"]
  end

  pipeline :auth_optional do
    plug ConduitWeb.AuthPlug, :user_optional
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :load_from_bearer
    plug :set_actor, :user
  end

  scope "/", ConduitWeb do
    pipe_through [:browser, :auth_optional]
    get "/", PageController, :home
    get "/password-reset/:token", AuthController, :password_reset
    auth_routes AuthController, Conduit.Accounts.User, path: "/auth"
  end

  scope "/", ConduitWeb do
    pipe_through [:browser, :unauthenticated]
    get "/register", RegistrationController, :index
    post "/register", RegistrationController, :register
    get "/sign-in", SignInController, :index
    post "/sign-in", SignInController, :sign_in
    get "/forgot-password", ForgotPasswordController, :index
    post "/forgot-password", ForgotPasswordController, :forgot_password
  end

  scope "/", ConduitWeb do
    pipe_through [:browser, :authenticated]
    get "/sign-out", AuthController, :sign_out

    scope "/user" do
      get "/", UserProfileController, :show
      get "/:id/profile", UserProfileController, :show
      post "/:id/profile", UserProfileController, :update
    end

    scope "/vehicle-details" do
      get "/", VehicleDetailsController, :index
      post "/", VehicleDetailsController, :update
    end

    scope "/compare-products" do
      get "/", CompareProductsController, :index
    end
  end

  # Other scopes may use custom stacks.
  scope "/api", ConduitWeb do
    pipe_through :api
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:conduit, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: ConduitWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
