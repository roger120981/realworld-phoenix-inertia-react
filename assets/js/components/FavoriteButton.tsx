import React from "react";
import { Button } from "@/components/Button";
import { Heart } from "lucide-react";
import { useChannel } from "@/lib/useChannel";

type FavoriteState = { isFavorited: boolean; favoritesCount: number };
type FavoriteActions = { favorite: () => void; unfavorite: () => void };

const useFavorite = (
  articleId: string,
  initialCount: number,
  initialIsFavorited: boolean
): [FavoriteState, FavoriteActions] => {
  const topic = `favorites:${articleId}`;
  const reducer = (state: FavoriteState, message: any) => {
    switch (message.event) {
      case "closed":
        return { ...state, isFavorited: false };
      case "article":
      case "article:favorited":
      case "article:unfavorited":
        const { isFavorited, favoritesCount } = message.payload;
        return { isFavorited, favoritesCount };
      default:
        return state;
    }
  };
  const [state, broadcast] = useChannel(topic, reducer, {
    isFavorited: initialIsFavorited,
    favoritesCount: initialCount,
  });
  const actions = {
    favorite() {
      broadcast("favorite", {});
    },
    unfavorite() {
      broadcast("unfavorite", {});
    },
  };
  return [state, actions];
};

interface FavoriteButtonProps {
  articleId: string;
  isFavorited: boolean;
  favoritesCount?: number;
  showMessage: boolean;
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const [{ favoritesCount, isFavorited }, favoriteApi] = useFavorite(
    props.articleId,
    props.favoritesCount ?? 0,
    props.isFavorited
  );

  const content = props.showMessage ? (
    <>
      <Heart className="inline h-[1rem]" />{" "}
      {props.isFavorited ? "Unfavorite Article " : "Favorite Article "}
      <span className="counter">({favoritesCount})</span>
    </>
  ) : (
    <>
      <Heart className="inline h-[1rem]" /> {favoritesCount}
    </>
  );

  return (
    <Button
      className="inline action-btn"
      component="button"
      variant={isFavorited ? "filled" : "outline"}
      onClick={(e) => {
        if (isFavorited) {
          favoriteApi.unfavorite();
        } else {
          favoriteApi.favorite();
        }
      }}
    >
      {content}
    </Button>
  );
};
