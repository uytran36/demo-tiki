import React, { useState, useEffect } from "react";
import DNhap from "./dangNhap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css";
import {
  Layout,
  Form,
  Input,
  Typography,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
const { Option } = Select;
const { Title, Text } = Typography;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const DangKy = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/nhaban/slnb")
      .then((response) => {
        if (response.data.length > 0) {
          setAmount(response.data[0].slNB);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onFinish = (values) => {
    let today = new Date();
    let newdate = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    let Nyyyy = today.getFullYear() + 1;
    today = mm + "/" + dd + "/" + yyyy;
    newdate = mm + "/" + dd + "/" + Nyyyy;

    const info = {
      MaNhaBan: amount,
      TenNhaBan: values.TenNhaBan,
      SDTNhaBan: values.SDTNhaBan,
      EmailNhaBan: values.EmailNhaBan,
      DiaChiNhaBan: values.DiaChiNhaBan,
      MatKhauNhaBan: values.MatKhauNhaBan,
      NgayLapHD: today,
      NgayHetHanHD: newdate,
      MoTaHD: "HD" + amount,
    };

    axios
      .post("http://localhost:5000/api/nhaban", JSON.stringify(info), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        history.push("/nhaban/dangnhap");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="titleDK">
        <Title>Đăng Ký Bán Hàng cùng Tiki</Title>
      </div>
      <div className="formDK">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="TenNhaBan"
            label="Tên cửa hàng"
            rules={[
              {
                required: true,
                message: "Please input your store name!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="EmailNhaBan"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="SDTNhaBan"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Row gutter={8}>
              <Col span={12}>
                <Input
                  style={{
                    width: "100%",
                  }}
                />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="DiaChiNhaBan"
            label="Địa chỉ"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="MatKhauNhaBan"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Xác thực mật khẩu"
            dependencies={["MatKhauNhaBan"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("MatKhauNhaBan") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Tôi đồng ý với <a href="">chính sách của Tiki</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="btnDK">
              Đăng ký
            </Button>
            <div style={{ margin: 2 }}>
              <a href="/nhaban/dangNhap">
                Bạn đã có tài khoản. Đăng nhập ngay!
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default DangKy;
