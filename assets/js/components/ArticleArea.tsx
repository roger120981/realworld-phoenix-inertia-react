import React, { ReactNode } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Article, User } from "@/types";
import { FavoriteButton } from "@/components/FavoriteButton";
import { DeleteArticleButton } from "@/components/DeleteArticleButton";
import { Edit, Edit2Icon, Plus } from "lucide-react";

const FollowButton = (props) => {
  return (
    <button className="btn btn-sm btn-outline-primary action-btn">
      <Plus className="inline h-[1rem]" />
      Follow
    </button>
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
        articleId={article.id}
        isFavorited={article.isFavorited || false}
        favoritesCount={article.favoritesCount}
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
