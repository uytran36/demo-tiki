import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import {Layout, Col, Row, Divider, Button, Table, Typography, Pagination} from "antd";
import axios from 'axios';
import { useHistory } from "react-router";
const {Title} = Typography
const { Header, Footer, Content } = Layout;

const columns = [
    {
        title: "Mã nhân viên",
        dataIndex: "MaNV",
        key: "MaHD"
    },
    {
        title: "Họ tên",
        dataIndex: "Ten",
        key: "TinhTrang"
    },
    {
        title: "Giới tính",
        dataIndex: "GioiTinh",
        key: "GioiTinh"
    },
    {
        title: "Ngày Sinh",
        dataIndex: "NgaySinh",
        key: "NgaySinh"
    },
    {
        title: "Đơn hàng đã giao",
        dataIndex: "DonHangDaGiao",
        key: "DonHangDaGiao"
    },
    {
        title: "Lương",
        dataIndex: "Luong",
        key: "Luong"
    },
    {
        title: "Hành động",
            key: "action",
            render: (_, record) => (
            <Button onClick={() => onClickEdit(record)}><Link to="/ql/ctnv">Xem chi tiết</Link></Button>
            ),
    }
]

const onClickEdit = (record) => {
    window.localStorage.setItem("MaNV", JSON.stringify(record.MaNV))
}

const QlNhanVien = () => {
    const [listNV, setListNV] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5000/api/NVQL/dsnv/" + JSON.parse(window.localStorage.getItem("NVQL")))
        .then((res) => {
            setListNV(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return(
    <div>
            <Layout>
                <Content>
                    <Title level={2} classname="titlename">
                    Danh sách đơn hàng
                    </Title>
                    <Table columns={columns} dataSource={listNV}/>
                </Content>
            </Layout>
    </div>
    );
}
export default QlNhanVien;