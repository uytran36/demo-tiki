import { Layout, Typography, Row, Col, Statistic, Card } from "antd";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Column } from "@ant-design/charts";
import DoanhThu from "./doanhThu";

const { Title } = Typography;
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
    {
      name: "Doanh Thu",
      date: "Jan.",
      money: 12.4,
    },
    {
      name: "Doanh Thu",
      date: "Feb.",
      money: 23.2,
    },
    {
      name: "Doanh Thu",
      date: "Mar.",
      money: 34.5,
    },
    {
      name: "Doanh Thu",
      date: "Apr.",
      money: 99.7,
    },
    {
      name: "Doanh Thu",
      date: "May",
      money: 52.6,
    },
    {
      name: "Doanh Thu",
      date: "Jun.",
      money: 35.5,
    },
    {
      name: "Doanh Thu",
      date: "Jul.",
      money: 37.4,
    },
    {
      name: "Doanh Thu",
      date: "Aug.",
      money: 42.4,
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
        <div>
          <Title level={2}>Trang Chủ</Title>
        </div>

        <Row>
          <Col span="9">
            <Row>
              <Card title="Tổng đơn hàng" style={{ width: 700 }} extra={0}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic
                      title="Chờ nhận hàng"
                      value={112893}
                      valueStyle={{ color: "#017fff" }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Chờ xác nhận"
                      value={112893}
                      valueStyle={{ color: "#017fff" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Row>
            <br />
            <Row>
              <Card title="Sản phẩm đang bán" style={{ width: 700 }} extra={0}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic
                      title="Sản phẩm đang bán"
                      value={112893}
                      valueStyle={{ color: "#017fff" }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Sản phẩm hết tồn"
                      value={112893}
                      valueStyle={{ color: "#017fff" }}
                      tooltip="Sản phẩm không còn trong kho"
                    />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic
                      title="Sản phẩm bị từ chối"
                      value={112893}
                      valueStyle={{ color: "#017fff" }}
                      tooltip="Sản phẩm không bị hủy"
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Sản phẩm bị tắt"
                      value={112893}
                      valueStyle={{ color: "#017fff" }}
                      tooltip="Sản phẩm không được trưng bày"
                    />
                  </Col>
                </Row>
              </Card>
            </Row>
          </Col>
          <Col span="14">
            <Card
              title="Hiệu quả hoạt động"
              style={{ width: 800 }}
              extra={<Link to="/nhaban/doanhThu">Xem chi tiết</Link>}
            >
              <Column {...config} />
            </Card>F
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default TrangChu;
