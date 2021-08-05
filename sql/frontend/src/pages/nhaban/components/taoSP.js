import "./style.css";
import React, { useState } from "react";
import {
  Form,
  Layout,
  Card,
  Input,
  Col,
  Row,
  Button,
  Typography,
  Select,
} from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

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

const TaoSP = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Layout>
      <div className="contentTTNB">
        <div className="site-card-border-less-wrapper">
          <Card bordered={false}>
            <div>
              <Form
                {...formItemLayout}
                form={form}
                onFinish={onFinish}
                scrollToFirstError
                wrapperCol={{ span: 10 }}
              >
                <Form.Item
                  name="tensp"
                  label="Tên Sản Phẩm"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="nhập giá trị" />
                </Form.Item>

                <Form.Item
                  name="slton"
                  label="Số lượng tồn "
                  rules={[{ required: true }]}
                >
                  <Input placeholder="nhập giá trị" />
                </Form.Item>

                <Form.Item
                  name="LoaiSP"
                  label="Loại sản phẩm"
                  rules={[
                    {
                      required: true,
                      message: "Please select type!",
                    },
                  ]}
                >
                  <Select placeholder="chọn loại sản phẩm">
                    <Option value="Điện thoại - Máy tính bảng">
                      Điện thoại - Máy tính bảng
                    </Option>
                    <Option value="Điện tử - Điện lạnh">
                      Điện tử - Điện lạnh
                    </Option>
                    <Option value="Phụ kiện - Thiết bị số">
                      Phụ kiện - Thiết bị số
                    </Option>
                    <Option value="Laptop- Thiết bị IT">
                      Laptop- Thiết bị IT
                    </Option>
                    <Option value="Máy ảnh - Thiết bị quay phim">
                      Máy ảnh - Thiết bị quay phim
                    </Option>

                    <Option value="Điện gia dùng">Điện gia dùng</Option>

                    <Option value="Nhà cửa đời sống">Nhà cửa đời sống</Option>
                    <Option value="Hàng tiêu dùng - Thực phẩm">
                      Hàng tiêu dùng - Thực phẩm
                    </Option>
                    <Option value="Đồ chơi - Mẹ và Bé">
                      Đồ chơi - Mẹ và Bé
                    </Option>
                    <Option value="Làm đẹp - Sức khỏe">
                      Làm đẹp - Sức khỏe
                    </Option>
                    <Option value="Thời trang - phụ kiện">
                      Thời trang - phụ kiện
                    </Option>
                    <Option value="Thể thao - dã ngoại">
                      Thể thao - dã ngoại
                    </Option>
                    <Option value="Xe máy, ô tô, xe đạp">
                      Xe máy, ô tô, xe đạp
                    </Option>
                    <Option value="Sách - VPP và Quà tặng">
                      Sách - VPP và Quà tặng
                    </Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="giagiam"
                  label="Giá giảm"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="nhập giá trị" />
                </Form.Item>

                <Form.Item
                  name="giaban"
                  label="Giá bán"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="nhập giá trị" />
                </Form.Item>

                <Form.Item
                  name="hoahog"
                  label="Hoa hồng"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="nhập giá trị" />
                </Form.Item>
                <Form.Item
                  name="mota"
                  label="Mô tả"
                  rules={[{ required: true }]}
                >
                  <TextArea rows={4} placeholder="nhập mô tả" />
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
export default TaoSP;
