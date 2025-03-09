import React from "react";
import { Button } from "@/components/button";
import { useForm } from "@inertiajs/react";

export const LoginForm = () => {
  const formData = useForm({ email: "", password: "" });
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
    formData.post("/login");
  };

  return (
    <>
      <form id="login-form" onSubmit={handleSubmit} noValidate={true}>
        <fieldset className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control form-control-lg"
            onChange={handleInput}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control form-control-lg"
            onChange={handleInput}
          />
        </fieldset>
        <Button
          component="button"
          size="lg"
          type="submit"
          className="pull-xs-right"
          disabled={formData.processing}
        >
          Sign in
        </Button>
      </form>
    </>
  );
};
