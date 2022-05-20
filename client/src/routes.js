import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Games from "./components/Games/Games";
import MainPage from "./components/MainPage/MainPage";
import AuthPage from "./AuthPage/AuthPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GamesPage from "./components/GamesPage/GamesPage";
import { MainContext } from "./context/context";

export const useRoutes = (isAuthenticated) => {
  const [game, setGame] = useState({});
  if (isAuthenticated) {
    return (
      <MainContext.Provider value={{ game, setGame }}>
        <div>
          <div className="header">
            <div className="container">
              <div className="content">
                <Header />
              </div>
            </div>
          </div>
          <div className="wrapp">
            {" "}
            <div className="main">
              <Main />
              <Routes>
                <Route path="/Games" element={<Games />}></Route>
                <Route path="/MainPage" element={<MainPage />}></Route>
                <Route path="/Games/:title" element={<GamesPage />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </MainContext.Provider>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}></Route>
    </Routes>
  );
};
