import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/product/Products";
import ProductDetail from "./components/product/productDetail";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Cart from "./components/cart/Cart";
import Profile from "./components/profile/Profile";
import { useState, useEffect } from "react";

const { Header, Content } = Layout;

const KhachHang = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    let temp = window.localStorage.getItem("cart");
    if (temp === null) {
      window.localStorage.setItem("cart", []);
    }

    setAuth(window.localStorage.getItem("KH"));
  }, [auth]);

  return (
    <div>
      <Router>
        <Header className="header-navbar">
          <>
            <Navbar auth={auth} setAuth={setAuth} />
          </>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Switch>
            <Route exact path="/">
              <div className="site-layout-content">
                <Products />
              </div>
            </Route>
            <Route exact path="/productdetail/:id">
              <ProductDetail />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login setAuth={setAuth} />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Content>
      </Router>
    </div>
  );
};

export default KhachHang;
