import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { render } from "react-dom";
import DangNhapGH from "./components/dangnhapgh";
import DanhSachDH from "./components/danhsachDH";
import { Redirect } from "react-router";
import { useState, useEffect } from "react";
import Main from "./components/Main";
const NVGH = () => {
    const [auth, setAuth] = useState(window.localStorage.getItem("NVGH"));
    const [verify, setVerify] = useState(false)
  
    useEffect(() => {
      setAuth(window.localStorage.getItem("NVGH"));
    }, [verify]);
  
  
    return (
      <Router>
        <Switch>
          <Route exact path="/gh/login">
            <DangNhapGH auth={auth} setAuth={setAuth}  setVerify={setVerify} verify={verify} />
          </Route>
  
          <Route exact path="/gh">
            {auth === null ? (
              <Redirect to="/gh/login"/>
            ) : (
              <Main/>
            )}
          </Route>
        </Switch>
      </Router>
    );
  };
  
  export default NVGH;
