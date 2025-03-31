import React from "react";
import { ArticleArea } from "@/components/ArticleArea";
import { Article, Comment, User } from "@/types";
import { Comments } from "@/components/Comments";

interface Props {
  article: Article;
  following: boolean;
  comments: Comment[];
  user: User;
}

const ViewArticlePage = (props: Props) => {
  return (
    <ArticleArea
      article={props.article}
      currentUser={props.user}
      following={props.following}
    >
      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <Comments
            user={props.user}
            article={props.article}
            comments={props.comments}
          />
        </div>
      </div>
    </ArticleArea>
  );
};

export default ViewArticlePage;
