import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Loader2 } from "lucide-react";
import { useForm, router } from "@inertiajs/react";

interface Props {
  years: number[];
  makes: string[];
  models: string[];
  trims: string[];
  exterior_colors: string[];
  errors: any;
}

const dependantFields = {
  year: {
    reloadData: [],
    reloadOnly: ["makes", "models", "trims", "exterior_colors"],
    clearOnChange: ["make", "model", "trim", "exterior_color"],
  },
  make: {
    reloadData: ["year"],
    reloadOnly: ["models", "trims", "exterior_colors"],
    clearOnChange: ["model", "trim", "exterior_color"],
  },
  model: {
    reloadData: ["year", "make"],
    reloadOnly: ["trims", "exterior_colors"],
    clearOnChange: ["trim", "exterior_color"],
  },
};

const resetDependants = (field: string) => {
  if (field in dependantFields) {
    return dependantFields[field].clearOnChange.reduce(
      (acc, x) => ({
        ...acc,
        [x]: "",
      }),
      {}
    );
  } else {
    return {};
  }
};

const reload = (router, formData, field, value) => {
  const data = dependantFields[field].reloadData.reduce(
    (acc, x) => ({
      ...acc,
      [x]: formData[x],
    }),
    { year: "", make: "", model: "" }
  );
  router.reload({
    data: {
      ...data,
      [field]: value,
    },
    only: dependantFields[field].reloadOnly,
  });
};

const VehicleDetailsForm = (props: Props) => {
  const {
    data: formData,
    setData: setFormData,
    post,
    processing,
  } = useForm("VehicleDetails", {
    year: "",
    make: "",
    model: "",
    trim: "",
    exterior_color: "",
    mileage: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      ...resetDependants(name),
      [name]: value,
    }));

    if (name in dependantFields) {
      reload(router, formData, name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/vehicle-details", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Vehicle Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* First Row - Year, Make, Model */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Year Select */}
              <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-gray-700"
                >
                  Year
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select Year</option>
                  {props.years?.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {props.errors.year && (
                  <p className="mt-1 text-sm text-red-600">
                    {props.errors.year}
                  </p>
                )}
              </div>

              {/* Make Select */}
              <div>
                <label
                  htmlFor="make"
                  className="block text-sm font-medium text-gray-700"
                >
                  Make
                </label>
                <select
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  disabled={!props.makes?.length || processing}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-gray-100"
                >
                  <option value="">Select Make</option>
                  {props.makes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
                {props.errors.make && (
                  <p className="mt-1 text-sm text-red-600">
                    {props.errors.make}
                  </p>
                )}
              </div>

              {/* Model Select */}
              <div>
                <label
                  htmlFor="model"
                  className="block text-sm font-medium text-gray-700"
                >
                  Model
                </label>
                <select
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  disabled={!props.models?.length || processing}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-gray-100"
                >
                  <option value="">Select Model</option>
                  {props.models?.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
                {props.errors.model && (
                  <p className="mt-1 text-sm text-red-600">
                    {props.errors.model}
                  </p>
                )}
              </div>
            </div>

            {/* Second Row - Trim, Mileage, Color */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Trim Select */}
              <div>
                <label
                  htmlFor="trim"
                  className="block text-sm font-medium text-gray-700"
                >
                  Trim
                </label>
                <select
                  id="trim"
                  name="trim"
                  value={formData.trim}
                  onChange={handleChange}
                  disabled={!props.trims?.length}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-gray-100"
                >
                  <option value="">Select Trim</option>
                  {props.trims?.map((trim) => (
                    <option key={trim} value={trim}>
                      {trim}
                    </option>
                  ))}
                </select>
                {props.errors.trim && (
                  <p className="mt-1 text-sm text-red-600">
                    {props.errors.trim}
                  </p>
                )}
              </div>

              {/* Color Select */}
              <div>
                <label
                  htmlFor="color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Exterior Color
                </label>
                <select
                  id="exterior_color  "
                  name="exterior_color"
                  value={formData.exterior_color}
                  disabled={!props.exterior_colors?.length}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-gray-100"
                >
                  <option value="">Select Color</option>
                  {props.exterior_colors?.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
                {props.errors.exterior_color && (
                  <p className="mt-1 text-sm text-red-600">
                    {props.errors.exterior_color}
                  </p>
                )}
              </div>

              {/* Mileage Input */}
              <div>
                <label
                  htmlFor="mileage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mileage
                </label>
                <input
                  type="number"
                  id="mileage"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  placeholder="Enter mileage"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  min="0"
                />
                {props.errors.mileage && (
                  <p className="mt-1 text-sm text-red-600">
                    {props.errors.mileage}
                  </p>
                )}
              </div>
            </div>

            {/* Loading Indicator */}
            {processing && (
              <div className="flex justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-indigo-600" />
              </div>
            )}

            {/* Selected Vehicle Display */}
            {formData.year &&
              formData.make &&
              formData.model &&
              !processing && (
                <div className="p-4 bg-indigo-50 rounded-md">
                  <h3 className="text-sm font-medium text-indigo-800">
                    Selected Vehicle:
                  </h3>
                  <p className="mt-2 text-sm text-indigo-700">
                    {formData.year} {formData.make} {formData.model}
                    {formData.trim && ` ${formData.trim}`}
                    {formData.exterior_color && ` - ${formData.exterior_color}`}
                    {formData.mileage &&
                      ` - ${formData.mileage.toLocaleString()} miles`}
                  </p>
                </div>
              )}
          </div>
          <div className="w-full flex justify-end mt-4">
            <button
              type="button"
              disabled={processing}
              onClick={handleSubmit}
              className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {processing ? "Sending..." : "Next"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VehicleDetailsForm;
