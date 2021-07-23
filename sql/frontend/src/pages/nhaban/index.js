import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import LogoTiki from "../khachhang/logoTiki.png";
import "./components/style.css";

import { Layout, Menu, Dropdown, Button, Icon, message } from "antd";
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
import TrangChu from "./components/trangChu";
import DsSanPham from "./components/dsSanPham";
import DsHoaDon from "./components/dsHoaDon";
import DoanhThu from "./components/doanhThu";
import ThongTinNB from "./components/thongTinNB";
import ThongTinHD from "./components/thongTinHD";
import TaoSP from "./components/taoSP";
import DNhap from "./components/dangNhap";
import DangKy from "./components/dangKy";

const { Header, Sider, Content, Footer } = Layout;


class NhaBan extends React.Component {
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
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="login">
              <Button type="primary">Đăng xuất</Button>
            </div>
            <div className="logo">
              <img src={LogoTiki} alt="logo tiki" width="45%" />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/trangChu">Trang chủ</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<GiftOutlined />}>
                <Link to="/dsSanPham">Danh sách sản phẩm</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<ContainerOutlined />}>
                <Link to="/dsHoaDon">Danh sách hóa đơn</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                <Link to="/doanhThu">Doanh Thu</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<UserOutlined />}>
                <Link to="/thongTinNB">Thông tin nhà bán</Link>
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
              <Route exact path="/trangChu">
                  <TrangChu />
                </Route>
                <Route exact path="/dsSanPham">
                  <DsSanPham />
                </Route>
                <Route exact path="/dsHoaDon">
                  <DsHoaDon />
                </Route>
                <Route exact path="/doanhThu">
                  <DoanhThu />
                </Route>
                <Route exact path="/thongTinNB">
                  <ThongTinNB />
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
  }
}
export default NhaBan;
