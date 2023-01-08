import { useEffect, useRef } from "react";
import useHttp from "../hooks/use-http";
import classes from "./NewCommentForm.module.css";
import { addComment } from "../../lib/api";
const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddComment } = props;
  useEffect(() => {
    if (status === "completed" && !error) onAddComment();
  }, [status, error, onAddComment]);
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (commentTextRef.current.value.trim().length > 0) {
      sendRequest({
        commentData: commentTextRef.current.value,
        quoteId: props.quoteID,
      });
    }
    commentTextRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
