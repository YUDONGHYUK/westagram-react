import React, { useRef, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [id, setId] = useState("")
  const [pwd, setPwd] = useState("")
  return (
    <div className="container">
      <header className="login-title">Westagram</header>
      <form action="./main.html" className="login-form">
        <input
          className="login-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          className="login-password"
          type="password"
          placeholder="비밀번호"
        />
        <Link to="/main">
          <button className="login-button" disabled>
            로그인
          </button>
        </Link>
      </form>
      <a className="find" href="#">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default Login;
