import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button, Col } from "antd";
import { Layout } from 'antd';
const {Header, Content, Footer} = Layout;

const QlNhanVien = () => {
    return(
        <Layout>
            <Header>
            <title>Danh sách nhân viên</title>
            </Header>
            <Divider/>
            <Content>
            <Row>
            <Col span={8}>Mã nhân viên</Col>
            <Col span={8}>Tên nhân viên</Col>
            <Col span={8}>Thao tác</Col>
            </Row>
            <Divider/>
            <Row>
            <Col span={8}>1</Col>
            <Col span={8}>Nguyễn Trọng Khang</Col>
            <Col span={8}><Link to="/chitietnv">Thông tin chi tiết</Link></Col>
            </Row>
            <Divider/>
            <Row>
            <Col span={8}>2</Col>
            <Col span={8}>Trần Khánh Gia Uy</Col>
            <Col span={8}><Link to="/chitietnv">Thông tin chi tiết</Link></Col>
            </Row>
            
            </Content>

        </Layout>
    )
}
export default QlNhanVien;