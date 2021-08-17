import TableItem from "./cartComponents/TableItem";
import InfoPanel from "./cartComponents/InfoPanel";
import { Row, Col } from "antd";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="wrap-cart">
      <h3>Giỏ hàng</h3>
      <Row>
        <Col flex={10}>
          <TableItem />
        </Col>
        <Col flex={2}></Col>
        <Col flex="300px">
          <InfoPanel />
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
