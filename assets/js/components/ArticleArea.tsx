import React, { ReactNode } from "react";
import { Link, router } from "@inertiajs/react";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Article, User } from "@/types";
import {
  FavoriteButton,
  FavoriteButtonDisplay,
} from "@/components/FavoriteButton";
import { DeleteArticleButton } from "@/components/DeleteArticleButton";
import { Edit, Plus } from "lucide-react";
import { FavoriteActions, FavoriteState, useFavorite } from "@/lib/useFavorite";

interface FollowButtonProps {
  slug: string;
  username: string;
  following: boolean;
}
const FollowButton = (props: FollowButtonProps) => {
  return props.following ? (
    <Button
      component="button"
      className="btn btn-sm btn-outline-primary action-btn"
      onClick={() =>
        router.post(
          `/articles/${props.slug}/unfollow`,
          {},
          { preserveScroll: true, only: ["following"] }
        )
      }
    >
      <Plus className="inline h-[1rem]" />
      Unfollow
    </Button>
  ) : (
    <Button
      component="button"
      className="btn btn-sm btn-outline-primary action-btn"
      onClick={() =>
        router.post(
          `/articles/${props.slug}/follow`,
          {},
          { preserveScroll: true, only: ["following"] }
        )
      }
    >
      <Plus className="inline h-[1rem]" />
      Follow
    </Button>
  );
};

interface ArticleAreaProps {
  article: Article;
  currentUser: User;
  following: boolean;
  children: ReactNode;
}

interface ActionsProps {
  article: Article;
  currentUser: User;
  favoriteData: FavoriteState;
  favoriteActions: FavoriteActions;
  following: boolean;
}

const Actions = ({
  article,
  favoriteData,
  favoriteActions,
  currentUser,
  following,
}: ActionsProps) => {
  const profile = article.author;
  if (!profile) {
    return null;
  }

  return (
    <div className="article-meta">
      <Link href={`/profile/${profile.username}`}>
        {profile.image && <img src={profile.image} alt="" />}
      </Link>
      <div className="info">
        <Link href={`/profile/${profile.username}`} className="author">
          {profile.username}
        </Link>
        <span className="date">
          {article.createdAt && new Date(article.createdAt).toDateString()}
        </span>
      </div>
      {showFollowButton(profile.username, currentUser) && (
        <FollowButton
          slug={article.slug}
          username={profile.username}
          following={following}
        />
      )}
      <FavoriteButtonDisplay
        articleId={article.id}
        isFavorited={favoriteData.isFavorited}
        favoritesCount={favoriteData.favoritesCount}
        favorite={favoriteActions.favorite}
        unfavorite={favoriteActions.unfavorite}
        showMessage={true}
      />
      {showEditArticleButton(profile.username, currentUser) && (
        <Button
          component="a"
          href={`/articles/${article.slug}/edit`}
          color="secondary"
          className={"action-btn"}
        >
          <Edit className="inline h-[1rem]" /> Edit Article
        </Button>
      )}
      {showDeleteArticleButton(profile.username, currentUser) && (
        <DeleteArticleButton path={`/articles/${article.slug}`} />
      )}
    </div>
  );
};

export const ArticleArea = ({
  article,
  children,
  currentUser,
  following,
}: ArticleAreaProps) => {
  const [favoriteData, favoriteActions] = useFavorite(
    article.id,
    article.favoritesCount ?? 0,
    article.isFavorited ?? false
  );
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <Actions
            article={article}
            favoriteData={favoriteData}
            favoriteActions={favoriteActions}
            currentUser={currentUser}
            following={following}
          />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
            <ul className="tag-list">
              {article.tags?.map((tag) => (
                <Tag component="li" variant="outline" key={tag}>
                  {tag}
                </Tag>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className="article-actions">
          <Actions
            article={article}
            favoriteData={favoriteData}
            favoriteActions={favoriteActions}
            currentUser={currentUser}
            following={following}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

const showFollowButton = (
  authorUsername: string,
  currentUser: User | undefined
) => {
  return authorUsername !== currentUser?.username;
};

const showEditArticleButton = (
  authorUsername: string,
  currentUser: User | undefined
) => {
  return authorUsername === currentUser?.username;
};

const showDeleteArticleButton = (
  authorUsername: string,
  currentUser: User | undefined
) => {
  return authorUsername === currentUser?.username;
};
