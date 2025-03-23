import React, { useState } from "react";
import { Article } from "@/types";
import { FavoriteButton } from "./FavoriteButton";
import { Tag } from "./Tag";
import { Link } from "@inertiajs/react";
import { useChannel } from "@/lib/useChannel";

interface Props {
  article: Article;
}

export const ArticleCard = (props: Props) => {
  const article = props.article;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link href={`/profile/${article.author.username}`}>
          <img src={article.author?.image} />
        </Link>
        <div className="info">
          <Link href={`/profile/${article.author.username}`} className="author">
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>
        <FavoriteButton
          articleId={article.id}
          isFavorited={article.isFavorited}
          favoritesCount={article.favoritesCount}
          showMessage={false}
        />
      </div>
      <Link href={`/articles/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tags.map((tag) => (
            <Tag component="li" variant="filled" key={tag}>
              {tag}
            </Tag>
          ))}
        </ul>
      </Link>
    </div>
  );
};
