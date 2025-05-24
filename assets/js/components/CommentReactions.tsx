import React, { useState, useEffect, useRef } from "react";
import { ReactionType, ReactionCounts } from "../types";
import axios from "axios";

// Map reaction types to emojis
const emojis: Record<ReactionType, string> = {
  like: "👍",
  laugh: "😂",
  love: "❤️",
  clap: "👏",
  wow: "😮",
  sad: "😢",
  angry: "😠",
};

// Available reaction types
const reactionTypes: ReactionType[] = [
  "like",
  "laugh",
  "love",
  "clap",
  "wow",
  "sad",
  "angry",
];

// Component interfaces
interface ReactionIconProps {
  type: ReactionType;
  count: number;
  onClick: () => void;
  isSelected?: boolean;
}

interface CommentReactionsProps {
  commentId: string;
  reactions?: ReactionCounts;
  isLoggedIn: boolean;
  userReaction?: ReactionType | null;
}

interface ReactionMenuProps {
  isOpen: boolean;
  onReact: (type: ReactionType) => void;
  userReaction?: ReactionType | null;
}

// Individual reaction icon component
const ReactionIcon: React.FC<ReactionIconProps> = ({
  type,
  count,
  onClick,
  isSelected = false,
}) => {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm hover:bg-gray-100 ${
          isSelected ? "bg-blue-100 border-blue-300 border" : ""
        }`}
      >
        <span>{emojis[type]}</span>
        {count > 0 && <span>{count}</span>}
      </button>
    </div>
  );
};

// Reaction menu component
const ReactionMenu: React.FC<ReactionMenuProps> = ({ isOpen, onReact, userReaction }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex gap-2 z-10">
      {reactionTypes.map((type) => {
        const emoji = emojis[type];
        return (
          <button
            key={type}
            onClick={() => onReact(type)}
            className={`p-2 hover:bg-gray-100 rounded-full ${
              userReaction === type ? "bg-blue-100 border-blue-300 border" : ""
            }`}
            title={type.charAt(0).toUpperCase() + type.slice(1)}
          >
            <span>{emoji}</span>
          </button>
        );
      })}
    </div>
  );
};

// Existing reactions list component
const ExistingReactions: React.FC<{
  reactions: ReactionCounts;
  onReact: (type: ReactionType) => void;
  userReaction?: ReactionType | null;
}> = ({ reactions, onReact, userReaction }) => {
  return (
    <>
      {reactionTypes.map((type) => {
        const count = reactions[type] ?? 0;
        if (count === 0) return null;

        return (
          <div key={type} className="group relative" title={type}>
            <ReactionIcon
              type={type}
              count={count}
              onClick={() => onReact(type)}
              isSelected={userReaction === type}
            />
          </div>
        );
      })}
    </>
  );
};

// Add reaction button component
const AddReactionButton: React.FC<{
  isOpen: boolean;
  toggleOpen: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  onReact: (type: ReactionType) => void;
  userReaction?: ReactionType | null;
}> = ({ isOpen, toggleOpen, menuRef, onReact, userReaction }) => {
  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleOpen}
        className="flex items-center justify-center w-8 h-6 rounded-full text-sm hover:bg-gray-100 border border-gray-200"
        title="Add reaction"
      >
        <span>+</span>
      </button>
      <ReactionMenu isOpen={isOpen} onReact={onReact} userReaction={userReaction} />
    </div>
  );
};

// Hook for handling outside clicks
const useOutsideClickHandler = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

// Main component
export const CommentReactions: React.FC<CommentReactionsProps> = ({
  commentId,
  reactions = {},
  isLoggedIn,
  userReaction,
}) => {
  const [isReactionMenuOpen, setIsReactionMenuOpen] = useState(false);
  const [currentReactions, setCurrentReactions] = useState<ReactionCounts>(
    reactions || {}
  );
  const [currentUserReaction, setCurrentUserReaction] = useState<ReactionType | null>(
    userReaction || null
  );
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useOutsideClickHandler(menuRef, () => setIsReactionMenuOpen(false));

  const handleReact = async (type: ReactionType) => {
    if (!isLoggedIn) {
      return;
    }

    try {
      const response = await axios.post(`/comments/${commentId}/react`, {
        type,
      });
      if (response.data?.reactions) {
        setCurrentReactions(response.data.reactions);
      }
      if (response.data?.userReaction) {
        setCurrentUserReaction(response.data.userReaction);
      }
      setIsReactionMenuOpen(false);
    } catch (error) {
      console.error("Failed to react:", error);
    }
  };

  const toggleReactionMenu = () => {
    setIsReactionMenuOpen(!isReactionMenuOpen);
  };

  return (
    <div className="mt-2">
      <div className="flex flex-wrap gap-1">
        <ExistingReactions 
          reactions={currentReactions} 
          onReact={handleReact}
          userReaction={currentUserReaction} 
        />

        {isLoggedIn && (
          <AddReactionButton
            isOpen={isReactionMenuOpen}
            toggleOpen={toggleReactionMenu}
            menuRef={menuRef}
            onReact={handleReact}
            userReaction={currentUserReaction}
          />
        )}
      </div>
    </div>
  );
};
