import { Layout, Card } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Column } from "@ant-design/charts";
import Chart from "./chart";
import axios from "axios";
const { Content } = Layout;

const TrangChu = () => {


  return (
    <Layout>
      <Content>
        <Card
          title="Hiệu quả hoạt động theo tháng"
          extra={<Link to="/nhaban/doanhThu">Xem chi tiết</Link>}
        >
          <Chart />
        </Card>
      </Content>
    </Layout>
  );
};
export default TrangChu;
