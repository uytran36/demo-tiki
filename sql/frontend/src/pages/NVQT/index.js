import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import React from "react";
import LogoTiki from "../khachhang/logoTiki.png";
import "./components/style.css";

import { Layout, Menu, Dropdown, Button, Icon, message  } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  GiftOutlined,
  ContainerOutlined,
  HomeOutlined,
  BarChartOutlined,
  DownOutlined,
} from "@ant-design/icons";


import LogIn from "./components/LogIn";
import Promo from "./components/Promo";
import LuongNVGH from "./components/LuongNVGH";
import LuongNVQLK from "./components/LuongNVQLK";
import TaoNVQLK from "./components/TaoNVQLK";
import DSKH from "./components/DSKH";
import NVQLK from "./components/NVQLK";

const { Header, Sider, Content, Footer } = Layout;

class NVQT extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      
      <div>
        <Router>
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed} 
        style={{
        height: '100vh',
        left: 0,
      }} >
                <div className="logo" style={{ margin: '10px' }}>
                  <img src={LogoTiki} alt="logo tiki" width="45%" />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1" icon={<GiftOutlined />}>
                    <Link to="/Promotion">Tạo mã giảm giá</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<BarChartOutlined />}>
                    <Link to="/LuongNVGH">Lương nhân viên giao hàng</Link>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<BarChartOutlined />}>
                    <Link to="/LuongNVQLK">Lương nhân viên quản lý kho</Link>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<UserOutlined />}>
                    <Link to="/TaoNVQLK">Thêm nhân viên quản lý kho</Link>
                  </Menu.Item>
                  <Menu.Item key="5" icon={<UserOutlined />}>
                    <Link to="/DSKH">Danh sách khách hàng</Link>
                  </Menu.Item>
                  <Menu.Item key="6" icon={<UserOutlined />}>
                    <Link to="/NVQLK">Danh sách nhân viên quản lý kho</Link>
                  </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>

            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 500,
              }}
            >
                <Switch>
                  <Route exact path="/NVQT">
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
                  <Route exact path="/TaoNVQLK">
                    <TaoNVQLK />
                  </Route>
                  <Route exact path="/DSKH">
                    <DSKH />
                  </Route>
                  <Route exact path="/NVQLK">
                    <NVQLK />
                  </Route>
                </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
          </Layout>
        </Router>
      </div>
    );
  }
};


export default NVQT;