/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Col, Row, Pagination } from "antd";
import Badge from "./productComponents/Badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(1);
  const [type, setType] = useState(-1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;
    const params = path.split("/")[1];
    const searchStr = path.split("/")[2];
    if (searchStr === undefined) {
      switch (params) {
        case "phone":
          axios.get("http://localhost:5000/api/loaisp/0/1").then((res) => {
            setProducts(res.data);
            setType(0);
          });
          axios.get("http://localhost:5000/api/amountloaisp/0").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "tv":
          axios.get("http://localhost:5000/api/loaisp/1/1").then((res) => {
            setProducts(res.data);
            setType(1);
          });
          axios.get("http://localhosst:5000/api/amountloaisp/1").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "accessories":
          axios.get("http://localhost:5000/api/loaisp/2/1").then((res) => {
            setProducts(res.data);
            setType(2);
          });
          axios.get("http://localhosst:5000/api/amountloaisp/2").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "laptop":
          axios.get("http://localhost:5000/api/loaisp/3/1").then((res) => {
            setProducts(res.data);
            setType(3);
          });
          axios.get("http://localhosst:5000/api/amountloaisp/3").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "camera":
          axios.get("http://localhost:5000/api/loaisp/4/1").then((res) => {
            setProducts(res.data);
            setType(4);
          });
          axios.get("http://localhosst:5000/api/amountloaisp/4").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "appliance":
          axios.get("http://localhost:5000/api/loaisp/5/1").then((res) => {
            setProducts(res.data);
            setType(5);
          });
          axios.get("http://localhosst:5000/api/amountloaisp/5").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "house":
          axios.get("http://localhost:5000/api/loaisp/6/1").then((res) => {
            setProducts(res.data);
            setType(6);
          });
          axios.get("http://localhosst:5000/api/amountloaisp/6").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "food":
          axios.get("http://localhost:5000/api/loaisp/7/1").then((res) => {
            setProducts(res.data);
            setType(7);
          });
          axios.get("http://localhosst:5000/api/amountloaisp/7").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "toys":
          axios.get("http://localhost:5000/api/loaisp/8/1").then((res) => {
            setProducts(res.data);
            setType(8);
          });
          axios.get("http://localhosst:5000/api/amountloaisp/8").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "beauty":
          axios.get("http://localhost:5000/api/loaisp/9/1").then((res) => {
            setProducts(res.data);
            setType(9);
          });
          axios.get("http://localhosst:5000/api/amountloaisp/9").then((res) => {
            setTotal(res.data[0].SL);
          });
          break;
        case "fashion":
          axios.get("http://localhost:5000/api/loaisp/10/1").then((res) => {
            setProducts(res.data);
            setType(10);
          });
          axios
            .get("http://localhosst:5000/api/amountloaisp/10")
            .then((res) => {
              setTotal(res.data[0].SL);
            });
          break;
        case "sport":
          axios.get("http://localhost:5000/api/loaisp/11/1").then((res) => {
            setProducts(res.data);
            setType(11);
          });
          axios
            .get("http://localhosst:5000/api/amountloaisp/11")
            .then((res) => {
              setTotal(res.data[0].SL);
            });
          break;
        case "bike":
          axios.get("http://localhost:5000/api/loaisp/12/1").then((res) => {
            setProducts(res.data);
            setType(12);
          });
          axios
            .get("http://localhosst:5000/api/amountloaisp/12")
            .then((res) => {
              setTotal(res.data[0].SL);
            });
          break;
        case "book":
          axios.get("http://localhost:5000/api/loaisp/13/1").then((res) => {
            setProducts(res.data);
            setType(13);
          });
          axios
            .get("http://localhosst:5000/api/amountloaisp/13")
            .then((res) => {
              setTotal(res.data[0].SL);
            });
          break;
        default:
          axios.get("http://localhost:5000/api/sanpham/1").then((res) => {
            setProducts(res.data);
            setType(-1);
          });
          axios.get("http://localhost:5000/api/amountsp").then((res) => {
            setTotal(res.data[0].SL);
          });
      }
    } else {
      setType(-2);
      axios
        .get("http://localhost:5000/api/amountspbyname/" + searchStr)
        .then((res) => {
          setTotal(res.data[0].SL);
        });
      axios
        .get("http://localhost:5000/api/find/" + searchStr + "/1")
        .then((res) => {
          setProducts(res.data);
        });
    }
  }, [window.location.pathname]);

  const onChange = (page) => {
    const path = window.location.pathname;
    const searchStr = path.split("/")[2];
    setCurrent(page);
    if (type === -1) {
      axios.get("http://localhost:5000/api/sanpham/" + page).then((res) => {
        setProducts(res.data);
      });
    } else if (type === -2) {
      axios
        .get("http://localhost:5000/api/find/" + searchStr + "/" + page)
        .then((res) => {
          setProducts(res.data);
        });
    } else {
      axios
        .get("http://localhost:5000/api/loaisp/" + type + "/" + page)
        .then((res) => {
          setProducts(res.data);
        });
    }
  };

  return (
    <div>
      <div className="site-card-wrapper">
        <Row style={{ width: 1200 }}>
          {products.map((item) => {
            return (
              <Col flex={1}>
                <Link to={`/productdetail/${item.MaSP}`}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={item.url} />}
                  >
                    <Badge product={item} />
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="paging" style={{ marginLeft: 500 }}>
        <Pagination
          current={current}
          pageSize={30}
          total={total}
          onChange={onChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Products;
