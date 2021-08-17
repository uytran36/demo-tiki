import { Form, Input, Button } from "antd";
import "./Login.css";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";

const LogIn = ({ setAuth, setVerify, verify }) => {
  const history = useHistory();

  const onFinish = (values) => {
    const data = JSON.stringify(values);
    
    axios
      .post("http://localhost:5000/api/NVQT/LogIn", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if(res.data.length !== 0) {
          window.localStorage.setItem("NV", JSON.stringify(res.data[0]));
          setAuth(res.data[0]);
          setVerify(!verify);
          history.push("/QT");
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
          name="Email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="MatKhau"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu",
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

export default LogIn;
