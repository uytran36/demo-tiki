import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button, Col } from "antd";
import { Layout, Row, Divider } from 'antd';
const {Header, Content, Footer} = Layout;

const SpTrongKho = () => {
    return(
        <Layout>
            <Header>
            <title>Danh sách sản phẩm trong kho</title>
            </Header>
            <Divider/>
            <Content>
            <Row>
            <Col span={6}>Mã sản phẩm</Col>
            <Col span={6}>Tên sản phẩm</Col>
            <Col span={6}>Số lượng</Col>
            <Col span={6}>Giá bán</Col>
            </Row>
            <Divider/>
            <Row>
            <Col span={6}>10000001</Col>
            <Col span={6}>Bút chì màu</Col>
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
export default SpTrongKho;