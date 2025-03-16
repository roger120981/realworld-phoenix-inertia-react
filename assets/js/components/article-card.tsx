import React from "react";
import { Article } from "@/types";
import { FavoriteButton } from "./articleArea/FavoriteButton";

interface Props {
  article: Article;
}

export const ArticleCard = (props: Props) => {
  const article = props.article;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href={`/profile/${article.author.username}`}>
          <img src={article.author?.image} />
        </a>
        <div className="info">
          <a href={`/profile/${article.author.username}`} className="author">
            {article.author.username}
          </a>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>
        <FavoriteButton
          isFavorited={article.isFavorited}
          favoritesCount={article.favoritesCount}
          showMessage={false}
          path={
            article.isFavorited
              ? `/articles/${article.slug}/unfavorite`
              : `/articles/${article.slug}/favorite`
          }
        />
      </div>
      <a href={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tags.map((tag) => (
            <li className="tag-default tag-pill tag-outline">{tag}</li>
          ))}
        </ul>
      </a>
    </div>
  );
};
