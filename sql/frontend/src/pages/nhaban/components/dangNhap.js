import { Layout, Typography, Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.css";
import DangKy from "./dangKy";
import axios from "axios";

const { Title } = Typography;
const { Content } = Layout;

const DangNhap = () => {
  const history = useHistory();
  const [listNhaBan, setListNhaBan] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/nhaban")
      .then((response) => {
        setListNhaBan(response.data);
      })
      .catch((error) => {
        console.log("Received error: ", error);
      });
  }, []);

  const onFinish = (values) => {
    const info = {
      email: values.email,
      password: values.password,
    };

    const data = listNhaBan.filter((item) => {
      //   console.log(item);
      return (
        item.EmailNhaBan.trim() === values.email &&
        item.MatKhauNhaBan === values.password
      );
    });
    console.log(data[0]);
    if (data.length > 0) {
      history.push("/nhaban/");
      window.localStorage.setItem("auth", JSON.stringify(data[0]));
    }
  };

  return (
    <Layout>
      <div className="titleDN">
        <Title>Đăng Nhập Bán Hàng</Title>
      </div>
      <div className="boxDN">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên đăng nhập"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>

          <Form.Item className="btnDN">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ margin: 2 }}
            >
              Đăng nhập
            </Button>
            Hoặc <a href="/nhaban/dangKy">Đăng ký ngay!</a>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default DangNhap;
