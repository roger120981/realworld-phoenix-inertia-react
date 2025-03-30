import React, { FormEvent } from "react";
import { Button } from "@/components/Button";
import { router, useForm } from "@inertiajs/react";

export const LogoutButton = () => {
  const formData = useForm();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.clearHistory();
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
