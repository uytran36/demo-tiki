import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Table, Layout, Button} from "antd";
import React, { useState } from 'react';
import {
    Form,
    Input
  } from 'antd';


const {Header, Content, Footer} = Layout;




const ChiTietDH = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Layout>
        <Header><h1>Thông tin hóa đơn</h1></Header>
      <Content>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Mã hóa đơn">
          <Input disabled/>
        </Form.Item>
        <Form.Item label="Ngày lập hóa đơn">
        <Input disabled/>
        </Form.Item>
        <Form.Item label="Tổng tiền">
        <Input disabled/>
        </Form.Item>
      </Form>

      <h1>Chi tiết hóa đơn</h1>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Mã hóa đơn">
          <Input disabled/>
        </Form.Item>
        <Form.Item label="Ngày lập hóa đơn">
        <Input disabled/>
        </Form.Item>
        <Form.Item label="Tổng tiền">
        <Input disabled/>
        </Form.Item>
      </Form>

      <h1>Thông tin đơn hàng</h1>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Mã hóa đơn">
          <Input disabled/>
        </Form.Item>
        <Form.Item label="Ngày lập hóa đơn">
        <Input disabled/>
        </Form.Item>
        <Form.Item label="Tổng tiền">
        <Input disabled/>
        </Form.Item>
      </Form>

      <div>Tình trạng đơn hàng:<span> Đang vận chuyển</span></div>
      <Button>Vận chuyển thành công</Button>
      <Button>Hủy đơn hàng</Button>
      </Content>
    </Layout>
  );
};
export default ChiTietDH;