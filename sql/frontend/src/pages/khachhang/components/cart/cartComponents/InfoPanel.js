/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Divider, Row, Col, Button } from "antd";
import Icon from "@ant-design/icons";
import { useState, useEffect } from "react";

const DiscountCouponSvg = () => (
  <svg width="15px" height="15px" viewBox="0 0 480 480">
    <g>
      <g>
        <rect x="144" y="264" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="144" y="296" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="144" y="328" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="144" y="232" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="144" y="200" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="144" y="168" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="144" y="136" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="32" y="136" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="432" y="136" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="432" y="328" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="32" y="328" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M472,200c4.418,0,8-3.582,8-8v-80c0-4.418-3.582-8-8-8H8c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8
			c22.091,0,40,17.909,40,40s-17.909,40-40,40c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h464c4.418,0,8-3.582,8-8v-80
			c0-4.418-3.582-8-8-8c-22.091,0-40-17.909-40-40S449.909,200,472,200z M416.524,247.956c3.532,24.61,22.867,43.944,47.476,47.476
			V360H16v-64.568c30.614-4.394,51.87-32.773,47.476-63.388C59.944,207.435,40.61,188.1,16,184.568V120h448v64.568
			C433.386,188.962,412.13,217.341,416.524,247.956z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M240,160c-17.673,0-32,14.327-32,32s14.327,32,32,32c17.673,0,32-14.327,32-32S257.673,160,240,160z M240,208
			c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S248.837,208,240,208z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M336,256c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32c17.673,0,32-14.327,32-32C368,270.327,353.673,256,336,256z
			 M336,304c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S344.837,304,336,304z"
        />
      </g>
    </g>
    <g>
      <g>
        <rect
          x="197.494"
          y="231.982"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -85.3385 273.9377)"
          width="181.017"
          height="16"
        />
      </g>
    </g>
  </svg>
);

const DiscountCouponIcon = (props) => (
  <Icon component={DiscountCouponSvg} {...props} />
);

const InfoPanel = ({ bill }) => {
  const [customer, setCustomer] = useState({});
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const kh = window.localStorage.getItem("KH");
    setCustomer(JSON.parse(kh));
  }, []);

  const createBill = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div className="address-card">
        <Card
          size="small"
          title="Giao tới"
          extra={<a href="#">Thay đổi</a>}
          style={{ width: 300 }}
        >
          <b>{customer.Ten}</b>
          <Divider type="vertical" />
          <b>{customer.Sdt}</b>
          <p>
            {customer.SoNha +
              " " +
              customer.Duong +
              ", Phường " +
              customer.Phuong +
              ", Quận " +
              customer.Quan +
              ", " +
              customer.ThanhPho}
          </p>
        </Card>
      </div>
      <div className="discount-card">
        <Card
          size="small"
          title="Tiki khuyến mãi"
          extra={<p>Chỉ chọn 1</p>}
          style={{ width: 300 }}
        >
          <a>
            <DiscountCouponIcon />
            Chọn mã khuyến mãi
          </a>
        </Card>
      </div>
      <div className="price-total">
        <Card style={{ width: 300 }}>
          <Row>
            <Col flex={2}>Tạm tính</Col>
            <Col flex={1}>
              <b>
                {bill.reduce((acc, cur) => {
                  return acc + cur.ThanhTien;
                }, 0)}
                .000 Đồng
              </b>
            </Col>
          </Row>
          <Row>
            <Col flex={2}>Giảm giá</Col>
            <Col flex={1}>
              <b>{discount}.000 Đồng</b>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col flex={2}>Tổng cộng</Col>
            <Col flex={1}>
              <b className="total">
                {bill.reduce((acc, cur) => {
                  return acc + cur.ThanhTien;
                }, 0) - discount}
                .000 Đồng
              </b>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="button-buy">
        <Button type="primary" danger block onClick={createBill}>
          Mua hàng
        </Button>
      </div>
    </div>
  );
};

export default InfoPanel;
