import React from "react";

const FeedList = (props) => {
  return (
    <section className="main-container">
      <div className="main-feeds">
        <div className="feed-profile">
          <div className="profile-left">
            <img src="images/덕순1.jpg" alt="" className="profile-picture" />
            <span className="profile-id">gel_fos</span>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <article className="main-article">
          <img src="images/덕순1.jpg" alt="" className="article-img" />
          <section className="feed-icon-bar">
            <div className="feed-icon-bar__left">
              <button className="feed-icon-bar__heart">
                <i className="far fa-heart"></i>
              </button>
              <button className="feed-icon-bar__comment">
                <i className="far fa-comment"></i>
              </button>
              <button className="feed-icon-bar__upload">
                <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
            <button className="feed-icon-bar__bookmark">
              <i className="far fa-bookmark"></i>
            </button>
          </section>
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
      </div>

      <div className="main-right">
        <div className="right-profile">
          <img src="images/덕순1.jpg" alt="" className="right-profile__image" />
          <div className="right-profile-description">
            <span className="right-profile__id">gel_fos</span>
            <span className="right-profile__name">덕순 (5세/닥스훈트)</span>
          </div>
        </div>
        <div className="right-story">
          <div className="story-header">
            <span className="story-header__text1">스토리</span>
            <span className="story-header__text2">모두 보기</span>
          </div>
          <section className="story-rows">
            <div className="story-row">
              <div className="story-left">
                <img
                  src="images/덕순1.jpg"
                  alt=""
                  className="story-row__image"
                />
                <div className="right-profile-description">
                  <span className="story-row__id">gel_fos</span>
                  <span className="story-row__follow">덕순 (5세/닥스훈트)</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="right-story">
          <div className="story-header">
            <span className="story-header__text1">회원님을 위한 추천</span>
            <span className="story-header__text2">모두 보기</span>
          </div>
          <section className="story-rows">
            <div className="story-row">
              <div className="story-left">
                <img
                  src="images/덕순1.jpg"
                  alt=""
                  className="story-row__image"
                />
                <div className="right-profile-description">
                  <span className="story-row__id">gel_fos</span>
                  <span className="story-row__follow">덕순 (5세/닥스훈트)</span>
                </div>
              </div>
              <button className="story-left__follow-text">팔로우</button>
            </div>
            <div className="story-row">
              <div className="story-left">
                <img
                  src="images/덕순1.jpg"
                  alt=""
                  className="story-row__image"
                />
                <div className="right-profile-description">
                  <span className="story-row__id">gel_fos</span>
                  <span className="story-row__follow">덕순 (5세/닥스훈트)</span>
                </div>
              </div>
              <button className="story-left__follow-text">팔로우</button>
            </div>
            <div className="story-row">
              <div className="story-left">
                <img
                  src="images/덕순1.jpg"
                  alt=""
                  className="story-row__image"
                />
                <div className="right-profile-description">
                  <span className="story-row__id">gel_fos</span>
                  <span className="story-row__follow">덕순 (5세/닥스훈트)</span>
                </div>
              </div>
              <button className="story-left__follow-text">팔로우</button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FeedList;
