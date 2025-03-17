import React from "react";
import { UpdateArticleEditor } from "@/components/ArticleEditor";
import { Article } from "@/types";

interface Props {
  article: Article;
}

const CreateArticle = (props: Props) => (
  <div className="editor-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-xs-12">
          <UpdateArticleEditor article={props.article} />
        </div>
      </div>
    </div>
  </div>
);

export default CreateArticle;
