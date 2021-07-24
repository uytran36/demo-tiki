import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/product/Products";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Cart from "./components/cart/Cart";

const { Header, Content } = Layout;

const KhachHang = () => {
  return (
    <div>
      <Router>
        <Header className="header-navbar">
          <>
            <Navbar />
          </>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Switch>
            <Route exact path="/">
              <div className="site-layout-content">
                <Products />
              </div>
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Content>
      </Router>
    </div>
  );
};

export default KhachHang;
