import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;
const DangNhapGH = () => {
    return(
        <Layout>
            <h1>Đăng nhập nhân viên giao hàng</h1>
            <Content>
                <Form id="login-form"
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input size="middle"/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password size="middle"/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
            <Footer></Footer>
        </Layout>
                        
    );
};
export default DangNhapGH;