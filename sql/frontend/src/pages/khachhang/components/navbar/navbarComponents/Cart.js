import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Link to="/cart">
      <div className="cart">
        <ShoppingCartOutlined />
        Giỏ hàng
      </div>
    </Link>
  );
};

export default Cart;
