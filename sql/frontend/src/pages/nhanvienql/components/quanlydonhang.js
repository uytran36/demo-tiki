import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import {Layout, Col, Row, Divider, Button, Table, Typography, Pagination} from "antd";
import axios from 'axios';
import { useHistory } from "react-router";
const {Title} = Typography
const { Header, Footer, Content } = Layout;

const columns = [
    {
        title: "Mã Hóa Đơn",
        dataIndex: "MaHD",
        key: "MaHD"
    },
    {
        title: "Tình trạng",
        dataIndex: "TinhTrang",
        key: "TinhTrang"
    },
    {
        title: "Giá tiền",
        dataIndex: "TongTien",
        key: "TongTien"
    },
    {
        title: "Mã NVGH",
        dataIndex: "MaNVGH",
        key: "MaNVGH"
    }
]

const QlDonHang = () => {

    const [listHD, setListHD] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5000/api/NVQL/dshd/" + JSON.parse(window.localStorage.getItem("NVQL")))
        .then((res) => {
            setListHD(res.data);
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
                    <Table columns={columns} dataSource={listHD}/>
                </Content>
            </Layout>
    </div>
    );
}
export default QlDonHang;