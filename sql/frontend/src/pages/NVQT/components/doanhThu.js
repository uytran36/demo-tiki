import { Form, Input, InputNumber, Button, Modal, Col, Row, Tooltip, Table, notification, Layout, Typography, Select  } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";

const { Content } = Layout;
const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
const { Title } = Typography; 
const DT = () => {
    const [hoaDon,setHoaDon] = useState([]);
    const [thanhTien,setThanhTien] = useState([]);
    const [select,setSelect] = useState("2018");

    const handleChange = (values) => {
        setSelect(values);
    };

    const onClick = () => {
        axios
          .get("http://localhost:5000/api/NVQT/DTTT/" + select)
          .then((res) => {
              setThanhTien(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        axios
          .get("http://localhost:5000/api/NVQT/DTHD/" + select)
          .then((res) => {
              setHoaDon(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const columns = [
        {
          title: "Tháng Một",
          dataIndex: "ThangMot",
          key: "ThangMot",
        },
        {
            title: "Tháng Hai",
            dataIndex: "ThangHai",
            key: "ThangHai",
        },
        {
            title: "Tháng Ba",
            dataIndex: "ThangBa",
            key: "ThangBa",
        },
        {
            title: "Tháng Tư",
            dataIndex: "ThangTu",
            key: "ThangTu",
        },
        {
            title: "Tháng Năm",
            dataIndex: "ThangNam",
            key: "ThangNam",
        },
        {
            title: "Tháng Sáu",
            dataIndex: "ThangSau",
            key: "ThangSau",
        },
        {
            title: "Tháng Bảy",
            dataIndex: "ThangBay",
            key: "ThangBay",
        },
        {
            title: "Tháng Tám",
            dataIndex: "ThangTam",
            key: "ThangTam",
        },
        {
            title: "Tháng Chín",
            dataIndex: "ThangChin",
            key: "ThangChin",
        },
        {
            title: "Tháng Mười",
            dataIndex: "ThangMuoi",
            key: "ThangMuoi",
        },
        {
            title: "Tháng Mười Một",
            dataIndex: "ThangMuoiMot",
            key: "ThangMuoiMot",
        },
        {
            title: "Tháng 12",
            dataIndex: "ThangMuoiHai",
            key: "ThangMuoiHai",
        },

        ]
    return (
        <Layout>
              <div>
                <Select defaultValue="2018" style={{ width: 120 }} onChange={handleChange} >
                    <Option value="2018">2018</Option>
                    <Option value="2019">2019</Option>
                    <Option value="2020">2020</Option>
                </Select>
                <Button style={{marginLeft: 20}}
                        type="primary"
                        shape="circle"
                        icon={<SearchOutlined />}
                        onClick={onClick}
                      />
              </div>

              <Content>
                <Title style={{marginTop: 20}} level="4" align="center">Doanh thu theo tiền lời</Title>
                <Table style={{marginTop: 20}} columns={columns} dataSource={thanhTien} pagination={false} />

                <Title style={{marginTop: 20}} level="4" align="center">Doanh thu theo số hóa đơn</Title>
                <Table style={{marginTop: 20}} columns={columns} dataSource={hoaDon} pagination={false} />
              </Content>
        </Layout>
    );
}

export default DT;