import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import React from "react";
import { useEffect, useState } from "react";
import Main from "./components/Main.js";
import LogIn from "./components/LogIn.js";

const NVQT = () => {
  const [auth, setAuth] = useState(window.localStorage.getItem("NV"));
  const [verify,setVerify] = useState(false)

  useEffect(() => {
    setAuth(window.localStorage.getItem("NV"));
  }, [verify]);


  return (
    <Router>
      <Switch>
        <Route exact path="/QT/LogIn">
          <LogIn auth={auth} setAuth={setAuth}  setVerify={setVerify} verify={verify} />
        </Route>

        <Route exact path="/QT">
          {auth === null ? (
            <Redirect to="/QT/LogIn" />
          ) : (
            <Main/>
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default NVQT;
