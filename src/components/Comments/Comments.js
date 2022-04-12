import React from "react";
import Comment from "../Comment/Comment";
import "./Comments.scss";

const Comments = (props) => {
  return (
    <ul className="comments">
      <Comment />
    </ul>
  );
};

export default Comments;
