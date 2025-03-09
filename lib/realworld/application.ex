defmodule Realworld.Application do
  @moduledoc false
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      RealworldWeb.Telemetry,
      Realworld.Repo,
      {DNSCluster, query: Application.get_env(:realworld, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Realworld.PubSub},
      {Finch, name: Realworld.Finch},
      RealworldWeb.Endpoint,
      {AshAuthentication.Supervisor, [otp_app: :realworld]}
    ]

    opts = [strategy: :one_for_one, name: Realworld.Supervisor]
    Supervisor.start_link(children, opts)
  end

  @impl true
  def config_change(changed, _new, removed) do
    RealworldWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
