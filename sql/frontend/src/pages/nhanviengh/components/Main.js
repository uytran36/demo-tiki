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
import DanhSachDH from "./danhsachDH";



const { Header, Sider, Content, Footer } = Layout;

const NVGH = ( setAuth, setVerify, verify ) => {

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
                    <Link to="/GH">Danh sách đơn hàng</Link>
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
                    <DanhSachDH/>
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


export default NVGH;