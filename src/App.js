import React from "react";
import Home from "./Pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import Questions from "./Pages/Questions/Questions";
import Security from "./Pages/Security/Security";
import Login from "./Pages/Login/Login";
import Registr from "./Pages/Registr/Registr";
import UserPanel from "./Pages/UserPanel/UserPanel";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import RentCar from "./Pages/RentCar/RentCar";

function App() {
  return (
      <>
          <Routes>
              <Route path={"/"} element={<Home/>}  />
              <Route path={"/Home"} element={<Home/>}  />
              <Route path={"/Questions"} element={<Questions/>}  />
              <Route path={"/Security"} element={<Security/>} />
              <Route path={"/RentCar"} element={<RentCar/>} />
              <Route path={"/Login"} element={<Login/>} />
              <Route path={"/Registr"} element={<Registr/>} />
              <Route path={"/UserAccount"} element={<UserPanel/>} />
              <Route path={"/AdminPanel"} element={<AdminPanel/>} />
          </Routes>
      </>
  );
}

export default App;
