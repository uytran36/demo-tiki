import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Modal,
  Button,
  Input,
  Divider,
  Card,
  Avatar,
  notification,
} from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
import { FaStar } from "react-icons/fa";
import "./Bill.css";

function ReviewModal({ MaSP, MaKH }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [textRating, setTextRating] = useState("");

  const { TextArea } = Input;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    axios
      .post(
        "http://localhost:5000/api/rating/" + MaKH + "/" + MaSP,
        JSON.stringify({
          DiemDanhGia: rating,
          MoTa: textRating,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        notification.open({
          message: "Thông báo",
          description: "Đánh giá thành công thành công!",
          icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
        });
      })
      .catch((err) => console.log(err));

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e) => {
    setTextRating(e.target.value);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Nhận xét
      </Button>
      <Modal
        title="Đánh giá"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          {[...Array(5)].map((star, i) => {
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
                  size={50}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <TextArea
          rows={4}
          placeholder="Vì sao bạn thích sản phẩm"
          onChange={onChange}
          maxLength={255}
          showCount
        />
      </Modal>
    </div>
  );
}

function CTHDModal({ MaHD, isOpen, setIsOpen }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cthd/" + MaHD)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [MaHD]);

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const columns = [
    {
      title: "Mã hóa đơn",
      dataIndex: "MaHD",
      key: "MaHD",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "TenSP",
      key: "TenSP",
      render: (text, record) => {
        return <Link to={"/productdetail/" + record.MaSP}>{text}</Link>;
      },
    },
    {
      title: "Số lượng",
      dataIndex: "SoLuong",
      key: "SoLuong",
    },
    {
      title: "Thành tiền",
      dataIndex: "ThanhTien",
      key: "ThanhTien",
      render: (text) => <div>{text}.000 Đồng</div>,
    },
  ];

  return (
    <div>
      <Modal
        title="Đánh giá"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Table columns={columns} dataSource={products} pagination={false} />
      </Modal>
    </div>
  );
}

const Bill = () => {
  const [maHD, setMaHD] = useState(-1);
  const [hoaDon, setHoaDon] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const { Meta } = Card;

  useEffect(() => {
    const id = JSON.parse(window.localStorage.getItem("KH")).MaKH;
    axios
      .get("http://localhost:5000/api/hdkh/" + id)
      .then((res) => {
        setHoaDon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/api/spkh/" + id)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickHD = (text) => {
    setIsOpen(true);
    setMaHD(text);
  };

  const columns = [
    {
      title: "Mã hóa đơn",
      dataIndex: "MaHD",
      key: "MaHD",
      render: (text) => {
        return <Button onClick={() => onClickHD(text)}>{text}</Button>;
      },
    },
    {
      title: "Ngày mua",
      dataIndex: "NgayLap",
      key: "NgayLap",
      render: (text) => {
        return <div>{moment(text).format("DD/MM/YYYY")}</div>;
      },
    },
    {
      title: "Tổng tiền",
      dataIndex: "TongTien",
      key: "TongTien",
      render: (text) => <div>{text}.000 Đồng</div>,
    },
    {
      title: "Phí vận chuyển",
      dataIndex: "PhiVC",
      key: "PhiVC",
      render: (text) => <div>{text}.000 Đồng</div>,
    },
    {
      title: "Thành tiền",
      dataIndex: "ThanhTienHD",
      key: "ThanhTienHD",
      render: (text) => <div>{text}.000 Đồng</div>,
    },
    {
      title: "Trạng thái đơn hàng",
      key: "TinhTrang",
      dataIndex: "TinhTrang",
    },
  ];

  const MaKH = JSON.parse(window.localStorage.getItem("KH")).MaKH;

  return (
    <div>
      <Table columns={columns} dataSource={hoaDon} />
      <CTHDModal MaHD={maHD} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Divider />
      <h2>Sản phẩm bạn đã mua</h2>
      {products.length !== 0 ? (
        products.map((item) => {
          return (
            <Card style={{ width: 300, marginTop: 16, marginLeft: 40 }}>
              <Meta avatar={<Avatar src={item.url} />} title={item.TenSP} />
              <p>
                Giá: <b>{item.ThanhTienSP} 000</b> Đồng
              </p>
              <ReviewModal MaSP={item.MaSP} MaKH={MaKH} />
            </Card>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Bill;
