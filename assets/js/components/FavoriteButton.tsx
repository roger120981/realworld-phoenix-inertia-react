import React from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/Button";
import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  isFavorited: boolean;
  showMessage: boolean;
  path: string;
  favoritesCount?: number;
}
export const FavoriteButton = (props: FavoriteButtonProps) => {
  const content = props.showMessage ? (
    <>
      <Heart className="inline h-[1rem]" />{" "}
      {props.isFavorited ? "Unfavorite Article " : "Favorite Article "}
      <span className="counter">({props.favoritesCount || 0})</span>
    </>
  ) : (
    <>
      <Heart className="inline h-[1rem]" /> {props.favoritesCount || 0}
    </>
  );

  const form = useForm();
  return (
    <form
      className="inline action-btn"
      onSubmit={(e) => {
        e.preventDefault();
        form.post(props.path);
      }}
    >
      <Button
        component="button"
        variant={props.isFavorited ? "filled" : "outline"}
        disabled={form.processing}
      >
        {content}
      </Button>
    </form>
  );
};
