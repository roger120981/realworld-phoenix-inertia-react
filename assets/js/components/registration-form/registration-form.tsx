import React from "react";
import { Button } from "@/components/button";
import { useForm } from "@inertiajs/react";

export const RegistrationForm = () => {
  const formData = useForm({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    formData.setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    formData.post("/register");
  };

  const FieldError = ({ error: error }) => {
    if (!error) {
      return null;
    }
    return <p className="mt-1 text-sm text-red-600">{error}</p>;
  };

  return (
    <>
      <form id="register-form" onSubmit={handleSubmit} noValidate={true}>
        <fieldset className="form-group">
          <input
            onChange={handleInput}
            type="text"
            name="username"
            placeholder="Username"
            className="form-control form-control-lg"
          />
          <FieldError error={formData.errors.username} />
        </fieldset>
        <fieldset className="form-group">
          <input
            onChange={handleInput}
            type="email"
            name="email"
            placeholder="Email"
            className="form-control form-control-lg"
          />
          <FieldError error={formData.errors.email} />
        </fieldset>
        <fieldset className="form-group">
          <input
            onChange={handleInput}
            type="password"
            name="password"
            placeholder="Password"
            className="form-control form-control-lg"
            autoComplete="new-password"
          />
          <FieldError error={formData.errors.password} />
        </fieldset>
        <fieldset className="form-group">
          <input
            onChange={handleInput}
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            className="form-control form-control-lg"
            autoComplete="new-password"
          />
          <FieldError error={formData.errors.password_confirmation} />
        </fieldset>
        <Button
          component="button"
          size="lg"
          variant="filled"
          type="submit"
          className="pull-xs-right"
          disabled={formData.processing}
        >
          Sign up
        </Button>
      </form>
    </>
  );
};
