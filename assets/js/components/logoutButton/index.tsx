import React from "react";
import { Button } from "@/components/button";
import { useForm } from "@inertiajs/react";

export const LogoutButton = () => {
  const formData = useForm();
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    formData.post(`/logout`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button
        component="button"
        color="danger"
        type="submit"
        size="lg"
        disabled={formData.processing}
      >
        Or click here to logout.
      </Button>
    </form>
  );
};
