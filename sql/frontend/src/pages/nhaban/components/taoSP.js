import "./style.css";
import React, { useState } from "react";
import { Layout, Card, Input, Col, Row, Button, Typography } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};
const TaoSP = () => {
  return (
    <Layout>
      <Content>
        <div className="contentTTNB">
          <div className="site-card-border-less-wrapper">
            <div>
              <Title level={2}>Tạo Sản Phẩm</Title>
            </div>
            <Card bordered={false}>
              <Input.Group size="medium">
                <Row>
                  <Col span={5}>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Mã Sản Phẩm </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Tên Sản Phẩm </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Số lượng tồn </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Loại sản phẩm</Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Giá giảm </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Giá bán </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Tổng tiền </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Thành tiền </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Hoa hồng </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Mô tả </Text>
                      <br />
                    </div>
                  </Col>
                  <Col span={19}>
                    <Input defaultValue="26888888" />
                    <Input defaultValue="ABCDDD" />
                    <Input defaultValue="1" />
                    <Input defaultValue="abc" />
                    <Input defaultValue="0571665464" />
                    <Input defaultValue="149 " />
                    <Input defaultValue="0571665464" />
                    <Input defaultValue=" 0571665464" />
                    <Input defaultValue=" 232" />
                    <TextArea showCount maxLength={100} onChange={onChange} />
                  </Col>
                </Row>
              </Input.Group>
            </Card>
          </div>
          <div >
            <Button type="primary" className="btnCreTaoSP">
              Tạo
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default TaoSP;
