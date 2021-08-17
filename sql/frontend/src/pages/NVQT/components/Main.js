import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import React from "react";
import LogoTiki from "../../khachhang/logoTiki.png";
import { useState, useEffect } from "react";
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

import Promo from "./Promo";
import LuongNVGH from "./LuongNVGH";
import LuongNVQLK from "./LuongNVQLK";
import DSKH from "./DSKH";
import NVQLK from "./NVQLK";
import DSNB from "./DSNB";
import DSKho from "./DSKho";
import DT from "./doanhThu";

const { Header, Sider, Content, Footer } = Layout;

const NVQT = () => {

    return (
      <div>
        <Router>
          <Layout>
            <Sider style={{left: 0, }} >
                <div id="logo" style={{ margin: '10px', padding: '5px', textAlign: 'center' }}>
                  <img src={LogoTiki} alt="logo tiki" width="62%" />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1" icon={<GiftOutlined />}>
                    <Link to="/QT">Tạo mã giảm giá</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<BarChartOutlined />}>
                    <Link to="/QT/LuongNVGH">Lương nhân viên giao hàng</Link>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<BarChartOutlined />}>
                    <Link to="/QT/LuongNVQLK">Lương nhân viên quản lý kho</Link>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<UserOutlined />}>
                    <Link to="/QT/DSKH">Danh sách khách hàng</Link>
                  </Menu.Item>
                  <Menu.Item key="5" icon={<UserOutlined />}>
                    <Link to="/QT/NVQLK">Danh sách nhân viên quản lý kho</Link>
                  </Menu.Item>
                  <Menu.Item key="6" icon={<ContainerOutlined />}>
                    <Link to="/QT/DSNB">Danh sách nhà bán</Link>
                  </Menu.Item>
                  <Menu.Item key="7" icon={<ContainerOutlined />}>
                    <Link to="/QT/DSKho">Danh sách kho</Link>
                  </Menu.Item>
                  <Menu.Item key="8" icon={<BarChartOutlined />}>
                    <Link to="/QT/doanhThu">Danh thu</Link>
                  </Menu.Item>
                </Menu>
            </Sider>
            <Layout >
            <Header  style={{ padding: 0 }}>
            </Header>

            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 500,
              }}
            >
                <Switch>
                  <Route exact path="/QT">
                    <Promo />
                  </Route>
                  <Route exact path="/QT/LuongNVGH">
                    <LuongNVGH />
                  </Route>
                  <Route exact path="/QT/LuongNVQLK">
                    <LuongNVQLK />
                  </Route>
                  <Route exact path="/QT/DSKH">
                    <DSKH />
                  </Route>
                  <Route exact path="/QT/NVQLK">
                    <NVQLK />
                  </Route>
                  <Route exact path="/QT/DSNB">
                    <DSNB />
                  </Route>
                  <Route exact path="/QT/DSKho">
                    <DSKho />
                  </Route>
                  <Route exact path="/QT/doanhThu">
                    <DT />
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
  };


export default NVQT;