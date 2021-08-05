import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogoTiki from "../../khachhang/logoTiki.png";
import "./style.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  GiftOutlined,
  ContainerOutlined,
  HomeOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

import TrangChu from "./trangChu";
import DsSanPham from "./dsSanPham";
import DsHoaDon from "./dsHoaDon";
import DoanhThu from "./doanhThu";
import ThongTinNB from "./thongTinNB";
import ThongTinHD from "./thongTinHD";
import ChiTietSP from "./chitietSP";

const { Header, Sider, Content, Footer } = Layout;
const Nhaban = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="login">
            <Button type="primary" >
              Đăng nhập
            </Button>
          </div>

          <div className="logo">
            <img src={LogoTiki} alt="logo tiki" width="45%" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/nhaban">Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<GiftOutlined />}>
              <Link to="/nhaban/dssp">Danh sách sản phẩm</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              <Link to="/nhaban/dshd">Danh sách hóa đơn</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              <Link to="/nhaban/doanhthu">Doanh Thu</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to="/nhaban/ttnb">Thông tin nhà bán</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
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
              <Route exact path="/nhaban/">
                <TrangChu />
              </Route>
              <Route exact path="/nhaban/dssp">
                <DsSanPham />
              </Route>
              <Route exact path="/nhaban/dshd">
                <DsHoaDon />
              </Route>
              <Route exact path="/nhaban/doanhthu">
                <DoanhThu />
              </Route>
              <Route exact path="/nhaban/ttnb">
                <ThongTinNB />
              </Route>
              <Route exact path="/nhaban/tthd">
                <ThongTinHD />
              </Route>
              <Route exact path="/nhaban/ctsp">
                <ChiTietSP />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Nhaban;
