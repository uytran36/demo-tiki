import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {React, useEffect, useState} from "react";
import { render } from "react-dom";
import DangNhapQL from "./components/dangnhapql";
import ChuyenKho from "./components/chuyenkho";
import SpTrongKho from "./components/sanphamtrongkho";
import QlDonHang from "./components/quanlydonhang";
import { Redirect } from "react-router";

const NVQL = () => {
    const [auth, setAuth] = useState(window.localStorage.getItem("NV"));
    const [verify,setVerify] = useState(false)
  
    useEffect(() => {
      setAuth(window.localStorage.getItem("NV"));
    }, [verify]);
  
  
    return (
      <Router>
        <Switch>
          <Route exact path="/QL/Login">
            <DangNhapQL auth={auth} setAuth={setAuth}  setVerify={setVerify} verify={verify} />
          </Route>
  
          <Route exact path="/QL">
            {auth === null ? (
              <Redirect to="/QL/login" />
            ) : (
              <NVQL/>
            )}
          </Route>
        </Switch>
      </Router>
    );
  };
  
  export default NVQL;