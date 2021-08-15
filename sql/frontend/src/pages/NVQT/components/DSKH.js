import { Table, Pagination } from "antd";
import { Layout } from "antd";
import { Typography } from "antd";
import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const { Title } = Typography;
const { Content } = Layout;


const columns = [
  {
    title: "Mã Khách Hàng",
    dataIndex: "MaKH",
    key: "MaKH",
  },
  {
    title: "Tên Khách Hàng",
    key: "Ten",
    dataIndex: "Ten",
  },
  {
    title: "Ngày sinh",
    dataIndex: "NgaySinh",
    key: "NgaySinh",
    render: (_,record) => {return moment(record.NgaySinh).format("MM-DD-YYYY")}
  },
  {
    title: "Địa chỉ",
    key: "DiaChi",
    dataIndex: "SoNha",
    render: (_,record) => {return <div>{record.SoNha + " " +record.Duong + " Phường " + record.Phuong + " Quận " + record.Quan + " " +record.ThanhPho}</div>}
  },
  {
    title: "Email",
    key: "Email",
    dataIndex: "Email",
  },
  {
    title: "SĐT",
    key: "Sdt",
    dataIndex: "Sdt",
  },
  {
    title: "Giới tính",
    key: "GioiTinh",
    dataIndex: "GioiTinh",
  },
  {
    title: "Tiki xu",
    key: "TikiXu",
    dataIndex: "TikiXu",
  },
];



function DSKH() {
    const [listKhachHang, setListKhachHang] = useState([]);
    const [current, setCurrent] = useState(1);
    const [amountKH, setAmountKH] = useState(0);
    useEffect(() => {
        axios
          .get("http://localhost:5000/api/NVQT/listKH/1")
          .then((res) => {
            setListKhachHang(res.data);
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .get("http://localhost:5000/api/amountkh")
          .then((res) => {
            setAmountKH(res.data[0].SL);
          })
          .catch((err) => {
            console.log(err);
          })
      }, []);

    const onChange = (page) => {
        setCurrent(page);
        axios.get("http://localhost:5000/api/NVQT/listKH/" + page).then((res) => {
            setListKhachHang(res.data);
        });
    };
    
  return (
    <div>
        <div>
      <Layout>
        <Content>
          <Title level={2} classname="titlename">
            Danh sách khách hàng
          </Title>
          <Table columns={columns} dataSource={listKhachHang} pagination={false} />
        </Content>
      </Layout>
    </div>

    <div className="paging" style={{ marginLeft: 500 }}>
        <Pagination
        current={current}
        pageSize={10}
        total={amountKH}
        onChange={onChange}
        showSizeChanger={false}
        />
    </div>
    </div>
  );
}

export default DSKH;
