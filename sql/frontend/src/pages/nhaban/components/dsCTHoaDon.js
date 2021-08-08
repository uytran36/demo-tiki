import { Table } from "antd";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { Typography } from "antd";
import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const { Title } = Typography;
const { Content } = Layout;
function callback(key) {
  console.log(key);
}
const columns = [
  {
    title: "Mã Chi tiết HĐ",
    dataIndex: "MaHD",
    key: "MaHD",
    sorter: (a, b) => a.MaHD - b.MaHD,
    render: (text) => <Link to={`/nhaban/hoadon/${text}`}>{text}</Link>,
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
    title: "Giá Tiền",
    dataIndex: "ThanhTien",
    key: "ThanhTien",
  },
];

function DsHoaDon() {
  const [listProduct, setListProduct] = useState([]);
  let dataW = JSON.parse(window.localStorage.getItem("auth"));
  const info = {
    MaNhaBan: dataW.MaNhaBan,
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/nhaban/cthd", JSON.stringify(info), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setListProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [listProduct]);
  return (
    <div>
      <Layout>
        <Content>
          <Title level={2} classname="titlename">
            Danh sách Chi Tiết Hóa Đơn
          </Title>

          <Table columns={columns} dataSource={listProduct} />
        </Content>
      </Layout>
    </div>
  );
}

export default DsHoaDon;
