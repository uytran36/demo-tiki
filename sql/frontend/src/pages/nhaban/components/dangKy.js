import React, { useState } from "react";
import "./style.css";
import {
  Layout,
  Form,
  Input,
  Typography,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
const { Option } = Select;
const { Title, Text } = Typography;

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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const DangKy = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Layout>
         <div className="titleDK">
          <Title>Đăng Ký Bán Hàng cùng Tiki</Title>
        </div>
      <div className="formDK">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="HoTenChuCH"
            label="Họ tên chủ cửa hàng"
            rules={[
              {
                message: "The input is not valid !",
              },
              {
                required: true,
                message: "Please input your Full Name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="TenCH"
            label="Tên cửa hàng"
            rules={[
              {
                required: true,
                message: "Please input your store name!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Url"
            label="Url cửa hàng"
            tooltip="This is the link to your store!"
            rules={[
              {
                required: true,
                message: "Please input url!",
              },
            ]}
          >
            <AutoComplete
              options={websiteOptions}
              onChange={onWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          </Form.Item>

          <Form.Item
            name="LoaiSP"
            label="Loại sản phẩm của cửa hàng sẽ bán"
            rules={[
              {
                required: true,
                message: "Please select type!",
              },
            ]}
          >
            <Select placeholder="chọn loại sản phẩm">
              <Option value="Điện thoại - Máy tính bảng">Điện thoại - Máy tính bảng</Option>
              <Option value="Điện tử - Điện lạnh">Điện tử - Điện lạnh</Option>
              <Option value="Phụ kiện - Thiết bị số">Phụ kiện - Thiết bị số</Option>
              <Option value="Laptop- Thiết bị IT">Laptop- Thiết bị IT</Option>
              <Option value="Máy ảnh - Thiết bị quay phim">Máy ảnh - Thiết bị quay phim</Option>

              <Option value="Điện gia dùng">Điện gia dùng</Option>

              <Option value="Nhà cửa đời sống">Nhà cửa đời sống</Option>
              <Option value="Hàng tiêu dùng - Thực phẩm">Hàng tiêu dùng - Thực phẩm</Option>
              <Option value="Đồ chơi - Mẹ và Bé">Đồ chơi - Mẹ và Bé</Option>
              <Option value="Làm đẹp - Sức khỏe">Làm đẹp - Sức khỏe</Option>
              <Option value="Thời trang - phụ kiện">Thời trang - phụ kiện</Option>
              <Option value="Thể thao - dã ngoại">Thể thao - dã ngoại</Option>
              <Option value="Xe máy, ô tô, xe đạp">Xe máy, ô tô, xe đạp</Option>
              <Option value="Sách - VPP và Quà tặng">Sách - VPP và Quà tặng</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Row gutter={8}>
              <Col span={12}>
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Col>
              <Col span={12}>
                <Button>Xác nhận</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="residence"
            label="Địa chỉ"
            rules={[
              {
                type: "array",
                required: true,
                message: "Please select your habitual residence!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Xác thực mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Tôi đồng ý với <a href="">chính sách của Tiki</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="btnDK">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default DangKy;
