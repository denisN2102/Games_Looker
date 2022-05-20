import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/Auth.Context";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <BrowserRouter>
        {" "}
        <div> {routes} </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

// import React, { useState } from "react";
// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
// import Games from "./components/Games/Games";
// import MainPage from "./components/MainPage/MainPage";
// import { store } from "./store";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import GamesPage from "./components/GamesPage/GamesPage";
// import { MainContext } from "./context/context";

// const App = () => {
//   const [game, setGame] = useState({});
//   return (
//     <MainContext.Provider value={{ game, setGame }}>
//       <BrowserRouter>
//         <div>
//           <div className="header">
//             <div className="container">
//               <div className="content">
//                 <Header />
//               </div>
//             </div>
//           </div>
//           <div className="wrapp">
//             {" "}
//             <div className="main">
//               <Main />
//               <Routes>
//                 <Route path="/Games" element={<Games />}></Route>
//                 <Route path="/MainPage" element={<MainPage />}></Route>
//                 <Route path="/Games/:title" element={<GamesPage />}></Route>
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </BrowserRouter>
//     </MainContext.Provider>
//   );
// };

// export default App;
