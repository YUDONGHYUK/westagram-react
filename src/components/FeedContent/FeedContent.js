import React from "react";
import Comments from "../Comments/Comments";
import "./FeedContent.scss";

const FeedContent = (props) => {
  return (
    <>
      <section className="content">
        <div className="content-post">
          <span className="post__id">gel_fos</span>
          <span className="post__text">댕댕이🐶</span>
        </div>
      </section>
      <Comments />
      <span className="article-update__time">11시간전</span>
    </>
  );
};

export default FeedContent;
