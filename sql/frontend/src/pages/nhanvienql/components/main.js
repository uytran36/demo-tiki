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

import QlNhanVien from "./quanlynhanvien";
import QlDonHang from "./quanlydonhang";
import SpTrongKho from "./sanphamtrongkho";
import ChuyenKho from "./chuyenkho";

const { Header, Sider, Content, Footer } = Layout;

const NVQL = () => {

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
                    <Link to="/ql">Danh sách nhân viên</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<BarChartOutlined />}>
                    <Link to="/ql/dshd">Danh sách đơn hàng</Link>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<BarChartOutlined />}>
                    <Link to="/ql/dssp">Danh sách sản phẩm</Link>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<UserOutlined />}>
                    <Link to="/ql/ck">Yêu cầu chuyển kho</Link>
                  </Menu.Item>
                  <Menu.Item key="5" icon={<UserOutlined />}>
                    <Link to="/ql/taotk">Tạo tài khoản nhân viên</Link>
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
                  <Route exact path="/ql">
                    <QlNhanVien/>
                  </Route>
                  <Route exact path="/ql/dshd">
                    <QlDonHang/>
                  </Route>
                  <Route exact path="/ql/dssp">
                    <SpTrongKho/>
                  </Route>
                  <Route exact path="/ql/ck">
                    <ChuyenKho />
                  </Route>
                  <Route exact path="/ql/taotk">
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


export default NVQL;