import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth.Context";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import s from "./AuthPage.module.css";

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("Error", error);
    message(error);
  }, [error, message]);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/register",
        "POST",
        { ...form }
      );
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/login",
        "POST",
        { ...form }
      );
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className={s.wrapp}>
      <div className={s.content}>
        <div className={s.textinput}>
          <div className={s.email}>Email</div>
          <input
            placeholder="Enter your email"
            className={s.inputs}
            id="email"
            type="text"
            name="email"
            onChange={changeHandler}
          ></input>
        </div>
        <div className={s.textinput}>
          <div className={s.pass}>Password</div>
          <input
            placeholder="Enter your password"
            className={s.inputs}
            id="password"
            type="password"
            name="password"
            onChange={changeHandler}
          ></input>
          <div className={s.but}>
            <span className={s.leftBut}>
              <button
                className={s.buttons}
                disabled={loading}
                onClick={loginHandler}
              >
                Sign in
              </button>
            </span>
            <span className={s.rightBut}>
              <button
                className={s.buttons}
                onClick={registerHandler}
                disabled={loading}
              >
                Registration
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
