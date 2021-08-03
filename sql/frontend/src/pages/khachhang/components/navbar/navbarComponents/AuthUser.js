/* eslint-disable jsx-a11y/anchor-is-valid */
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";
import { useHistory } from "react-router-dom";

const AuthUser = ({ user }) => {
  const history = useHistory();

  const onClickLogout = () => {
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Button type="primary" className="btn-register" onClick={onClickLogout}>
          Đăng xuất
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="user-dropdown">
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <UserOutlined />
          Xin chào {user} <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default AuthUser;
