import {
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  Row,
  Col,
  Card,
  notification,
} from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "./MainProfile.css";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 10,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 10,
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

const TikiXu = ({ kh }) => {
  return (
    <div>
      <Card title="Tiki xu của tôi" style={{ width: 300 }}>
        <div>
          Bạn có <b>{kh.TikiXu}</b> Tiki xu trong tài khoản
        </div>
      </Card>
    </div>
  );
};

const MainProfile = () => {
  const [kh, setKh] = useState(JSON.parse(window.localStorage.getItem("KH")));

  const [form] = Form.useForm();

  useEffect(() => {
    setKh(JSON.parse(window.localStorage.getItem("KH")));
  }, []);

  const onFinish = (values) => {
    let listAddress = [];
    if (values.DiaChi === undefined) {
      listAddress.push(kh.SoNha);
      listAddress.push(kh.Duong);
      listAddress.push(kh.Phuong);
      listAddress.push(kh.Quan);
      listAddress.push(kh.ThanhPho);
    } else {
      listAddress = values.address.split(", ");
    }

    const info = {
      MaKH: kh.MaKH,
      Email: values.email === undefined ? kh.Email : values.Email,
      MatKhau: values.MatKhau === undefined ? kh.MatKhau : values.MatKhau,
      Ten: values.Ten === undefined ? kh.Ten : values.Ten,
      NgaySinh:
        values.NgaySinh === undefined
          ? kh.NgaySinh
          : moment(values.NgaySinh).format("MM-DD-YYYY"),
      Sdt: values.Sdt === undefined ? kh.Sdt : values.Sdt,
      GioiTinh:
        values.GioiTinh === undefined
          ? kh.GioiTinh
          : values.GioiTinh === "male"
          ? "Nam"
          : "Nữ",
      SoNha: listAddress[0],
      Duong: listAddress[1],
      Phuong: listAddress[2],
      Quan: listAddress[3],
      ThanhPho: listAddress[4],
      TikiXu: kh.TikiXu,
    };

    console.log(info);
    axios
      .put(
        "http://localhost:5000/api/khachhang/" + kh.MaKH,
        JSON.stringify(info),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        notification.open({
          message: "Thông báo",
          description: "Cập nhật thành công!",
          icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    window.localStorage.setItem("KH", JSON.stringify(info));
  };

  return (
    <div className="register-form">
      <Row>
        <Col span={18}>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item name="email" label="E-mail">
              <Input disabled={true} defaultValue={kh.Email} />
            </Form.Item>

            <Form.Item name="MatKhau" label="Mật khẩu">
              <Input.Password defaultValue={kh.MatKhau} />
            </Form.Item>

            <Form.Item name="Ten" label="Họ tên">
              <Input defaultValue={kh.Ten} />
            </Form.Item>

            <Form.Item
              name="NgaySinh"
              label="Ngày sinh"
              tooltip="Ngày sinh của bạn là gì?"
            >
              <DatePicker defaultValue={moment(kh.NgaySinh)} className="date" />
            </Form.Item>

            <Form.Item name="Sdt" label="Số điện thoại">
              <Input
                style={{
                  width: "100%",
                }}
                defaultValue={kh.Sdt}
              />
            </Form.Item>

            <Form.Item name="GioiTinh" label="Giới tính">
              <Select
                placeholder="Chọn giới tính"
                defaultValue={kh.GioiTinh === "Nam" ? "male" : "female"}
              >
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="DiaChi"
              label="Địa chỉ"
              tooltip="Nhập địa chỉ theo định dạng: số nhà, đường, phường, quận, thành phố"
            >
              <Input
                defaultValue={
                  kh.SoNha.trim() +
                  ", " +
                  kh.Duong.trim() +
                  ", Phường " +
                  kh.Phuong.trim() +
                  ", Quận " +
                  kh.Quan.trim() +
                  " " +
                  kh.ThanhPho.trim()
                }
              />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={4}>
          <TikiXu kh={kh} />
        </Col>
      </Row>
    </div>
  );
};

export default MainProfile;
