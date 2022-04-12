import React from "react";

const Navbar = (props) => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__container">
        <div className="nav-bar__left">
          <button className="nav-bar__logo">
            <i className="fab fa-instagram"></i>
          </button>
          <div className="vertical-bar"></div>
          <span className="nav-bar__title">Westagram</span>
        </div>
        <div className="nav-bar__center">
          <input type="text" className="search-bar" placeholder="🔍 검색" />
        </div>
        <div className="nav-bar__right">
          <button className="nav-bar__compass">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt=""
            />
          </button>
          <button className="nav-bar__heart">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt=""
            />
          </button>
          <button className="nav-bar__user">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
