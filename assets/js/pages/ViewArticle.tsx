import React from "react";
import { ArticleArea } from "@/components/articleArea";
// import { CommentForm } from "@/components/commentForm";
// import { CommentList } from "@/components/commentList";
import { Article, User } from "@/types";

interface Props {
  slug: string;
  article: Article;
  comments?: any;
  user: User;
}

const CommentForm = (props) => {
  return <div>Comment Form Here...</div>;
};

const CommentList = (props) => {
  return <div>Comment List Here...</div>;
};

const ViewArticlePage = (props) => {
  return (
    <ArticleArea
      slug={props.slug}
      article={props.article}
      currentUser={props.user}
    >
      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <CommentForm slug={props.slug} currentUser={props.user} />
          <CommentList slug={props.slug} comments={props.comments} />
        </div>
      </div>
    </ArticleArea>
  );
};

export default ViewArticlePage;
