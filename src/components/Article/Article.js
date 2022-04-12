import React from "react";
import FeedContent from "../FeedContent/FeedContent";
import FeedIconBar from "../FeedIconBar/FeedIconBar";
import FeedLikeBar from "../FeedLikeBar/FeedLikeBar";
import "./Article.scss";

const Article = (props) => {
  return (
    <article className="main-article">
      <img src="images/덕순1.jpg" alt="" className="article-img" />
      <FeedIconBar />
      <FeedLikeBar />
      <FeedContent />
      <form className="article-comment__form">
        <input
          className="comment__input"
          type="text"
          placeholder="댓글 달기..."
        />
        <button className="comment__button">게시</button>
      </form>
    </article>
  );
};

export default Article;
