import "./style.css";
import { BrowserRouter as Link } from "react-router-dom";
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
import React, { useState, useEffect } from "react";
import axios from "axios";
const { Content } = Layout;

function handleChange(value) {
  console.log(`selected ${value}`);
}
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
  const [val, setListProduct] = useState([]);
  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/")[3];
    console.log(id);
    axios
      .get("http://localhost:5000/api/nhaban/hoadon/" + id)
      .then((res) => {
        setListProduct(res.data);
        console.log(res.data);
        console.log(val);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Content>
        {/* <div className="site-input-group-wrapper">
          <Card title="Thông Tin Hóa Đơn" bordered={false}>
            <Form
              form={form}
              {...formItemLayout}
              scrollToFirstError
              wrapperCol={{ span: 10 }}
            >
              <Form.Item name="MaHD" label="Mã Hóa Đơn">
                <Input />
              </Form.Item>

              <Form.Item name="Ten" label="Tên Khách Hàng">
                <Input />
              </Form.Item>

              <Form.Item name="NgayLap" label="Ngày lập">
                <Input />
              </Form.Item>

              <Form.Item name="TongTien" label="Tổng tiền">
                <Input />
              </Form.Item>

              <Form.Item name="TinhTrang" label="Tình trạng">
                <Input />
              </Form.Item>

              <Form.Item name="SLTikiXu" label="SL Tiki xu">
                <Input />
              </Form.Item>
              <Form.Item name="PhiVC" label="Phí vận chuyển ">
                <Input />
              </Form.Item>

              <Form.Item name="ThanhTienHD" label="Thành tiền">
                <Input />
              </Form.Item>
              <Form.Item name="NgayGiaoTC" label="Ngày giao ">
                <Input />
              </Form.Item>

              <Form.Item name="GhiChu" label="GhiChu">
                <Input />
              </Form.Item>
            </Form>
          </Card>
        </div> */}
      </Content>
    </Layout>
  );
};
export default ThongTinHD;
