import { useChannel } from "./useChannel";

/**
 * State maintained by reducer to track count of favorites and current user favorite status for an Article
 */
export type FavoriteState = { isFavorited: boolean; favoritesCount: number };

/**
 * Actions that can be sent over the channel to favorite/unfavorite an article for the current user
 */
export type FavoriteActions = { favorite: () => void; unfavorite: () => void };

/**
 * hook providing realtime favorite status and count for an article
 */
export const useFavorite = (
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
