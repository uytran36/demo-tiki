import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import LogoTiki from "../logoTiki.png";
import "./Navbar.css";

import LogIn from "./LogIn";
import Promo from ".//Promo";
import LuongNVGH from "./LuongNVGH";
import LuongNVQLK from "./LuongNVQLK";

const { Header, Content } = Layout;

export default function Navbar() {
  return (
    <div>
      <Router>
        <Layout className="layout">
          <Header className="header-navbar">
            <Menu className="header-navbar" mode="horizontal">
              <Menu.Item key="1">
                <div className="logo">
                  <img src={LogoTiki} alt="logo tiki" width="33%" />
                </div>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/logIn">Đăng nhập</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dsnhaban">Danh thu sản phẩm</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/LuongNVGH">Lương nhân viên giao hàng</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/LuongNVQLK">Lương nhân viên quản lý kho</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/dsnhaban">Danh sách nhân viên quản lý kho</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/Promotion">Tạo mã khuyến mãi</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">Content</div>
          </Content>
        </Layout>

        <Switch>
          <Route exact path="/logIn">
            <LogIn />
          </Route>
          <Route exact path="/Promotion">
            <Promo />
          </Route>
          <Route exact path="/LuongNVGH">
            <LuongNVGH />
          </Route>
          <Route exact path="/LuongNVQLK">
            <LuongNVQLK />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
