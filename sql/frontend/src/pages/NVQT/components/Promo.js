import { Form, Input, InputNumber, Button, Modal, Col, Row, Tooltip, Table, notification } from 'antd';
import { Typography } from 'antd';
import { DatePicker, Space } from 'antd';
import { Layout } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const { Content } = Layout;
const monthFormat = 'YYYY-MM';
const { Title } = Typography;
function onChange(date, dateString) {
  console.log(date, dateString);
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };


function TopModal(props) {
    const [isModalVisible, setIsModalVisible] = useState(props.visible);
    const [form] = Form.useForm();
    const [listKhachHang, setListKhachHang] = useState([])
    const [ngay,setNgay] = useState("2020-07-01")

    const onChange = (value) => {
      console.log(value)
      setNgay(moment(value).format("YYYY-MM-01")) 
    }
    
    const onClick = () => {
      axios
        .get("http://localhost:5000/api/NVQT/topKhachHang/" + ngay)
        .then((res) => {
            setListKhachHang(res.data);
            console.log(listKhachHang);
        })
        .catch((err) => {
          console.log(err);
        });

    };
    const columns = [
      {
        title: "Mã Khách Hàng",
        dataIndex: "MaKH",
        key: "MaKH",
      },
      {
        title: "Số tiền đã chi",
        key: "TongChi",
        dataIndex: "TongChi",
      },]

    const handleCancel = () => {
      setIsModalVisible(false);
      props.setVisibleFalse();
    };

    return (
      <>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Layout>
              <div>
                  <Title level="3" align="center">Top chi tiêu khách hàng</Title>
              </div>
              <div>
              <Form {...layout} form={form} layout="horizontal"> 
              <Input.Group compact>
                  <Form.Item name="NgayLap">
                      <DatePicker defaultValue={moment('2020/07', monthFormat)} format={monthFormat} picker="month" onChange={onChange}/>
                    </Form.Item>
                  <Form.Item>
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<SearchOutlined />}
                        onClick={onClick}
                      />
                  </Form.Item>
              </Input.Group>
              </Form>
              </div>

              <Content>
                <Table columns={columns} dataSource={listKhachHang} pagination={false} />
              </Content>
          </Layout>  
        </Modal>
      </>
    );
  }
  const Promotion = () => {
    const [topVisible, setTopVisible] = useState(false);

    const setVisibleFalse = () => {
      setTopVisible(false);
    };
    const onClick = () => {
      setTopVisible(true);
    }

    const openNotification = () => {
      notification.open({
        message: 'Chúc mừng!',
        description:
          'Bạn đã tạo Khuyến Mãi thành công',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };

    const onFinish = (values) => {
      const info = {
        MaKH: values.MaKH,
        Ten: values.Ten,
        GiaTri: values.GiaTri,
        HanSuDung: moment(values.HanSuDung).format("MM-DD-YYYY"),
        LuotSuDung: parseInt(values.LuotSuDung),
      };

      axios
        .post("http://localhost:5000/api/NVQT/taoKhuyenMai", JSON.stringify(info), {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };


    return (     
        <Layout>
            <div>
                <Title level="2" align="center">Tạo mã khuyến mãi</Title>
            </div>
            <div>
            <Form {...layout} validateMessages={validateMessages} onFinish={onFinish}>
                <Form.Item name="MaKH" label="Nhập mã khách hàng" rules={[{ required: true }]}>
                <Input />
                </Form.Item>     
                <Form.Item name="GiaTri" label="Chọn số tiền khuyến mãi (Đơn vị 1000đ)">
                    <InputNumber min={1} />
                </Form.Item>  
                <Form.Item name="Ten" label="Tên khuyến mãi">
                    <Input />
                </Form.Item> 
                <Form.Item name="LuotSuDung" label="Số lượng" rules={[{ required: true }]}>
                <InputNumber min={1} max={20} />
                </Form.Item>
                <Form.Item name="HanSuDung" label="Ngày hết hạn" rules={[{ required: true }]} 
                rules={[
                  () => ({
                  validator(_, value) {
                      if (moment(value) > moment()) {
                      return Promise.resolve();
                      }

                      return Promise.reject(
                      new Error("Ngày hết hạn không hợp lệ")
                      );
                  },
                  }),
              ]}>
                    <DatePicker/>
                </Form.Item>
                
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button onClick={() => onClick()}>
                    Xem danh sách khách hàng
                </Button>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" size="middle" onClick={openNotification}>
                    Xác nhận
                </Button>
                </Form.Item>
            </Form>
            </div>
            <TopModal
              key={topVisible}
              visible={topVisible}
              setVisibleFalse={setVisibleFalse}
            />
        </Layout>  
    );
  };

  export default Promotion;