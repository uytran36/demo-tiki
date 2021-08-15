import { useState, useEffect, Button, Input, Form, InputNumber } from "react";
import { Table, Modal } from "antd";
import DetailBill from "./DetailBill";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const ReviewModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const { TextArea } = Input;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Đánh giá"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          {[
            ...Array(5).map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    className="star"
                    color={
                      ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    size={100}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                  <div>Rating: {rating}</div>
                </label>
              );
            }),
          ]}
        </div>
        <TextArea rows={4} placeholder="Vì sao bạn thích sản phẩm" />
      </Modal>
    </>
  );
};

const Bill = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([{ a: "a" }]);
  }, []);

  const columns = [
    {
      title: "Mã hóa đơn",
      dataIndex: "MaHD",
      key: "MaHD",
    },
    {
      title: "Ngày mua",
      dataIndex: "NgayLap",
      key: "NgayLap",
    },
    {
      title: "Tổng tiền",
      dataIndex: "ThanhTien",
      key: "ThanhTien",
    },
    {
      title: "Trạng thái đơn hàng",
      key: "TrangThai",
      dataIndex: "TrangThai",
    },
  ];

  const data = [];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <ReviewModal />
    </div>
  );
};

export default Bill;
