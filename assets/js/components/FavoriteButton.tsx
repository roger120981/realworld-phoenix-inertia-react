import React from "react";
import { Button } from "@/components/Button";
import { Heart } from "lucide-react";
import { useFavorite } from "@/lib/useFavorite";

/**
 * Props for the FavoriteButton component
 */
interface FavoriteButtonProps {
  articleId: string;
  isFavorited: boolean;
  favoritesCount?: number;
  showMessage: boolean;
}

/**
 * Self-contained Favorite button.
 *
 * Accepts initial state and establishes a Channel to the backend for realtime updates
 */
export const FavoriteButton = (props: FavoriteButtonProps) => {
  const [{ favoritesCount, isFavorited }, favoriteApi] = useFavorite(
    props.articleId,
    props.favoritesCount ?? 0,
    props.isFavorited
  );
  return (
    <FavoriteButtonDisplay
      articleId={props.articleId}
      isFavorited={isFavorited}
      favoritesCount={favoritesCount}
      showMessage={props.showMessage}
      favorite={favoriteApi.favorite}
      unfavorite={favoriteApi.unfavorite}
    />
  );
};

/**
 * Props for displaying a Favorite Button
 */
interface FavoriteButtonDisplayProps {
  articleId: string;
  isFavorited: boolean;
  favoritesCount: number;
  showMessage: boolean;
  favorite: () => void;
  unfavorite: () => void;
}

/**
 * Display-only version of FavoriteButton component.
 *
 * Some pages require multiple <FavoriteButton> instances for the same article.
 * This doesn't work when the component itself establishes the Channel for realtime updates.
 * To work around the problem, pages such as the Article page can lift the hook up to the container
 * and pass all props in to the multiple instances of <FavoriteButtonDisplay/> on the page.
 */
export const FavoriteButtonDisplay = (props: FavoriteButtonDisplayProps) => {
  const content = props.showMessage ? (
    <>
      <Heart className="inline h-[1rem]" />{" "}
      {props.isFavorited ? "Unfavorite Article " : "Favorite Article "}
      <span className="counter">({props.favoritesCount})</span>
    </>
  ) : (
    <>
      <Heart className="inline h-[1rem]" /> {props.favoritesCount}
    </>
  );

  return (
    <Button
      className="inline action-btn"
      component="button"
      variant={props.isFavorited ? "filled" : "outline"}
      onClick={(e) => {
        if (props.isFavorited) {
          props.unfavorite();
        } else {
          props.favorite();
        }
      }}
    >
      {content}
    </Button>
  );
};
