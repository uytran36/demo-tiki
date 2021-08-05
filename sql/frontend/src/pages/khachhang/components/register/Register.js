import { Form, Input, Select, Button, DatePicker } from "antd";
import "./Register.css";
import { useState } from "react";
import moment from 'moment'

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

const Register = () => {
  const [form] = Form.useForm();
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    name: "",
    birthday: "",
    phoneNum: "",
    sex: "",
    address: "",
  });

  const onFinish = (values) => {
    const info = {
      email: values.email,
      password: values.password,
      name: values.name,
      birthday: moment(values.dateOfBirth).format("MM-DD-YYYY"),
      phoneNum: values.phone,
      sex: values.gender === "male" ? "Nam" : "Nữ",
      address: values.address,
    };
    setRegisterInfo(info);
    console.log(info);
  };

  return (
    <div className="register-form">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
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
              message: "Xin vui lòng nhập Email!",
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
              message: "Xin vui lòng nhập mật khẩu!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Xin vui lòng nhập lại mật khẩu!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Hai mật khẩu đã nhập không khớp!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="name"
          label="Họ tên"
          tooltip="Họ tên của bạn là gì?"
          rules={[
            {
              required: true,
              message: "Xin vui lòng nhập họ tên!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dateOfBirth"
          label="Ngày sinh"
          tooltip="Ngày sinh của bạn là gì?"
          rules={[
            {
              required: true,
              message: "Xin vui lòng nhập Ngày sinh!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[
            {
              required: true,
              message: "Xin vui lòng nhập só điện thoại!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[
            {
              required: true,
              message: "Xin vui lòng chọn giới tính!",
            },
          ]}
        >
          <Select placeholder="Chọn giới tính">
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="address"
          label="Địa chỉ"
          tooltip="Địa chỉ của bạn là gì?"
          rules={[
            {
              required: true,
              message: "Xin vui lòng nhập Địa chỉ!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
