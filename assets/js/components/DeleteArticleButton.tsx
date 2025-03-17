import React from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/Button";
import { Trash2 } from "lucide-react";

interface DeleteArticleProps {
  path: string;
}

export const DeleteArticleButton = ({ path }: DeleteArticleProps) => {
  const form = useForm();
  return (
    <form
      className={"inline action-btn"}
      onSubmit={(e) => {
        e.preventDefault();
        if (confirm("Delete this article?")) {
          form.delete(path);
        }
      }}
    >
      <Button
        component="button"
        color="danger"
        type="submit"
        disabled={form.processing}
      >
        <Trash2 className="inline h-[1rem]" />
        &nbsp;Delete Article
      </Button>
    </form>
  );
};
