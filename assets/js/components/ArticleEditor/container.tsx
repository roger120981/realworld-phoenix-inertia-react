"use client";

import React from "react";
import { ArticleEditor as ArticleEditorPresentation } from "./presentation";

export const CreateArticleEditor = () => {
  return <ArticleEditorPresentation path="/articles" />;
};

export const UpdateArticleEditor = ({ article }) => {
  return (
    <ArticleEditorPresentation
      path={`/articles/${article.slug}`}
      defaultValues={article}
    />
  );
};
