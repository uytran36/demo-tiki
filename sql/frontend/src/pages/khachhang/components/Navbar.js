import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import LogoTiki from "../logoTiki.png";
import "./Navbar.css";

import DsKhachHang from "../../nhaban/components/dsKhachHang";
import DsNhaBan from "../../nhaban/components/dsNhaBan";

const { Header, Content, Footer } = Layout;

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
                <Link to="/dskhachhang">Danh sách khách hàng</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dsnhaban">Danh sách khách hàng</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">Content</div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>

        <Switch>
          <Route exact path="/dskhachhang">
            <DsKhachHang />
          </Route>
          <Route exact path="/dsnhaban">
            <DsNhaBan />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
