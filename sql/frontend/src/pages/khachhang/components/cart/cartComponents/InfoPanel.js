/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Card,
  Divider,
  Row,
  Col,
  Button,
  InputNumber,
  Spin,
  Modal,
  Input,
  notification
} from "antd";
import Icon, { StopTwoTone } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

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

function DiscountInput({ setDiscount, isOpen, setIsOpen, MaKH }) {
  const [code, setCode] = useState("");

  const handleOk = () => {
    axios
      .get("http://localhost:5000/api/khuyenmai/" + MaKH + "/" + code)
      .then((res) => {
        if (res.data.length !== 0) {
          setDiscount(code);
          setIsOpen(false);
        } else {
          notification.open({
            message: "Th??ng b??o",
            description: "M?? kh??ng t???n t???i ho???c h???t h???n s??? d???ng",
            icon: <StopTwoTone twoToneColor="#FF0000" />,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
   
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div>
      <Modal
        title="Khuy???n m??i"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input placeholder="Nh???p m?? khuy???n m??i" onChange={onChange} />
      </Modal>
    </div>
  );
}

const InfoPanel = ({ bill, setBill, setSpin, control, setControl }) => {
  const [customer, setCustomer] = useState(
    JSON.parse(window.localStorage.getItem("KH"))
  );
  const [discount, setDiscount] = useState(-1);
  const [discountVal, setDiscountVal] = useState(0);
  const [tikiXu, setTikiXu] = useState(0);
  const [amountCTHD, setAmountCTHD] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const kh = window.localStorage.getItem("KH");
    setCustomer(JSON.parse(kh));
    axios.get("http://localhost:5000/api/amountcthd").then((res) => {
      if (res.data.length !== 0) {
        setAmountCTHD(res.data[0].Amount);
      }
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/khuyenmai/" + customer.MaKH + "/" + discount)
      .then((res) => {
        if (res.data.length !== 0) {
          console.log(res)
          setDiscountVal(res.data[0].GiaTri);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [discount]);

  const createBill = () => {
    setSpin(true);
    let tt = 0;
    for (let item of bill) {
      tt += item.ThanhTien;
    }

    const hd = {
      MaKH: customer.MaKH,
      MaNVGH: 1,
      MaKMai: discount,
      NgayLap: moment().format("MM-DD-YYYY"),
      TongTien: tt,
      TinhTrang: "Ch??a b??n giao",
      SLTikiXu: tikiXu,
      PhiVC: 15,
      ThanhTienHD: tt - tikiXu/1000 - discount + 15,
      NgayGiaoTC: null,
      GhiChu: "",
    };

    axios
      .post("http://localhost:5000/api/createhd", JSON.stringify(hd), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const cthd = bill.map((item, index) => {
          return {
            MaHD: res.data[0].MaHD,
            MaSP: item.key,
            SoLuong: item.SoLuong,
            ThanhTien: item.ThanhTien,
            MaCTHD: amountCTHD + index,
          };
        });

        for (let item of cthd) {
          axios
            .post(
              "http://localhost:5000/api/createcthd",
              JSON.stringify(item),
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              const xu = customer.TikiXu;
              const temp = { ...customer, TikiXu: xu - tikiXu };
              window.localStorage.setItem("KH", JSON.stringify(temp))

              setSpin(false);
              setBill([]);
              setControl(!control);
              window.localStorage.setItem("cart", JSON.stringify([]));
              history.push("/thankyou");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeTikiXu = (value) => {
    console.log("tiki xu:" + value);
    setTikiXu(value);
  };

  const onClickDiscount = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Spin size="large" spinning={amountCTHD !== 0 ? false : true}>
        <div className="address-card">
          <Card
            size="small"
            title="Giao t???i"
            extra={<a href="#">Thay ?????i</a>}
            style={{ width: 300 }}
          >
            <b>{customer.Ten}</b>
            <Divider type="vertical" />
            <b>{customer.Sdt}</b>
            <p>
              {customer.SoNha +
                " " +
                customer.Duong +
                ", Ph?????ng " +
                customer.Phuong +
                ", Qu???n " +
                customer.Quan +
                ", " +
                customer.ThanhPho}
            </p>
          </Card>
        </div>
        <div className="discount-card">
          <Card
            size="small"
            title="Tiki khuy???n m??i"
            extra={<p>Ch??? ch???n 1</p>}
            style={{ width: 300 }}
          >
            <Button onClick={onClickDiscount}>
              <DiscountCouponIcon />
              Ch???n m?? khuy???n m??i
            </Button>
          </Card>
        </div>
        <div className="tikixu-card">
          <Card
            size="small"
            title="Tiki xu"
            extra={<p>B???n c?? {customer.TikiXu} Tiki xu</p>}
            style={{ width: 300 }}
          >
            <InputNumber
              min={0}
              max={customer.TikiXu}
              defaultValue={0}
              step={1000}
              onChange={onChangeTikiXu}
            />
          </Card>
        </div>

        <div className="price-total">
          <Card style={{ width: 300 }}>
            <Row>
              <Col flex={2}>T???m t??nh</Col>
              <Col flex={1}>
                <b>
                  {bill.reduce((acc, cur) => {
                    return acc + cur.ThanhTien;
                  }, 0)}
                  .000 ?????ng
                </b>
              </Col>
            </Row>
            <Row>
              <Col flex={2}>Gi???m gi??</Col>
              <Col flex={1}>
                <b>{discountVal}.000 ?????ng</b>
              </Col>
            </Row>
            <Row>
              <Col flex={2}>Ph?? v???n chuy???n</Col>
              <Col flex={1}>
                <b>15.000 ?????ng</b>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col flex={2}>T???ng c???ng</Col>
              <Col flex={1}>
                <b className="total">
                  {bill.reduce((acc, cur) => {
                    return acc + cur.ThanhTien;
                  }, 0) -
                    (tikiXu/1000) -
                    discountVal +
                    15}
                  .000 ?????ng
                </b>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="button-buy">
          <Button type="primary" danger block onClick={() => createBill()}>
            Mua h??ng
          </Button>
        </div>
        <DiscountInput
          setDiscount={setDiscount}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          MaKH={customer.MaKH}
        />
      </Spin>
    </div>
  );
};

export default InfoPanel;
