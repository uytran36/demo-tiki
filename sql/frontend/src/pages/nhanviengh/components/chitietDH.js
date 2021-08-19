import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Table, Layout, Button} from "antd";
import { useEffect, useState } from 'react';
import {
    Form,
    Input
  } from 'antd';
import axios from "axios";


const {Header, Content, Footer} = Layout;


const ChiTietDH = () => {

  
  const [listCTHD, setListCTHD] = useState([]);
  const [defStatus, setStatus] = useState([]);
  const columns = [
    {
        title: "Mã sản phẩm",
        dataIndex: "MaSP",
        key: "MaSP"
    },
    {
        title: "Số lượng",
        dataIndex: "SoLuong",
        key: "SoLuong"
    },
    {
        title: "Thành tiền",
        dataIndex: "ThanhTien",
        key: "ThanhTien"
    },
  ]

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/NVGH/cthd/" + JSON.parse(window.localStorage.getItem("MaHD")))
      .then((res) => {
        setListCTHD(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/api/NVGH/getStatusHD/" + JSON.parse(window.localStorage.getItem("MaHD")))
      .then((res) => {
        setStatus(res.data[0].TinhTrang)
      })
      .catch((err) => {
        console.log(err)
      })
    }, []);

  const onSuccess = () => {

    axios.get("http://localhost:5000/api/NVGH/updateStatus1/" + JSON.parse(window.localStorage.getItem("MaHD")), 
    {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setStatus(res.data[0].TinhTrang)
    })
    .catch((err) => {
      console.log(err);
    }, []);
  }

  const onCancel = () => {

    axios.get("http://localhost:5000/api/NVGH/updateStatus0/" + JSON.parse(window.localStorage.getItem("MaHD")), 
    {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setStatus(res.data[0].TinhTrang)
    })
    .catch((err) => {
      console.log(err);
    }, []);
  }
  
  return (
    <div>
      <Layout>
        <Content>
        <h1 style={{ textAlign: "center" }}>Danh sách chi tiết hóa đơn</h1>
          <Table columns={columns} dataSource={listCTHD} pagination={false}/>
          <label>Tình trạng: </label>
          <div>{defStatus}</div>
          <Button onClick={onSuccess}>Vận chuyển thành công</Button>
          <Button onClick={onCancel}>Hủy vận chuyển</Button>
        </Content>
      </Layout>
    </div>
  );
}

export default ChiTietDH;
