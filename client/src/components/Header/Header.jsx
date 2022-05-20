import React, { useContext } from "react";
import s from "./Header.module.css";
import image from "../../images/gamepad.png";
import { AuthContext } from "../../context/Auth.Context";
import { Navigate, useNavigate } from "react-router";
import Button from "@mui/material/Button";

const Header = () => {
  const Navigate = useNavigate();
  const auth = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    Navigate("/");
  };

  return (
    <div>
      <div className={s.wrapp}>
        <div>
          <img src={image} alt="Some problem" className={s.image} />{" "}
          <span className={s.text}>GAMES LOOKER</span>
        </div>
        <span>
          {" "}
          <Button onClick={logoutHandler} variant="contained">
            Logout
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Header;
