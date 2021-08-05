/* eslint-disable jsx-a11y/anchor-is-valid */
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AuthUser = ({ user, setAuth }) => {
  const history = useHistory();

  const onClickLogout = () => {
    window.localStorage.removeItem("auth");
    setAuth(null);
    history.push("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/profile">
          Tài khoản của tôi
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
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
          Tài khoản <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default AuthUser;
