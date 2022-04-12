import React from "react";
import "./FeedIconBar.scss";

const FeedIconBar = (props) => {
  return (
    <section className="feedIcon">
      <div className="feedIcon-left">
        <button className="feedIcon-heart">
          <i className="far fa-heart"></i>
        </button>
        <button className="feedIcon-comment">
          <i className="far fa-comment"></i>
        </button>
        <button className="feedIcon-upload">
          <i className="fas fa-external-link-alt"></i>
        </button>
      </div>
      <button className="feedIcon-bookmark">
        <i className="far fa-bookmark"></i>
      </button>
    </section>
  );
};

export default FeedIconBar;
