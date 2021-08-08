import { Layout,  Card } from "antd";
import React, { useState, useEffect } from "react";
import { BrowserRouter as  Link } from "react-router-dom";
import { Column } from "@ant-design/charts";
import DoanhThu from "./doanhThu";

const { Content } = Layout;

const TrangChu = () => {
  var data = [
    {
      name: "Đơn hàng",
      date: "Jan.",
      money: 18.9,
    },
    {
      name: "Đơn hàng",
      date: "Feb.",
      money: 28.8,
    },
    {
      name: "Đơn hàng",
      date: "Mar.",
      money: 39.3,
    },
    {
      name: "Đơn hàng",
      date: "Apr.",
      money: 81.4,
    },
    {
      name: "Đơn hàng",
      date: "May",
      money: 47,
    },
    {
      name: "Đơn hàng",
      date: "Jun.",
      money: 20.3,
    },
    {
      name: "Đơn hàng",
      date: "Jul.",
      money: 24,
    },
    {
      name: "Đơn hàng",
      date: "Aug.",
      money: 35.6,
    },
  ];
  var config = {
    data: data,
    isGroup: true,
    xField: "date",
    yField: "money",
    seriesField: "name",
    dodgePadding: 2,
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" },
      ],
    },
  };
  return (
    <Layout>
      <Content>
        <Card title="Trang Chủ"
          title="Hiệu quả hoạt động theo tháng"
          
          extra={<Link to="/nhaban/doanhThu">Xem chi tiết</Link>}
        >
          <Column {...config} />
        </Card>
      </Content>
    </Layout>
  );
};
export default TrangChu;
