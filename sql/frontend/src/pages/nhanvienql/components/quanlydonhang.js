import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button, Col, Table } from "antd";
import { Layout, Row, Divider  } from 'antd';
const {Header, Content, Footer} = Layout;

const QlDonHang = () => {
    return(
        <Layout>

            <h1 style={{ textAlign: "center" }}>Quản lý đơn hàng</h1>

            <Divider/>
            <Content>
            
            <Table>
                
            </Table>
            
            </Content>

        </Layout>
    )
}
export default QlDonHang;