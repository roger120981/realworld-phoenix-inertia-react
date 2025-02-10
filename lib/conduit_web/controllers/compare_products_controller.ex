defmodule ConduitWeb.CompareProductsController do
  use ConduitWeb, :controller

  @products [
    %{
      name: "Basic Coverage",
      provider: "SafeGuard Insurance",
      monthlyPrice: 89.99,
      benefits: [
        "Liability coverage up to $1M",
        "Basic collision coverage",
        "24/7 roadside assistance",
        "Mobile app access"
      ],
      recommended: false
    },
    %{
      name: "Premium Protection",
      provider: "SecureShield Auto",
      monthlyPrice: 129.99,
      benefits: [
        "Comprehensive coverage up to $2M",
        "Full collision coverage",
        "Zero deductible",
        "Rental car coverage",
        "24/7 premium roadside assistance"
      ],
      recommended: true
    },
    %{
      name: "Standard Plus",
      provider: "TrustDrive Insurance",
      monthlyPrice: 109.99,
      benefits: [
        "Liability coverage up to $1.5M",
        "Enhanced collision coverage",
        "Low deductible",
        "Basic roadside assistance"
      ],
      recommended: false
    }
  ]

  def index(conn, params) do
    conn
    |> assign_prop(:products, @products)
    |> render_inertia("CompareProductsPage")
  end
end
