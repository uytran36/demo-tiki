import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button, Col } from "antd";
import { Layout } from 'antd';
const {Header, Content, Footer} = Layout;

const ChuyenKho = () => {
    return(
        <Layout>
            <Header><div>Phiếu yêu cầu chuyển kho</div></Header>
            <Content>
                <Form>
                    <Form.Item label="Tên quản lý">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Sản phẩm">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Số lượng">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Nơi đi">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Nơi đến">
                        <Input/>
                    </Form.Item>
                    <Button type="primary">Xác nhận yêu cầu</Button>
                    <Button>Hủy yêu cầu</Button>
                </Form>
                
            </Content>
        </Layout>
    );
};
export default ChuyenKho;