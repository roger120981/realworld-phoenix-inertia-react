import React from "react";
import { Shield, Check } from "lucide-react";
import { Link } from "@inertiajs/react";

interface InsuranceProduct {
  name: string;
  provider: string;
  monthlyPrice: number;
  benefits: string[];
  recommended: boolean;
}

interface Props {
  products: InsuranceProduct[];
}
const CompareProductsPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Find Your Perfect Coverage
          </h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Available Insurance Products
            </h2>
            <Link
              href="/vehicle-details"
              className="text-blue-600 hover:text-blue-800"
            >
              Edit Details
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {props.products.map((product, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow p-6 ${
                  product.recommended ? "ring-2 ring-blue-600" : ""
                }`}
              >
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  {product.recommended && (
                    <div className="ml-4 inline-block bg-blue-100 text-blue-800 font-semibold text-sm px-2 py-1 rounded">
                      Recommended
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-2">{product.provider}</p>
                <p className="text-2xl font-bold mb-4">
                  ${product.monthlyPrice}/mo
                </p>
                <div className="space-y-2 h-64">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 mb-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProductsPage;
