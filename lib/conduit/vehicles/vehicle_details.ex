defmodule Conduit.Vehicles.VehicleDetails do
  use Ash.Resource,
    otp_app: :conduit,
    data_layer: :embedded

  attributes do
    attribute :year, :string do
      allow_nil? false
      public? true
    end

    attribute :make, :string do
      allow_nil? false
      public? true
    end

    attribute :model, :string do
      allow_nil? false
      public? true
    end

    attribute :trim, :string do
      allow_nil? false
      public? true
    end

    attribute :exterior_color, :string do
      allow_nil? false
      public? true
    end

    attribute :mileage, :integer do
      allow_nil? true
      public? true
    end
  end
end
