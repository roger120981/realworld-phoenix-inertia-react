defmodule RealworldWeb.VehicleDetailsController do
  use RealworldWeb, :controller

  defguard is_blank(x) when x in [nil, ""]

  defp years_prop do
    year_start = Date.utc_today().year + 1
    year_end = year_start - 30
    Enum.to_list(year_start..year_end//-1) |> Enum.map(&to_string/1)
  end

  defp makes_prop(nil), do: []

  defp makes_prop(year) when is_binary(year) do
    case Integer.parse(year) do
      {year, _} -> makes_prop(year)
      _ -> []
    end
  end

  defp makes_prop(year) do
    brands = [
      {"Holden", 1856, 2020},
      {"Hummer", 1992, 2010},
      {"Rover", 1878, 2005},
      {"Pontiac", 1926, 2010},
      {"Saturn", 1985, 2009},
      {"Saab", 1945, 2012},
      {"Plymouth", 1928, 2001},
      {"Toyota", 1937, nil},
      {"Ford", 1903, nil},
      {"Volkswagen", 1937, nil},
      {"BMW", 1916, nil},
      {"Mercedes-Benz", 1926, nil},
      {"Tesla", 2003, nil},
      {"Honda", 1948, nil},
      {"DeSoto", 1928, 1961},
      {"Hyundai", 1967, nil},
      {"Kia", 1944, nil},
      {"Rivian", 2009, nil},
      {"Lucid", 2007, nil},
      {"NIO", 2014, nil},
      {"BYD", 1995, nil},
      {"Polestar", 2017, nil},
      {"Genesis", 2015, nil},
      {"Cupra", 2018, nil},
      {"Lynk & Co", 2016, nil}
    ]

    brands
    |> Enum.filter(fn {_brand, from, until} ->
      year >= from and (is_nil(until) or year <= until)
    end)
    |> Enum.map(fn {brand, _, _} -> brand end)
    |> Enum.sort()
  end

  def models_prop(year, make) when is_blank(year) or is_blank(make), do: []

  def models_prop(year, make) do
    :rand.seed(:default, :erlang.phash2({year, make}))

    Stream.repeatedly(fn ->
      Faker.Vehicle.model(make)
    end)
    |> Enum.take(10)
    |> Enum.uniq()
  end

  def trims_prop(year, make, model) when is_blank(year) or is_blank(make) or is_blank(model),
    do: []

  def trims_prop(year, make, model) do
    :rand.seed(:default, :erlang.phash2({year, make, model}))

    [
      "Standard",
      "Premium",
      "Deluxe",
      "Ultimate",
      "Touring",
      "GT",
      "GTI",
      "R",
      "S",
      "ST"
    ]
    |> Enum.shuffle()
    |> Enum.take(3)
  end

  def colors_prop(year, make, model) when is_blank(year) or is_blank(make) or is_blank(model),
    do: []

  def colors_prop(year, make, model) do
    :rand.seed(:default, :erlang.phash2({year, make, model}))

    [
      "Cosmic Black",
      "Arctic Pearl",
      "Solar Storm",
      "Midnight Sapphire",
      "Desert Sage",
      "Sunset Orange",
      "Electric Aqua",
      "Volcanic Bronze",
      "Nordic Forest",
      "Mystic Purple"
    ]
    |> Enum.shuffle()
    |> Enum.take(5)
    |> Enum.sort()
  end

  def params_to_props(conn, params) do
    session_vehicle = get_session(conn, :vehicle_details) |> dbg()
    year = params["year"] || session_vehicle["year"] || ""
    make = params["make"] || session_vehicle["make"] || ""
    model = params["model"] || session_vehicle["model"] || ""
    trim = params["trim"] || session_vehicle["trim"] || ""
    exterior_color = params["exterior_color"] || session_vehicle["exterior_color"] || ""
    mileage = params["mileage"] || session_vehicle["mileage"] || 0

    conn
    |> assign_prop(:years, fn -> years_prop() end)
    |> assign_prop(:makes, fn -> makes_prop(year) end)
    |> assign_prop(:models, fn -> models_prop(year, make) end)
    |> assign_prop(:trims, fn -> trims_prop(year, make, model) end)
    |> assign_prop(:exterior_colors, fn ->
      colors_prop(year, make, model)
    end)
    |> assign_prop(:year, year)
    |> assign_prop(:make, make)
    |> assign_prop(:model, model)
    |> assign_prop(:trim, trim)
    |> assign_prop(:exterior_color, exterior_color)
    |> assign_prop(:mileage, mileage)
  end

  def index(conn, params) do
    conn
    |> params_to_props(params)
    |> render_inertia("VehicleDetailsPage")
  end

  def update(conn, params) do
    AshPhoenix.Form.for_create(Realworld.Vehicles.VehicleDetails, :create)
    |> AshPhoenix.Form.submit(params: params)
    |> case do
      {:ok, _} ->
        conn
        |> put_session(:vehicle_details, params)
        |> put_flash(:success, "We've found products for you!")
        |> redirect(to: ~p"/compare-products")

      {:error, form} ->
        conn
        |> params_to_props(params)
        |> assign_errors(AshPhoenix.Form.errors(form, format: :simple) |> Map.new())
        |> render_inertia("VehicleDetailsPage")
    end
  end
end
