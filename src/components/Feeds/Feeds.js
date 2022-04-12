import React from "react";
import Article from "../Article/Article";
import Profile from "../Profile/Profile";
import "./Feeds.scss";

const Feeds = (props) => {
  return (
    <div className="main-feeds">
      <Profile />
      <Article />
    </div>
  );
};

export default Feeds;
