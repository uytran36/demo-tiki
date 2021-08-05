import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogoTiki from "../khachhang/logoTiki.png";
import "./components/style.css";
import "antd/dist/antd.css";
import React from "react";

import DangKy from "./components/dangKy";
import DangNhap from "./components/dangNhap";

import MainP from "./components/Pmain.js";

const Nhaban = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/nhaban/dangnhap">
          <DangNhap />
        </Route>
        <Route exact path="/nhaban/dangky">
          <DangKy />
        </Route>
        <Route exact path="/nhaban/">
          <MainP />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nhaban;
