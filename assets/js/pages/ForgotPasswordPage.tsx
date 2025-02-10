import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/alert";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/card";
import { Link, useForm } from "@inertiajs/react";

const ForgotPasswordForm = ({ success }) => {
  const {
    data: formData,
    setData: setFormData,
    post,
    processing,
    errors,
  } = useForm("ForgotPasswordForm", {
    email: "",
  });

  const email = formData.email;
  const error = errors.error;

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    post("forgot-password");
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
              <CardTitle className="mt-4 text-2xl font-bold">
                Check your email
              </CardTitle>
              <CardDescription className="mt-2">
                If an account exists for {email}, we've sent password reset
                instructions to this email address.
              </CardDescription>
              <div className="mt-6">
                <Link
                  href="/sign-in"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Return to sign in
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md h-[350px] bg-gray-50">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Reset your password
          </CardTitle>
          <CardDescription className="mt-2">
            Enter your email address and we'll send you instructions to reset
            your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setFormData({ email: e.target.value });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {processing ? "Sending..." : "Send reset instructions"}
            </button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
