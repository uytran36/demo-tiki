import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import {Layout, Col, Row, Divider, Button, Table, Typography, Pagination} from "antd";
import axios from 'axios';
import { useHistory } from "react-router";
const {Title} = Typography
const { Header, Footer, Content } = Layout;

const columns = [
    {
        title: "Mã sản phẩm",
        dataIndex: "MaSP",
        key: "MaSP"
    },
    {
        title: "Số lượng",
        dataIndex: "SoLuong",
        key: "SoLuong"
    }
]

const SpTrongKho = () => {
    const [listSP, setListSP] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5000/api/NVQL/dssp/" + JSON.parse(window.localStorage.getItem("NVQL")))
        .then((res) => {
            setListSP(res.data);
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
                    <Table columns={columns} dataSource={listSP}/>
                </Content>
            </Layout>
    </div>
    );
}
export default SpTrongKho;