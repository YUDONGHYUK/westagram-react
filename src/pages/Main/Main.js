import React from "react";
import FeedList from "../../components/FeedList/FeedList";
import Navbar from "../../components/Navbar/Navbar";
import "./Main.scss";

const Main = (props) => {
  return (
    <>
      <Navbar />
      <FeedList />
    </>
  );
};

export default Main;
