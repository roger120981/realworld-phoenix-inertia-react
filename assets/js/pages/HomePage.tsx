import React from "react";
import {
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  Car,
  Award,
} from "lucide-react";
import { Link } from "@inertiajs/react";

const HomePage = ({ user }) => {
  console.log(user);
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Find the Perfect</span>
              <span className="block text-blue-600">
                Car Insurance in Minutes
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Compare multiple insurance providers instantly. Save time and
              money by finding the best coverage for your vehicle.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/register"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose InsureCompare?
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-blue-600" />
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Instant Comparison
                </h3>
                <p className="mt-2 text-center text-gray-500">
                  Get quotes from multiple insurance providers in seconds, not
                  hours.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <DollarSign className="h-12 w-12 text-blue-600" />
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Save Money
                </h3>
                <p className="mt-2 text-center text-gray-500">
                  Find the best rates by comparing multiple providers at once.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <Car className="h-12 w-12 text-blue-600" />
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Tailored Coverage
                </h3>
                <p className="mt-2 text-center text-gray-500">
                  Get personalized recommendations based on your vehicle and
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted by Thousands
            </h2>
            <div className="mt-6 flex justify-center space-x-8">
              <Award className="h-12 w-12 text-gray-400" />
              <Award className="h-12 w-12 text-gray-400" />
              <Award className="h-12 w-12 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400">
              &copy; 2025 InsureCompare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
