import { Layout, Typography, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.css";
import DangKy from "./dangKy";
const { Title } = Typography;
const { Content } = Layout;

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

const DangNhap = () => {
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
              name="Tên đăng nhập"
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
              name="Mật khẩu"
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
            <Form.Item className="rememBtnDN">
              <Form.Item name="remember" valuePropName="checked" noStyle >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="" style={{margin: 10 }}>
                Quên mật khẩu
              </a>
            </Form.Item>

            <Form.Item className="btnDN">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{margin:2}}
              >
                Đăng nhập
              </Button>
              Hoặc  <a href="/dangKy">Đăng ký ngay!</a>
            </Form.Item>
          </Form>
        </div>
    </Layout>
  );
};

export default DangNhap;
