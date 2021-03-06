import React, { useRef, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [validation, setValidation] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const idRef = useRef();
  const pwdRef = useRef();
  const navigate = useNavigate();

  const hanldeInput = () => {
    const idValue = idRef.current.value;
    const pwdValue = pwdRef.current.value;

    idValue.includes("@") && pwdValue.length >= 5
      ? setValidation(true)
      : setValidation(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validation ? setSubmitted(true) : setSubmitted(false);
  };

  return validation && submitted ? (
    navigate("/main")
  ) : (
    <div className="login">
      <header className="login-title">Westagram</header>
      <form onSubmit={onSubmit} action="./main.html" className="login-form">
        <input
          ref={idRef}
          onChange={hanldeInput}
          className="login-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          ref={pwdRef}
          onChange={hanldeInput}
          className="login-password"
          type="password"
          placeholder="비밀번호"
        />

        <button className={`login-button ${validation ? "" : "disable"}`}>
          로그인
        </button>
      </form>
      <a className="login-find" href="#">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default Login;
