import "./style.css";
import { Layout, Card, Typography, notification } from "antd";
import { Form, Input, Button } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
const { Content } = Layout;
const { Title } = Typography;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const ThongTinHD = () => {
  const [form] = Form.useForm();
  const [nhaBanData, setData] = useState([]);
  let dataW = JSON.parse(window.localStorage.getItem("auth"));

  const onFinish = (values) => {
    const info = {
      TenNhaBan:
        values.TenNhaBan !== undefined ? values.TenNhaBan : dataW.TenNhaBan,
      SDTNhaBan:
        values.SDTNhaBan !== undefined ? values.SDTNhaBan : dataW.SDTNhaBan,
      EmailNhaBan:
        values.EmailNhaBan !== undefined
          ? values.EmailNhaBan
          : dataW.EmailNhaBan,
      DiaChiNhaBan:
        values.DiaChiNhaBan !== undefined
          ? values.DiaChiNhaBan
          : dataW.DiaChiNhaBan,
      MatKhauNhaBan:
        values.MatKhauNhaBan !== undefined
          ? values.MatKhauNhaBan
          : dataW.MatKhauNhaBan,
    };

    axios
      .put(
        "http://localhost:5000/api/nhaban/" + dataW.MaNhaBan,
        JSON.stringify(info),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        notification.open({
          message: "Notification",
          description: "Đã lưu thành công",
        });
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <Content>
        <div className="contentTTNB">
          <div className="site-card-border-less-wrapper">
            <div>
              <Title level={2}>Thông Tin Nhà Bán</Title>
            </div>
            <Card bordered={false}>
              <div className="formTTNB">
                <Form
                  {...formItemLayout}
                  form={form}
                  onFinish={onFinish}
                  scrollToFirstError
                  wrapperCol={{ span: 10 }}
                >
                  <Form.Item name="TenNhaBan" label="Tên Nhà Bán">
                    <Input defaultValue={dataW.TenNhaBan} />
                  </Form.Item>

                  <Form.Item name="EmailNhaBan" label="E-mail">
                    <Input type="email" defaultValue={dataW.EmailNhaBan} />
                  </Form.Item>

                  <Form.Item name="SDTNhaBan" label="Số Điện Thoại">
                    <Input defaultValue={dataW.SDTNhaBan} />
                  </Form.Item>

                  <Form.Item name="MatKhauNhaBan" label="Mật khẩu ">
                    <Input.Password defaultValue={dataW.MatKhauNhaBan} />
                  </Form.Item>

                  <Form.Item name="DiaChiNhaBan" label="Địa chỉ">
                    <Input defaultValue={dataW.DiaChiNhaBan} />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btnSaveTTNB"
                    >
                      Lưu
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default ThongTinHD;
