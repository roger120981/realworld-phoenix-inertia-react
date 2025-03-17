defmodule Realworld.Vehicles.VehicleDetails do
  use Ash.Resource,
    otp_app: :realworld,
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

  validations do
    validate compare(:mileage, greater_than_or_equal_to: 0) do
      message "must be greater than 0"
    end
  end
end
