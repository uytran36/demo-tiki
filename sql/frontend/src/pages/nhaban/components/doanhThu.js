import { Layout, Table, Col, Row, Button, Tooltip, Form } from "antd";

import { DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./style.css";

const { Content } = Layout;

const { Title } = Typography;

const columns = [
  {
    title: "Mã Sản Phẩm",
    dataIndex: "MaSP",
    key: "MaSP",
    width: "10%",
    sorter: (a, b) => a.MaSP - b.MaSP,
  },
  {
    title: "Tên Sản Phẩm",
    dataIndex: "TenSP",
    key: "TenSP",
  },
  {
    title: "Số lượng",
    dataIndex: "SoLuong",
    key: "SoLuong",
  },
  {
    title: "Tổng tiền",
    key: "TongTien",
    dataIndex: "TongTien",
  },
];

function DoanhThu() {
  const [form] = Form.useForm();
  const dateFormat = "YYYY/MM/DD";
  const [listProduct, setListProduct] = useState([]);
  const worker = {
    inputdate: moment("2020-06-09T12:40:14+0000"),
  };

  function onClickD() {
    let dataW = JSON.parse(window.localStorage.getItem("auth"));
    let inputdate = form.getFieldValue("inputdate");
    const info = {
      MaNhaBan: dataW.MaNhaBan,
      NgayGiaoTC: moment(inputdate).format(dateFormat),
    };

    console.log(info);
    axios
      .post("http://localhost:5000/api/nhaban/dttn", JSON.stringify(info), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setListProduct(res.data);
        console.log(listProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Layout>
      <Content>
        <div>
          <Row>
            <Col span={17} classname="titlename">
              <Title level={2}>Doanh Thu Theo Ngày</Title>
            </Col>
            <Col span={7}>
              <Row style={{ margin: 5 }}>
                <Col>
                  <Form form={form} initialValues={worker}>
                    <Form.Item name="inputdate">
                      <DatePicker format={dateFormat} />
                    </Form.Item>
                  </Form>
                </Col>
                <Col className="btnsearchDT">
                  <Tooltip title="search">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<SearchOutlined />}
                      onClick={onClickD}
                    />
                  </Tooltip>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div>
          <Table columns={columns} dataSource={listProduct} />
        </div>
      </Content>
    </Layout>
  );
}
export default DoanhThu;
