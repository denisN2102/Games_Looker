import React from "react";
import { Link } from "react-router-dom";

import s from "./Main.module.css";

const Main = () => {
  return (
    <div className={s.wrapp}>
      <div>
        <div className={s.links}>
          <div className={s.linked}>
            {" "}
            <Link to="/MainPage">MAIN</Link>
          </div>
          <div className={s.linked}>
            {" "}
            <Link to="/Games">GAMES</Link>
          </div>
          <div className={s.linked}>
            {" "}
            <Link to="/Games">GAMES</Link>
          </div>
          <div className={s.linked}>
            {" "}
            <Link to="/Games">GAMES</Link>
          </div>
          <div className={s.linked}>
            {" "}
            <Link to="/Games">GAMES</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
