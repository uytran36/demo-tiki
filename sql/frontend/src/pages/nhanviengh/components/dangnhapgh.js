import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Layout } from 'antd';
import axios from 'axios';

const { Header, Footer, Content } = Layout;
const DangNhapGH = () => {
    const onFinish = (value) => {
        console.log(value)
        axios.post(
            "http://localhost:5000/api/NVGH/login",
        
            JSON.stringify(value),

            {
            headers: {
              "Content-Type": "application/json",
                },
            }
        )
        .then((res) => {
            if (res.data[0].checkLogin == 0) {
                
            }
        })
        .catch((e) => {
            console.log(e)
        }) 

    }

    return(
        <Layout>
            <h1>Đăng nhập nhân viên giao hàng</h1>
            <Content>
                <Form id="login-form" 
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
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