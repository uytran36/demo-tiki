import "./style.css";
import React, { useState } from "react";
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

import {
  HighlightOutlined,
  SmileOutlined,
  SmileFilled,
} from "@ant-design/icons";
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
    render: (text) => <a>{text}</a>,
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
  return (
    <Layout>
      <Content>
        <div className="site-input-group-wrapper">
          <div className="site-card-border-less-wrapper">
            <Row>
              <Col span={10}>
                <Card title="Thông Tin Hóa Đơn" bordered={false}>
                  <Input.Group size="medium">
                    <Row>
                      <Col span={10}>
                        <div className="bordertextTTNB">
                          <Text className="textTTNB">Mã Hóa Đơn </Text>
                          <br />
                        </div>
                        <div className="bordertextTTNB">
                          <Text className="textTTNB">Ngày lập Hóa Đơn </Text>
                          <br />
                        </div>
                        <div className="bordertextTTNB">
                          <Text className="textTTNB">Tổng tiền</Text>
                          <br />
                        </div>
                      </Col>
                      <Col span={14}>
                        <Input defaultValue="26888888" />
                        <Input defaultValue="6:30 12/08/2021" />
                        <Input defaultValue="0571" />
                      </Col>
                    </Row>
                  </Input.Group>
                </Card>
              </Col>
              <Col span={14}>
                <Card title="Thông Tin Khách Hàng" bordered={false}>
                  <Input.Group size="medium">
                    <Row>
                      <Col span={8}>
                        <div className="bordertextTTNB">
                          <Text className="textTTNB">Họ Tên </Text>
                          <br />
                        </div>
                        <div className="bordertextTTNB">
                          <Text className="textTTNB">Địa chỉ </Text>
                          <br />
                        </div>
                        <div className="bordertextTTNB">
                          <Text className="textTTNB">Số điện thoại</Text>
                          <br />
                        </div>
                      </Col>
                      <Col span={16}>
                        <Input defaultValue="Nguyễn Trọng Khang" />
                        <Input defaultValue="149 Nguyễn Trọng Tuyển, P.8, Quận Phú Nhuận, TP.HCM" />
                        <Input defaultValue="0571665464" />
                      </Col>
                    </Row>
                  </Input.Group>
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
                        style={{ width: 150, margin: 2 }}
                        onChange={handleChange}
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
