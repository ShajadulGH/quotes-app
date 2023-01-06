import { useCallback, useEffect, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";

import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../hooks/use-http";
import { getAllComments } from "../../lib/api";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";
const Comments = () => {
  const authCtx = useContext(AuthContext);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { qouteID } = params;
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  useEffect(() => {
    sendRequest(qouteID);
  }, [sendRequest, qouteID]);
  const onAddComment = useCallback(() => {
    sendRequest(qouteID);
  }, [sendRequest, qouteID]);
  let comments;
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {authCtx.isLoggedIn && !isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}

      {isAddingComment && (
        <NewCommentForm onAddComment={onAddComment} quoteID={params.qouteID} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
