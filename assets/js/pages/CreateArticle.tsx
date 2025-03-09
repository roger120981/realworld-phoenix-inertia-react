import React from "react";
import { CreateArticleEditor } from "@/components/article-editor";

const CreateArticle = () => (
  <div className="editor-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-xs-12">
          <CreateArticleEditor />
        </div>
      </div>
    </div>
  </div>
);

export default CreateArticle;
