import { Card, Avatar } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

const Discount = () => {
  const [listDiscount, setListDiscount] = useState([]);

  const { Meta } = Card;

  useEffect(() => {
    const id = JSON.parse(window.localStorage.getItem("KH")).MaKH;

    axios
      .get("http://localhost:5000/api/discount/" + id)
      .then((res) => {
        setListDiscount(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {listDiscount.map((item) => {
        return (
          <Card style={{ width: 300, marginTop: 16, marginLeft: 40 }}>
            <Meta
              avatar={
                <Avatar src="https://www.pngitem.com/pimgs/m/69-695417_discount-icon-png-png-download-discount-icon-vector.png" />
              }
              title={item.Ten}
            />
            <p style={{ fontSize: 20 }}>Code: {item.MaKM[0]}</p>
            <p>
              Giá trị <b>{item.GiaTri} 000</b> Đồng
            </p>
            <p>
              Lượt sử dụng: <b>{item.LuotSuDung}</b> lượt
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default Discount;
