import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import {Layout, Col, Row, Divider, Button} from "antd";

const { Header, Footer, Content } = Layout;

const listData = [

]

const DanhSachDH = () => {
    return(
        <Layout>
            <Header>
            <title>Danh sách sản phẩm</title>
            </Header>
            <Divider/>
            <Content>
            <Row>
            <Col span={6}>Tên Hóa đơn</Col>
            <Col span={6}>Tình trạng</Col>
            <Col span={6}>Giá tiền</Col>
            <Col span={6}>Thao tác</Col>
            </Row>
            <Divider/>
            <Row>
            <Col span={6}>Hóa đơn 1</Col>
            <Col span={6}>Đang vận chuyển</Col>
            <Col span={6}>60.000 VND</Col>
            <Col span={6}><Link to="/chitiet">Xem chi tiết</Link></Col>
            </Row>
            <Divider/>
            <Row>
            <Col span={6}>Hóa đơn 2</Col>
            <Col span={6}>Sẵn sàng</Col>
            <Col span={6}>60.000 VND</Col>
            <Col span={6}><Button>Bắt đầu vận chuyển</Button></Col>
            </Row>
            
            </Content>

        </Layout>
    );
}
export default DanhSachDH;
