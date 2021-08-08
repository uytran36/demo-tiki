import TableItem from "./cartComponents/TableItem";
import InfoPanel from "./cartComponents/InfoPanel";
import { Row, Col } from "antd";
import "./Cart.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [bill, setBill] = useState([]);


  useEffect(() => {
    const cart = JSON.parse(window.localStorage.getItem("cart"));

    const temp = cart.map((item) => {
      return {
        key: item.MaSP,
        Ten: item.Ten,
        DonGia: item.DonGia,
        SoLuong: item.SoLuong,
        ThanhTien: item.ThanhTien,
      };
    });
    
    setBill(temp);
  }, [bill]);

  return (
    <div className="wrap-cart">
      <h3>Giỏ hàng</h3>
      <Row>
        <Col flex={10}>
          <TableItem bill={bill} setBill={setBill} />
        </Col>
        <Col flex={2}></Col>
        <Col flex="300px">
          <InfoPanel bill={bill} />
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
