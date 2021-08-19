import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import {Layout, Col, Row, Divider, Button, Table, Typography, Pagination} from "antd";
import axios from 'axios';
import { useHistory } from "react-router";
const {Title} = Typography
const { Header, Footer, Content } = Layout;

const columns = [
    {
        title: "Mã Hóa Đơn",
        dataIndex: "MaHD",
        key: "MaHD"
    },
    {
        title: "Tình trạng",
        dataIndex: "TinhTrang",
        key: "TinhTrang"
    },
    {
        title: "Giá tiền",
        dataIndex: "TongTien",
        key: "TongTien"
    },
    {
        
            title: "Hành động",
            key: "action",
            render: (_, record) => (
            <Button onClick={() => onClickEdit(record)}><Link to="/gh/cthd">Xem chi tiết</Link></Button>
            ),
    },

]
const onClickEdit = (record) => {
  window.localStorage.setItem("MaHD", JSON.stringify(record.MaHD))

}

const DanhSachDH = () => {

    const [listHD, setListHD] = useState([]);
    const [current, setCurrent] = useState(1);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
      axios
        .get("http://localhost:5000/api/NVGH/getlisthd/" + JSON.parse(window.localStorage.getItem("NVGH")))
        .then((res) => {
            setListHD(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
        
        axios
          .get("http://localhost:5000/api/NVGH/getAmountHD/" + JSON.parse(window.localStorage.getItem("NVGH")))
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
      axios.get("http://localhost:5000/api/NVQT/listLuongNVGH/" + JSON.parse(window.localStorage.getItem("NVGH")) +"/" + page ).then((res) => {
        setListHD(res.data);
      });
  };
    return(
    <div>
            <Layout>
                <Content>
                    <Title level={2} classname="titlename">
                    Danh sách đơn hàng
                    </Title>
                    <Table columns={columns} dataSource={listHD}/>
                </Content>
            </Layout>
            <div className="paging" style={{ marginLeft: 500 }}>
        {/* <Pagination
        current={current}
        pageSize={10}
        total={amount}
        onChange={onChange}
        showSizeChanger={false}
        /> */}
      </div>
    </div>
    );
}
export default DanhSachDH;
