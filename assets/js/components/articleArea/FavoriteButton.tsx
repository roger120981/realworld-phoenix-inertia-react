import React from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/button";

interface FavoriteButtonProps {
  isFavorited: boolean;
  showMessage: boolean;
  path: string;
  favoritesCount?: number;
}
export const FavoriteButton = (props: FavoriteButtonProps) => {
  const content = props.showMessage ? (
    <>
      <i className="ion-heart"></i>{" "}
      {props.isFavorited ? "Unfavorite Article " : "Favorite Article "}
      <span className="counter">({props.favoritesCount || 0})</span>
    </>
  ) : (
    <>
      <i className="ion-heart"></i> {props.favoritesCount || 0}
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
