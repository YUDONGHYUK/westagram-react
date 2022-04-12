import React from "react";
import MainFeeds from "../../components/MainFeeds/MainFees";
import Navbar from "../../components/Navbar/Navbar";
import "./Main.scss";
import "../../components/Navbar/Navbar.scss";

const Main = (props) => {
  return (
    <>
      <Navbar />
      <MainFeeds />
    </>
  );
};

export default Main;
