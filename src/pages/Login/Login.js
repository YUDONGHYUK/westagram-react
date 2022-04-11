import React, { useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [validation, setValidation] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleIdInput = (e) => {
    setId(e.target.value);
    checkIdAndPwd();
  };

  const handlePwdInput = (e) => {
    setPwd(e.target.value);
    checkIdAndPwd();
  };

  const checkIdAndPwd = () => {
    id.includes("@") && pwd.length >= 5
      ? setValidation(true)
      : setValidation(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validation ? setSubmitted(true) : setSubmitted(false);
  };

  return validation && submitted ? (
    <Navigate to="/main" replace={true} />
  ) : (
    <div className="container">
      <header className="login-title">Westagram</header>
      <form onSubmit={onSubmit} action="./main.html" className="login-form">
        <input
          onKeyUp={handleIdInput}
          className="login-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onKeyUp={handlePwdInput}
          className="login-password"
          type="password"
          placeholder="비밀번호"
        />
        <button className={`login-button ${validation ? "" : "disable"}`}>
          로그인
        </button>
      </form>
      <a className="find" href="#">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default Login;
