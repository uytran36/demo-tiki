import TableItem from "./cartComponents/TableItem";
import InfoPanel from "./cartComponents/InfoPanel";
import { Row, Col, Spin } from "antd";
import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const [bill, setBill] = useState([]);
  const [spin, setSpin] = useState(false);
  const [control, setControl] = useState(false);

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
  }, [control]);

  return (
    <div className="wrap-cart">
      <Spin spinning={spin}>
        <h3>Giỏ hàng</h3>
        <Row>
          <Col flex={10}>
            <TableItem
              bill={bill}
              setBill={setBill}
              control={control}
              setControl={setControl}
            />
          </Col>
          <Col flex={2}></Col>
          <Col flex="300px">
            <InfoPanel
              bill={bill}
              setBill={setBill}
              setSpin={setSpin}
              control={control}
              setControl={setControl}
            />
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default Cart;
