import { Form, Input, Button } from "antd";
import "./Login.css";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";

const Login = ({ setAuth }) => {
  const history = useHistory();

  const onFinish = (values) => {
    const data = JSON.stringify(values);

    axios
      .post("http://localhost:5000/api/khachhang", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if(res.data.length !== 0) {
          window.localStorage.setItem("KH", JSON.stringify(res.data[0]));
          history.push("/");
          setAuth(res.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-login">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
