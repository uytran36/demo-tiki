import { Form, Input, Select, Button, DatePicker } from "antd";
import "./Register.css";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  const [amount, setAmount] = useState(0);

  const [form] = Form.useForm();
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/amountkh")
      .then((res) => {
        if (res.data.length !== 0) {
          setAmount(res.data[0].SL);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onFinish = (values) => {
    const listAddress = values.address.split(", ");

    const info = {
      MaKH: amount,
      Email: values.email,
      MatKhau: values.password,
      Ten: values.name,
      NgaySinh: moment(values.dateOfBirth).format("MM-DD-YYYY"),
      Sdt: values.phone,
      GioiTinh: values.gender === "male" ? "Nam" : "Nữ",
      SoNha: listAddress[0],
      Duong: listAddress[1],
      Phuong: listAddress[2],
      Quan: listAddress[3],
      ThanhPho: listAddress[4],
      TikiXu: 0,
    };

    axios
      .post("http://localhost:5000/api/addkhachhang", JSON.stringify(info), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
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
          tooltip="Nhập địa chỉ theo định dạng: số nhà, đường, phường, quận, thành phố"
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
