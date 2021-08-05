import "./style.css";
import React, { useState } from "react";
import { Layout, Card, Typography, Space } from "antd";
import { Form, Input, Select, Button } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;
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

const ThongTinHD = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Layout>
      <Content>
        <div className="contentTTNB">
          <div className="site-card-border-less-wrapper">
            <div>
              <Title level={2}>Thông Tin Nhà Bán</Title>
            </div>
            <Card bordered={false}>
              <div className="formTTNB">
                <Form
                  {...formItemLayout}
                  form={form}
                  onFinish={onFinish}
                  scrollToFirstError
                  wrapperCol={{ span: 10 }}
                >
                  <Form.Item
                    name="manb"
                    label="Mã Nhà Bán"
                    rules={[{ type: "manb" }, { required: true }]}
                  >
                    <Input defaultValue="26888888" />
                  </Form.Item>

                  <Form.Item
                    name="tennb"
                    label="Tên Nhà Bán"
                    rules={[{ type: "tennb" }, { required: true }]}
                  >
                    <Input defaultValue="Nguyễn Trọng Khang" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: "email",
                      },
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input type="email" defaultValue="abc@gmail.com" />
                  </Form.Item>

                  <Form.Item
                    name="sdt"
                    label="Số Điện Thoại"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input defaultValue="0485461213" />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="Mật khẩu "
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="input password"
                      defaultValue="fsdhfkshfsf"
                    />
                  </Form.Item>

                  <Form.Item
                    name="sonha"
                    label="Số nhà"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="149" />
                  </Form.Item>

                  <Form.Item
                    name="duong"
                    label="Đường"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="Nguyễn Trọng Tuyển" />
                  </Form.Item>

                  <Form.Item
                    name="phuong"
                    label="Phường"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="8" />
                  </Form.Item>

                  <Form.Item
                    name="quan"
                    label="Quận"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="Phú Nhuận" />
                  </Form.Item>

                  <Form.Item
                    name="thanhpho"
                    label="Thành Phố"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="Hồ Chí Minh" />
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </div>
          <div className="btnSaveTTNB">
            <Button type="primary" className="btnSaveTTHD">
              Lưu
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default ThongTinHD;
