import React, { ReactNode } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Tag } from "@/components/tag";
import { Button } from "@/components/button";

import {
  showDeleteArticleButton,
  showEditArticleButton,
  showFollowButton,
} from "./functions";
// import { FollowButton } from "../followButton";
// import { DeleteArticleButton } from "../deleteArticleButton";
// import { FavoriteButton } from "../favoriteButton";
import { Article, User } from "@/types";

const FollowButton = (props) => {
  return <button type="button">Follow</button>;
};
const DeleteArticleButton = (props) => {
  return <button type="button">Delete Article</button>;
};

interface FavoriteButtonProps {
  isFavorited: boolean;
  showMessage: boolean;
  path: string;
  favoritesCount?: number;
}

const FavoriteButton = (props: FavoriteButtonProps) => {
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
      className="inline"
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

interface ArticleAreaProps {
  slug: string;
  article: Article;
  currentUser: User;
  children: ReactNode;
}

interface ActionsProps {
  article: Article;
  currentUser: User;
}

const Actions = ({ article, currentUser }: ActionsProps) => {
  const profile = article.author;

  return (
    <div className="article-meta">
      {profile && (
        <Link href={`/profile/${profile.username}`}>
          {profile.image && <img src={profile.image} alt="" />}
        </Link>
      )}
      <div className="info">
        <Link href={`/profile/${profile.username}`} className="author">
          {profile.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>
      {showFollowButton(profile.username, currentUser) && (
        <FollowButton
          username={profile.username}
          following={false}
          className={"action-btn"}
        />
      )}
      <FavoriteButton
        slug={article.slug}
        isFavorited={article.isFavorited || false}
        favoritesCount={article.favoritesCount}
        showMessage={true}
        path={
          article.isFavorited
            ? `/articles/${article.slug}/unfavorite`
            : `/articles/${article.slug}/favorite`
        }
        className={"action-btn"}
      />
      {showEditArticleButton(profile.username, currentUser) && (
        <Button
          component="a"
          href={`/editor/${article.slug}`}
          color="secondary"
          className={"action-btn"}
        >
          <i className="ion-edit"></i> Edit Article
        </Button>
      )}
      {showDeleteArticleButton(profile.username, currentUser) && (
        <DeleteArticleButton slug={article.slug} className={"action-btn"} />
      )}
    </div>
  );
};

export const ArticleArea = ({
  slug,
  article,
  children,
  currentUser,
}: ArticleAreaProps) => {
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <Actions article={article} currentUser={currentUser} />
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
          <Actions article={article} currentUser={currentUser} />
        </div>
        {children}
      </div>
    </div>
  );
};
