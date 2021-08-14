import { Layout, Card } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Column } from "@ant-design/charts";
import Chart from "./chart";
import axios from "axios";
const { Content } = Layout;

const TrangChu = () => {
  const [config, setConfig] = useState({});
  const [data, setData] = useState([
    {
      name: "Đơn hàng",
      date: "Jan.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Feb.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Mar.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Apr.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "May",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Jun.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Jul.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Aug.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Sep.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Oct.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Nov.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Dec.",
      money: 0,
    },
  ]);

  useEffect(() => {
    console.log(config);
  },[config, data]);

  return (
    <Layout>
      <Content>
        <Card
          title="Trang Chủ"
          title="Hiệu quả hoạt động theo tháng"
          extra={<Link to="/nhaban/doanhThu">Xem chi tiết</Link>}
        >
          <Chart
            config={config}
            setConfig={setConfig}
            data={data}
            setData={setData}
          />
        </Card>
      </Content>
    </Layout>
  );
};
export default TrangChu;
