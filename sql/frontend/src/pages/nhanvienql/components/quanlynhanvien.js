import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button, Col, Divider } from "antd";
import { Layout } from 'antd';
const {Header, Content, Footer} = Layout;

const QlNhanVien = () => {
    return(
        <Layout>

            <h1 style={{ textAlign: "center" }}>Quản lý nhân viên</h1>

            <Divider/>
            <Content>
            
            </Content>

        </Layout>
    )
}
export default QlNhanVien;