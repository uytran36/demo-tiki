import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import {Layout, Col, Row, Divider, Button, Table, Typography} from "antd";
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
        dataIndex: "GiaTien",
        key: "GiaTien"
    },
    // {
        
    //         title: "Hành động",
    //         key: "action",
    //         render: (_, record) => (
    //         <Button onClick={() => onClickEdit(record)}></Button>
    //         ),
    // },

]

const DanhSachDH = () => {

    const [listHD, setListHD] = useState([]);
    const [current, setCurrent] = useState(1);
    const [amount, setAmount] = useState(0);
    const data = listHD;
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/NVGH/listHD/" )
        .then((res) => {
            setListHD(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

        // axios
        //   .get("http://localhost:5000/api/NVQT/AmountLSBDL_NVGH")
        //   .then((res) => {
        //     console.log(res)
        //     setAmount(res.data[0].SL);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   })

    }, []);
  const onChange = (page) => {
      setCurrent(page);
      axios.get("http://localhost:5000/api/NVQT/listLuongNVGH/" + page).then((res) => {
        setListHD(res.data);
      });
  };
    return(
    <div>
        <div>
            <Layout>
                <Content>
                    <Title level={2} classname="titlename">
                    Danh sách đơn hàng
                    </Title>
                    <Table columns={columns} pagination={false} />
                </Content>
            </Layout>
        </div>
    </div>
    );
}
export default DanhSachDH;
