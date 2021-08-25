import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button, Col } from "antd";
import { Layout } from 'antd';
const {Header, Content, Footer} = Layout;

const ChuyenKho = () => {

    const history = useHistory();
    const chuyenkho = () => {
        alert("Đã gửi yêu cầu thành công")
        history.push("/ql")
    }

    return(
        <Layout>
            <h1 style={{ textAlign: "center" }}>Phiếu yêu cầu chuyển kho</h1>
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
                    <Button type="primary" onClick={chuyenkho}>Xác nhận yêu cầu</Button>
                    <Button >Hủy yêu cầu</Button>
                </Form>
                
            </Content>
        </Layout>
    );
};
export default ChuyenKho;