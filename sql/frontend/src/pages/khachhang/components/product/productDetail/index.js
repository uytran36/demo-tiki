import {
  Image,
  Row,
  Col,
  Button,
  InputNumber,
  Card,
  Tag,
  Avatar,
  notification,
} from "antd";
import Icon from "@ant-design/icons";
import { useState, useEffect } from "react";
import axios from "axios";

const StarSvg = () => (
  <svg height="15px" viewBox="0 -10 511.98685 511" width="15px">
    <path
      d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
      fill="#ffc107"
    />
  </svg>
);

const StarIcon = (props) => <Icon component={StarSvg} {...props} />;

const description = (
  <div>
    4.2/5 <StarIcon />
  </div>
);

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [store, setStore] = useState({});
  const [reviews, setReviews] = useState([]);
  const [pointReview, setPointReview] = useState(0);
  const [buyAmount, setBuyAmount] = useState(1);

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/")[2];
    axios
      .get("http://localhost:5000/api/ctsp/" + id)
      .then((res) => {
        if (res.data.lenght !== 0) {
          setProduct(res.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/api/nbsp/" + id)
      .then((res) => {
        if (res.data.lenght !== 0) {
          setStore(res.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/api/review/" + id)
      .then((res) => {
        if (res.data.length !== 0) {
          setReviews(res.data);

          let count = 0;
          let point = 0;
          for (let item of res.data) {
            point += item.DiemDanhGia;
            count++;
          }
          let tot = point / count;
          setPointReview(tot.toFixed(1));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { Meta } = Card;
  function onChange(value) {
    setBuyAmount(value);
  }

  const onClickBuy = () => {
    let temp = window.localStorage.getItem("cart");
    let cart;
    if (temp.length !== 0) {
      cart = JSON.parse(temp);
    } else {
      cart = [];
    }

    notification.open({
      message: "Thông báo",
      description: `Đã thêm sản phẩm ${product.TenSP} vào giỏ hàng của bạn`,
    });

    cart.push({
      MaSP: product.MaSP,
      Ten: product.TenSP,
      SoLuong: buyAmount,
      DonGia: product.ThanhTienSP,
      ThanhTien: buyAmount * product.ThanhTienSP,
    });
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div style={{ marginTop: 50 }}>
      <Row>
        <Col span={24} offset={3}>
          <Row>
            <Col flex="520px">
              <Image width={500} src={product.url} />
            </Col>
            <Col flex="auto">
              <Row>
                <Col flex="auto">
                  <div className="product-content">
                    <p style={{ fontSize: 30 }}>{product.TenSP}</p>
                    <div style={{ paddingBottom: 150 }}>
                      <div style={{ fontSize: 25 }}>Mô tả</div>
                      <div style={{ fontSize: 20 }}>{product.MoTaSP}</div>
                    </div>
                    <b style={{ fontSize: 30 }}>
                      {product.ThanhTienSP}.000 Đồng
                    </b>
                    <div>
                      <Tag color="#ff424e">
                        -
                        {Math.ceil(
                          (product.GiaGiamSP / product.GiaBanSP) * 100
                        )}
                        %
                      </Tag>
                    </div>
                    <div style={{ marginTop: 20 }}></div>
                    <div style={{ fontSize: 18 }}>Số lượng</div>
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={1}
                      onChange={onChange}
                    />
                    <div style={{ marginTop: 10 }}></div>
                    <Button
                      type="primary"
                      danger
                      size="large"
                      onClick={onClickBuy}
                    >
                      Chọn mua
                    </Button>
                  </div>
                </Col>
                <Col flex="auto">
                  <div className="product-owner">
                    <Card style={{ width: 300 }}>
                      <Meta
                        avatar={
                          <Avatar src="https://salt.tikicdn.com/ts/seller/4b/54/1a/f385a79a716cb3505f152e7af8c769aa.png" />
                        }
                        title={store.TenNhaBan}
                        description={description}
                      />
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24} offset={3}>
          <div className="comment" style={{ marginTop: 50 }}>
            <div style={{ fontSize: 25 }}>
              Đánh giá - Nhận xét từ khách hàng
            </div>
            <div style={{ fontSize: 20 }}>
              <b>{pointReview}/5</b>
              <StarIcon />
            </div>
            {reviews.map((item) => {
              return (
                <div style={{ marginTop: 20 }}>
                  <Card title={item.Ten} style={{ width: 1500 }}>
                    <b>
                      {item.DiemDanhGia}/5
                      <StarIcon />
                    </b>
                    <div>{item.MoTa}</div>
                  </Card>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
