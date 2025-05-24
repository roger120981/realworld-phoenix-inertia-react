import React from "react";
import { Link, useForm, router } from "@inertiajs/react";
import { FieldError } from "./FieldError";
import { Article, Comment, User } from "@/types";
import { Trash2 } from "lucide-react";
import { useChannel } from "@/lib/useChannel";
import { CommentReactions } from "./CommentReactions";

const LoginToComment = () => (
  <p>
    <Link href={"/login"}>Sign in</Link> or{" "}
    <Link href={"/register"}>sign up</Link> to add comments on this article.
  </p>
);

interface CommentFormProps {
  user: User;
  article: Article;
}

const CommentForm = ({ user, article }: CommentFormProps) => {
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
    formData.post(`/articles/${article.slug}/comments`, {
      preserveScroll: true,
      only: ["comments"],
    });
    formData.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="card comment-form">
      <div className="card-block">
        <textarea
          onChange={handleInput}
          value={formData.data.body}
          name="body"
          className="form-control"
          placeholder="Write a comment..."
          rows={3}
        />
        <FieldError error={formData.errors.body} />
      </div>
      <div className="card-footer">
        <img src={user.image} className="comment-author-img" />
        <button className="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
  );
};

interface CommentCardProps {
  user: User;
  comment: Comment;
}
const CommentCard = ({ user, comment }: CommentCardProps) => {
  const deleteComment = (id: string) => {
    router.delete(`/comments/${id}`, {
      preserveScroll: true,
      only: ["comments"],
    });
  };

  return (
    <div className="card" id={comment.id}>
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
        <CommentReactions
          commentId={comment.id}
          reactions={comment.reactions}
          isLoggedIn={!!user}
          userReaction={comment.userReaction}
        />
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
          {new Date(comment.createdAt).toDateString()}
        </span>
        {user && user.id == comment.user.id && (
          <span className="mod-options">
            <button onClick={() => deleteComment(comment.id)}>
              <Trash2 role="button"></Trash2>
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

interface CommentsProps {
  article: Article;
  user: User;
  comments: Comment[];
}

const useComments = (articleId: string, initialComments: Comment[]) => {
  const topic = `comments:${articleId}`;
  const reducer = (comments: Comment[], message: any) => {
    switch (message.event) {
      case "comment:created":
        return [...comments, message.payload];
      case "comment:destroyed":
        return comments.filter((x) => x.id !== message.payload.id);
      default:
        return comments;
    }
  };
  const [comments, _] = useChannel(topic, reducer, initialComments);
  return comments;
};

export const Comments = (props: CommentsProps) => {
  const { article, user, comments: initialComments } = props;
  const comments = useComments(article.id, initialComments);

  return (
    <div>
      {!user ? (
        <LoginToComment />
      ) : (
        <CommentForm user={user} article={article} />
      )}
      {comments.map((comment) => (
        <CommentCard key={comment.id} user={user} comment={comment} />
      ))}
    </div>
  );
};
