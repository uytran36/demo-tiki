import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Thank = () => {
  return (
    <div>
      <Result
        status="success"
        title="Đặt hàng thành công!"
        subTitle="Cảm ơn bạn đã mua hàng! Kiểm tra đơn hàng tại thông tin tài khoản."
        extra={[
          <Link to="/">
            <Button type="primary" key="console">
              Tiếp tục mua sắm
            </Button>
          </Link>,
          <Link to="/profile">
            <Button key="buy">Đến trang tài khoản</Button>
          </Link>,
        ]}
      />
    </div>
  );
};

export default Thank;
