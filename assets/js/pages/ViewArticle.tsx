import React from "react";
import { ArticleArea } from "@/components/articleArea";
import { Article, User } from "@/types";
import { FieldError } from "@/components/fieldError";
import { Link, useForm } from "@inertiajs/react";

interface Props {
  slug: string;
  article: Article;
  comments: Comment[];
  user: User;
}

const ViewArticlePage = (props: Props) => {
  return (
    <ArticleArea
      slug={props.slug}
      article={props.article}
      currentUser={props.user}
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

const LoginToComment = () => (
  <p>
    <Link href={"/login"}>Sign in</Link>
    or <Link href={"/register"}>sign up</Link>
    to add comments on this article.
  </p>
);

const CommentForm = ({ user, article }) => {
  const formData = useForm({
    body: "",
  });
  const handleInput: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    formData.setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    formData.post(`/articles/${article.slug}/comments`);
  };

  return (
    <form onSubmit={handleSubmit} className="card comment-form">
      <div className="card-block">
        <textarea
          onChange={handleInput}
          name="body"
          className="form-control"
          placeholder="Write a comment..."
          rows={3}
        />
        <FieldError error={null} />
      </div>
      <div className="card-footer">
        <img src={user.image} className="comment-author-img" />
        <button className="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
  );
};

const CommentCard = ({ user, comment }) => (
  <div className="card" id={comment.id}>
    <div className="card-block">
      <p className="card-text">{comment.body}</p>
    </div>
    <div className="card-footer">
      <Link
        href={`/profile/${comment.user.username}`}
        className="comment-author"
      >
        <img src={comment.user.image} className="comment-author-img" />
      </Link>
      &nbsp;
      <Link
        href={`/profile/${comment.user.username}`}
        className="comment-author"
      >
        {comment.user.username}
      </Link>
      <span className="date-posted">
        {new Date(comment.created_at).toDateString()}
      </span>
      {user && user.id == comment.user.id && (
        <span className="mod-options">
          <i className="ion-trash-a" role="button"></i>
        </span>
      )}
    </div>
  </div>
);

const Comments = (props) => {
  const { article, user, comments } = props;
  return (
    <div>
      {!user ? (
        <LoginToComment />
      ) : (
        <CommentForm user={user} article={article} />
      )}
      {comments.map((comment) => (
        <CommentCard user={user} comment={comment} />
      ))}
    </div>
  );
};

export default ViewArticlePage;
