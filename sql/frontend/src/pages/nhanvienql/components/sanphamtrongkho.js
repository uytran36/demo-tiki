import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button, Col } from "antd";
import { Layout, Row, Divider } from 'antd';
const {Header, Content, Footer} = Layout;

const SpTrongKho = () => {
    return(
        <Layout>

            <h1 style={{ textAlign: "center" }}>Danh sách sản phẩm trong kho</h1>

            <Divider/>
            <Content>
            
            </Content>

        </Layout>
    )
}
export default SpTrongKho;