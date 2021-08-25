import { useHistory } from "react-router-dom";

import { Form, Input, Button } from "antd";
import { Layout } from 'antd';
import axios from 'axios';
const { Header, Footer, Content } = Layout;

const DangNhapQL = ({ setAuth, setVerify, verify }) => {

    const history = useHistory()

    const onFinish = (value) => {
        console.log(value)
        axios.post(
            "http://localhost:5000/api/NVQL/login",
        
            JSON.stringify(value),

            {
            headers: {
              "Content-Type": "application/json",
                },
            }
        )

        .then((res) => {
            // if (res.data.length !== 0) {
            //     window.localStorage.setItem("NVQL", JSON.stringify(res.data[0].MaNV));
            //     setAuth(res.data[0]);
            //     setVerify(!verify);
            //     history.push("/ql");
            // }
            // else {
            //     console.log(res)
            //     console.log(false)
            // }
            window.localStorage.setItem("NVQL", JSON.stringify(res.data[0].MaNV));
            setAuth(res.data[0]);
            setVerify(!verify);
            history.push("/ql");
            console.log(res)
        })
        .catch((e) => {
            console.log(e)
        }) 
    }
    return(
        <Layout>
            <h1 style={{ textAlign: "center" }}>Đăng nhập nhân viên quản lý kho</h1>
            <Content>
                <Form id="login-form"
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        label="Username"
                        name="Email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input size="middle"/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="MatKhau"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password size="middle"/>
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
export default DangNhapQL;