import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {React, useEffect, useState} from "react";
import DangNhapQL from "./components/dangnhapql";
import { Redirect } from "react-router";
import Main from "./components/main";
const NVQL = () => {
    const [auth, setAuth] = useState(window.localStorage.getItem("NVQL"));
    const [verify,setVerify] = useState(false)
  
    useEffect(() => {
      setAuth(window.localStorage.getItem("NVQL"));
    }, [verify]);
  
  
    return (
      <Router>
        <Switch>
          <Route exact path="/ql/login">
            <DangNhapQL auth={auth} setAuth={setAuth}  setVerify={setVerify} verify={verify} />
          </Route>
  
          <Route exact path="/ql">
            {auth === null ? (
              <Redirect to="/ql/login" />
            ) : (
              <Main/>
            )}
          </Route>
        </Switch>
      </Router>
    );
  };
  
  export default NVQL;
