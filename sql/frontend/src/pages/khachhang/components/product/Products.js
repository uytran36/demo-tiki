import { Card, Col, Row, Pagination } from "antd";
import Badge from "./productComponents/Badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const { Meta } = Card;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/api/sanpham/1").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const onChange = (page) => {
    setCurrent(page);
    axios.get("http://localhost:5000/api/sanpham/" + page).then((res) => {
      setProducts(res.data);
    });
  };

  return (
    <div>
      <div className="site-card-wrapper">
        <Row style={{width:1200}}>
          {products.map((item) => {
            return (
              <Col flex={1}>
                <Link to={`/productdetail/${item.MaSP}`} >
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
          total={10000}
          onChange={onChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Products;
