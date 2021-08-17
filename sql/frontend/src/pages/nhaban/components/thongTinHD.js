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
  const [hoaDon, setHoaDon] = useState([]);
  
  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/")[3];

    axios
      .get("http://localhost:5000/api/nhaban/hoadon/" + id)
      .then((res) => {
        setHoaDon(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Content>
        <div className="site-input-group-wrapper">
          <div>{hoaDon.Ten}</div>
          <Card title="Thông Tin Hóa Đơn" bordered={false}>
            <Form form={form} {...formItemLayout} name="thongTinHD" wrapperCol={{ span: 10 }}>
              <Form.Item name="MaHD" label="Mã hóa đơn">
                <Input defaultValue={hoaDon.MaHD} />
              </Form.Item>

              <Form.Item name="Ten" label="Tên Khách Hàng">
                <Input defaultValue={hoaDon.Ten} />
              </Form.Item>

              <Form.Item name="NgayLap" label="Ngày lập">
                <Input defaultValue={hoaDon.NgayLap} />
              </Form.Item>

              <Form.Item name="TongTien" label="Tổng tiền">
                <Input defaultValue={hoaDon.TongTien} />
              </Form.Item>

              <Form.Item name="TinhTrang" label="Tình trạng">
                <Input defaultValue={hoaDon.TinhTrang} />
              </Form.Item>

              <Form.Item name="SLTikiXu" label="SL Tiki xu">
                <Input defaultValue={hoaDon.SLTikiXu} />
              </Form.Item>
              <Form.Item name="PhiVC" label="Phí vận chuyển ">
                <Input defaultValue={hoaDon.PhiVC} />
              </Form.Item>

              <Form.Item name="ThanhTienHD" label="Thành tiền">
                <Input defaultValue={hoaDon.ThanhTienHD} />
              </Form.Item>
              <Form.Item name="NgayGiaoTC" label="Ngày giao ">
                <Input defaultValue={hoaDon.NgayGiaoTC} />
              </Form.Item>

              <Form.Item name="GhiChu" label="Ghi Chú">
                <Input defaultValue={hoaDon.GhiChu} />
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};
export default ThongTinHD;
