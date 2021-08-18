import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import LogoTiki from "../khachhang/logoTiki.png";
import "./components/style.css";
import "antd/dist/antd.css";
import React from "react";
import { useEffect, useState } from "react";
import DangKy from "./components/dangKy";
import DangNhap from "./components/dangNhap";

import MainP from "./components/Pmain.js";

const Nhaban = (props) => {
  const [auth, setAuth] = useState(window.localStorage.getItem("auth"));

  useEffect(() => {
    setAuth(window.localStorage.getItem("auth"));
  }, [auth]);

  return (
    <Router>
      <Switch>
        <Route exact path="/nhaban/dangnhap">
          <DangNhap auth={auth} setAuth={setAuth}  />
        </Route>
        <Route exact path="/nhaban/dangky">
          <DangKy  />
        </Route>

        <Route exact path="/nhaban">
          {auth === null ? (
            <Redirect to="/nhaban/dangnhap" />
          ) : (
            <MainP/>
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default Nhaban;
