import { Table, Form, InputNumber, Button, Space, Pagination, DatePicker, Tooltip} from "antd";
import { Layout } from "antd";
import { Typography } from "antd";
import "./style.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";
const { Title } = Typography;
const { Content } = Layout;

const columns = [
  {
    title: "Mã Lịch Sử Biến Động",
    dataIndex: "MaLSBD",
    key: "MaLSBD",
  },
  {
    title: "Mã Nhân Viên",
    dataIndex: "MaNV",
    key: "MaNV",
  },
  {
    title: "Tên nhân viên",
    key: "HoTen",
    dataIndex: "HoTen",
  },
  {
    title: "Lương hiện tại",
    key: "Luong",
    dataIndex: "Luong",
    render: (text) => {return <div>{text}000 VNĐ</div>}
  },
  {
    title: "Ngày biến động",
    key: "Ngay",
    dataIndex: "Ngay",
    render: (_,record) => {return moment(record.Ngay).format("MM-DD-YYYY")}
  },
];


function LuongNVGH() {

  const [listNVGH, setListNVGH] = useState([]);
  const [current, setCurrent] = useState(1);
  const [amount, setAmount] = useState(0);
  const data = listNVGH;
  useEffect(() => {
      axios
        .get("http://localhost:5000/api/NVQT/listLuongNVQLK/1")
        .then((res) => {
          setListNVGH(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

        axios
          .get("http://localhost:5000/api/NVQT/AmountLSBDL_NVQLK")
          .then((res) => {
            console.log(res)
            setAmount(res.data[0].SL);
          })
          .catch((err) => {
            console.log(err);
          })

    }, []);
  const onChange = (page) => {
      setCurrent(page);
      axios.get("http://localhost:5000/api/NVQT/listLuongNVQLK/" + page).then((res) => {
          setListNVGH(res.data);
      });
  };
  
  return (
    <div>
      <Layout>
        <Content>
          <Title level={2} classname="titlename">
            Thống kê lương Nhân Viên Quản Lý Kho
          </Title>

          <Table columns={columns} dataSource={data} pagination={false} />
        </Content>
      </Layout>

      <div className="paging" style={{ marginLeft: 500 }}>
        <Pagination
        current={current}
        pageSize={10}
        total={amount}
        onChange={onChange}
        showSizeChanger={false}
        />
      </div>
    </div>
  );
}

export default LuongNVGH;
