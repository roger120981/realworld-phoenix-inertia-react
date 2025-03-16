import { Article } from "@/types";
import React from "react";
import { ArticleCard } from "@/components/article-card";

interface Props {
  articles: Article[];
}

export const GlobalArticleList = (props: Props) => {
  return (props.articles?.length || 0) < 1 ? (
    <p>No articles found.</p>
  ) : (
    <>
      {props.articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </>
  );
};
