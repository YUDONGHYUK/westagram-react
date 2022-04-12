import React from "react";
import FeedIconBar from "../FeedIconBar/FeedIconBar";
import "./Article.scss";

const Article = (props) => {
  return (
    <article className="main-article">
      <img src="images/덕순1.jpg" alt="" className="article-img" />
      <FeedIconBar />
      <section className="like-bar">
        <img src="images/덕순2.jpg" alt="" className="like-bar__image" />
        <span className="like-bar__text">
          aineworld님 외 3,543명이 좋아합니다.
        </span>
      </section>
      <section className="article-content">
        <div className="article-post">
          <span className="post__id">gel_fos</span>
          <span className="post__text">댕댕이🐶</span>
        </div>
      </section>
      <section className="article-comments">
        <div className="article-comment__row">
          <span className="comment__id">neceosecius</span>
          <span className="comment__text">맞팔해요~ 덕순이 귀엽네요👺</span>
        </div>
      </section>
      <span className="article-update__time">11시간전</span>
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
