import "./style.css";
import React, { useState } from "react";
import {
  Layout,
  Card,
  Input,
  Col,
  Row,
  Button,
  Typography,
} from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const ThongTinHD = () => {
  return (
    <Layout>
      <Content>
        <div className="contentTTNB">
          <div className="site-card-border-less-wrapper">
              <div> 
                  <Title level={2}>Thông Tin Nhà Bán</Title>
              </div>
            <Card
              bordered={false}
            >
              <Input.Group size="medium">
                <Row>
                  <Col span={5}>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Mã Nhà Bán </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Tên Nhà Bán </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">E-mail </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Số Điện Thoại </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Mật khẩu </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Số nhà </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Đường </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Phường </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Quận </Text>
                      <br />
                    </div>
                    <div className="bordertextTTNB">
                      <Text className="textTTNB">Thành phố </Text>
                      <br />
                    </div>
                  </Col>
                  <Col span={19}>
                    <Input defaultValue="26888888" />
                    <Input defaultValue="Nguyễn Trọng Khang" />
                    <Input  type="email"  defaultValue="abc@gmail.com" />
                    <Input defaultValue="0571665464" />
                    <Input.Password placeholder="input password" defaultValue="fsdhfkshfsf" />
                    <Input defaultValue="149 " />
                    <Input defaultValue="Nguyễn Trọng Tuyển" />
                    <Input defaultValue=" P.8M" />
                    <Input defaultValue=" Quận Phú Nhuận" />
                    <Input defaultValue=" TP.HCM" />
                  </Col>
                </Row>
              </Input.Group>
            </Card>
          </div>
          <div className="btnSaveTTNB">
            <Button type="primary" className="btnSaveTTHD">
              Lưu
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default ThongTinHD;
