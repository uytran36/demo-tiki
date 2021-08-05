import "./style.css";
import React, { useState } from "react";
import { Layout, Card, Input, Col, Row, Button, Typography, Form } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};
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

const ChiTietSP = () => {
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
              <Title level={2}>Chi tiết Sản Phẩm</Title>
            </div>
            <Card bordered={false}>
              <div>
                <Form
                  {...formItemLayout}
                  form={form}
                  onFinish={onFinish}
                  scrollToFirstError
                  wrapperCol={{ span: 10 }}
                >
                  <Form.Item
                    name="masp"
                    label="Mã Sản Phẩm"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="2656351" />
                  </Form.Item>

                  <Form.Item
                    name="tensp"
                    label="Tên Sản Phẩm"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="ABC" />
                  </Form.Item>

                  <Form.Item
                    name="slton"
                    label="Số lượng tồn "
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="6351" />
                  </Form.Item>

                  <Form.Item
                    name="LoaiSP"
                    label="Loại sản phẩm"
                    rules={[
                      {
                        required: true,
                        message: "Please select type!",
                      },
                    ]}
                  >
                    <Input defaultValue="Điện tử" />
                  </Form.Item>

                  <Form.Item
                    name="giagiam"
                    label="Giá giảm"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="0571665464" />
                  </Form.Item>

                  <Form.Item
                    name="giaban"
                    label="Giá bán"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="0571665464" />
                  </Form.Item>

                  <Form.Item
                    name="tongtien"
                    label="Tổng tiền"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="0571665464" />
                  </Form.Item>
                  <Form.Item
                    name="thanhtien"
                    label="Thành tiền"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue="0571665464" />
                  </Form.Item>
                  <Form.Item
                    name="hoahog"
                    label="Hoa hồng"
                    rules={[{ required: true }]}
                  >
                    <Input defaultValue=" 0571665464" />
                  </Form.Item>
                  <Form.Item
                    name="mota"
                    label="Mô tả"
                    rules={[{ required: true }]}
                  >
                    <TextArea rows={4} defaultValue=" 232" />
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </div>
          <div>
            <Button type="primary" className="btnSaveCTSP">
              Lưu
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default ChiTietSP;
