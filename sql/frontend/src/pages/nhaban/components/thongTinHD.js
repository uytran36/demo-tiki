import "./style.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Layout,
  Card,
  Input,
  Col,
  Row,
  Select,
  Table,
  Button,
  Typography,
} from "antd";
import { Form, Space } from "antd";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
const columns = [
  {
    title: "Mã Chi tiết HĐ",
    dataIndex: "MaCTHD",
    key: "MaCTHD",
  },
  {
    title: "Tên Sản Phẩm",
    dataIndex: "TenSP",
    key: "TenSP",
    render: (text) => <Link to="/nhaban/ctsp">{text}</Link>,
  },
  {
    title: "Số lượng",
    dataIndex: "SoLug",
    key: "SoLug",
  },
  {
    title: "Giá Tiền",
    dataIndex: "GiaTien",
    key: "GiaTien",
  },
];

const data = [
  {
    MaCTHD: "1",
    TenSP: "John Brown",
    SoLug: 32,
    GiaTien: "100000",
  },
  {
    MaCTHD: "2",
    TenSP: "Jim Green",
    SoLug: 42,
    GiaTien: "100000",
  },
  {
    MaCTHD: "3",
    TenSP: "Joe Black",
    SoLug: 32,
    GiaTien: "100000",
  },
];
function handleChange(value) {
  console.log(`selected ${value}`);
}

const ThongTinHD = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Layout>
      <Content>
        <div className="site-input-group-wrapper">
          <div className="site-card-border-less-wrapper">
            <Row>
              <Col span={12}>
                <Card title="Thông Tin Hóa Đơn" bordered={false}>
                  <div>
                    <Form
                      name="complex-form"
                      onFinish={onFinish}
                      labelCol={{ span: 7 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Form.Item label="Mã Hóa Đơn">
                        <Space>
                          <Form.Item
                            name="mahd"
                            noStyle
                            rules={[{ required: true }]}
                          >
                            <Input defaultValue="26888888" readOnly />
                          </Form.Item>
                        </Space>
                      </Form.Item>
                    </Form>
                  </div>

                  <div>
                    <Form
                      name="complex-form"
                      onFinish={onFinish}
                      labelCol={{ span: 7 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Form.Item label="Ngày lập Hóa Đơn ">
                        <Space>
                          <Form.Item
                            name="ngaylaphd"
                            noStyle
                            rules={[{ required: true }]}
                          >
                            <Input defaultValue="26/08/2020" readOnly />
                          </Form.Item>
                        </Space>
                      </Form.Item>
                    </Form>
                  </div>
                  <div>
                    <Form
                      name="complex-form"
                      onFinish={onFinish}
                      labelCol={{ span: 7 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Form.Item label="Tổng tiền">
                        <Space>
                          <Form.Item
                            name="tongtien"
                            noStyle
                            rules={[{ required: true }]}
                          >
                            <Input defaultValue="26888888" readOnly />
                          </Form.Item>
                        </Space>
                      </Form.Item>
                    </Form>
                  </div>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Thông Tin Khách Hàng" bordered={false}>
                  <div>
                    <Form
                      name="complex-form"
                      onFinish={onFinish}
                      labelCol={{ span: 7 }}
                      wrapperCol={{ span: 10 }}
                    >
                      <Form.Item label="Họ Tên">
                        <Space>
                          <Form.Item
                            name="hoten"
                            noStyle
                            rules={[{ required: true }]}
                          >
                            <Input defaultValue="Nguyễn Trọng Khang" readOnly />
                          </Form.Item>
                        </Space>
                      </Form.Item>
                    </Form>
                  </div>

                  <div>
                    <Form
                      name="complex-form"
                      onFinish={onFinish}
                      labelCol={{ span: 7 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Form.Item label="Địa chỉ ">
                        <Space>
                          <Form.Item
                            name="diachi"
                            noStyle
                            rules={[{ required: true }]}
                          >
                            <Input
                              defaultValue="149 Nguyễn Trọng Tuyển, P.8, Quận Phú Nhuận, TP.HCM"
                              readOnly
                            />
                          </Form.Item>
                        </Space>
                      </Form.Item>
                    </Form>
                  </div>
                  <div>
                    <Form
                      name="complex-form"
                      onFinish={onFinish}
                      labelCol={{ span: 7 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Form.Item label="Số điện thoại">
                        <Space>
                          <Form.Item
                            name="sdt"
                            noStyle
                            rules={[{ required: true }]}
                          >
                            <Input defaultValue="0571665464" readOnly />
                          </Form.Item>
                        </Space>
                      </Form.Item>
                    </Form>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="site-card-border-less-wrapper">
            <Card title="Chi Tiết Hóa Đơn" bordered={false}>
              <Table columns={columns} dataSource={data} />
            </Card>
          </div>

          <div>
            <Row>
              <Col>
                <Row className="tinhTragTTHD">
                  <Col>
                    <Title level={4}>Tình trạng: </Title>
                  </Col>
                  <Col>
                    <div>
                      <Select
                        defaultValue="Chờ xác nhận"
                        onChange={handleChange}
                        className="textStatusTTHD"
                      >
                        <Option value="Đang xử lý">Đang xử lý</Option>
                        <Option value="Đang vận chuyển">Đang vận chuyển</Option>
                        <Option value="Đang giao">Đang giao</Option>
                        <Option value="Đang giao">Đã hủy</Option>
                      </Select>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Button type="primary" className="btnSaveTTHD">
                  Lưu
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default ThongTinHD;
