import { Typography, Row, Col } from "antd";


import React, { useState } from "react";
import { Modal, Button } from "antd";
import TaoSP from "./taoSP";

const { Title } = Typography;

const DoanhThu = (props) => {
  const [visible, setVisible] = useState(false);
  const func1 = () => {
    setVisible(false);
  }
  
  return (
    <div>
      <div>
        <Row>
          <Col>
            <Title level={2}>Danh Sách Sản Phẩm</Title>
          </Col>
          <Col>
           
              <Button
                type="primary"
                className="btnCreateDSSP"
                onClick={() => setVisible(true)}
              >
                Tạo Sản Phẩm
              </Button>
              <Modal
                title="Tạo sản phẩm"
                centered
                visible={visible}
                onOk={func1}
                onCancel={() => setVisible(false)}
                width={1000}
              >
                <TaoSP />
              </Modal>
          </Col>
        </Row>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DoanhThu;
