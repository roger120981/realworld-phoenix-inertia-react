import { useChannel } from "./useChannel";
import { ReactionType, ReactionCounts } from "../types";

/**
 * State maintained by reducer to track reaction counts and current user reaction for a Comment
 */
export type ReactionState = { 
  reactions: ReactionCounts; 
  userReaction: ReactionType | null; 
};

/**
 * Actions that can be sent over the channel to react/unreact to a comment for the current user
 */
export type ReactionActions = { 
  react: (type: ReactionType) => void; 
  unreact: () => void; 
};

/**
 * hook providing realtime reaction status and counts for a comment
 */
export const useReactions = (
  commentId: string,
  initialReactions: ReactionCounts,
  initialUserReaction: ReactionType | null
): [ReactionState, ReactionActions] => {
  const topic = `reactions:${commentId}`;
  const reducer = (state: ReactionState, message: any) => {
    switch (message.event) {
      case "closed":
        return { ...state, userReaction: null };
      case "comment":
      case "reaction:added":
      case "reaction:removed":
      case "reaction:changed":
        const { reactions, userReaction } = message.payload;
        return { reactions, userReaction };
      default:
        return state;
    }
  };
  const [state, broadcast] = useChannel(topic, reducer, {
    reactions: initialReactions,
    userReaction: initialUserReaction,
  });
  const actions = {
    react(type: ReactionType) {
      broadcast("react", { type });
    },
    unreact() {
      broadcast("unreact", {});
    },
  };
  return [state, actions];
};