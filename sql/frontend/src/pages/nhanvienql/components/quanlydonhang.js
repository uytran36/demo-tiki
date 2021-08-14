import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button, Col } from "antd";
import { Layout, Row, Divider  } from 'antd';
const {Header, Content, Footer} = Layout;

const QlDonHang = () => {
    return(
        <Layout>
            <Header>
            <title>Danh sách đơn hàng</title>
            </Header>
            <Divider/>
            <Content>
            <Row>
            <Col span={6}>Mã hóa đơn</Col>
            <Col span={6}>Mã nhân viên</Col>
            <Col span={6}>Ngày lập hóa đơn</Col>
            <Col span={6}>Tình trạng</Col>
            </Row>
            <Divider/>
            <Row>
            <Col span={6}>10000001</Col>
            <Col span={6}>10000001</Col>
            <Col span={6}>300</Col>
            <Col span={6}>20000 VND</Col>
            </Row>
            <Divider/>
            <Row>
            <Col span={6}>10000001</Col>
            <Col span={6}>Bút chì màu</Col>
            <Col span={6}>300</Col>
            <Col span={6}>20000 VND</Col>
            </Row>
            
            </Content>

        </Layout>
    )
}
export default QlDonHang;