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
import Thank from "./components/thankyou/";
import { useState, useEffect } from "react";

const { Header, Content } = Layout;

const KhachHang = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    let temp = window.localStorage.getItem("cart");
    if (temp === null) {
      window.localStorage.setItem("cart", JSON.stringify([]));
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
            <Route exact path="/search/:value">
              <Products />
            </Route>
            <Route exact path="/">
              <Products />
            </Route>
            <Route exact path="/phone">
              <Products />
            </Route>
            <Route exact path="/tv">
              <Products />
            </Route>
            <Route exact path="/accessories">
              <Products />
            </Route>
            <Route exact path="/laptop">
              <Products />
            </Route>
            <Route exact path="/camera">
              <Products />
            </Route>
            <Route exact path="/appliance">
              <Products />
            </Route>
            <Route exact path="/house">
              <Products />
            </Route>
            <Route exact path="/food">
              <Products />
            </Route>
            <Route exact path="/toys">
              <Products />
            </Route>
            <Route exact path="/beauty">
              <Products />
            </Route>
            <Route exact path="/fashion">
              <Products />
            </Route>
            <Route exact path="/sport">
              <Products />
            </Route>
            <Route exact path="/bike">
              <Products />
            </Route>
            <Route exact path="/book">
              <Products />
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
            <Route exact path="/profile/bill">
              <Profile />
            </Route>
            <Route exact path="/profile/discount">
              <Profile />
            </Route>
            <Route exact path="/thankyou">
              <Thank />
            </Route>
          </Switch>
        </Content>
      </Router>
    </div>
  );
};

export default KhachHang;
