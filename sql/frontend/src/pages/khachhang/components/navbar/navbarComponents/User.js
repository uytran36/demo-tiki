/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Button type="primary" className="btn-register">
        <Link to="/register">Đăng kí</Link>
      </Button>
    </Menu.Item>
    <Menu.Item key="2">
      <Button type="primary" className="btn-login">
        <Link to="/login">Đăng nhập</Link>
      </Button>
    </Menu.Item>
  </Menu>
);

const UserComponent = () => {
  return (
    <div className="user-dropdown">
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <UserOutlined />
          Tài khoản <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default UserComponent;
