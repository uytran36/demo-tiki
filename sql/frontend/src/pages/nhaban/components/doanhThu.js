import {
  Tabs,
  Layout,
  Table,
  Tag,
  Space,
  Col,
  Row,
  Button,
  Tooltip,
} from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DatePicker } from "antd";
import moment from "moment";
import { Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./style.css";

const { Content } = Layout;

const { Title } = Typography;

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

const columns = [
  {
    title: "Mã Sản Phẩm",
    dataIndex: "MaSP",
    key: "MaSP",
    width: "10%",
    render: (text) => <Link to="/nhaban/ctsp">{text}</Link>,
  },
  {
    title: "Tên Sản Phẩm",
    dataIndex: "TenSP",
    key: "TenSP",
  },
  {
    title: "Số lượng",
    dataIndex: "SoLug",
    key: "SoLug",
  },
  {
    title: "Tổng tiền",
    key: "TongTien",
    dataIndex: "TongTien",
  },
];

const data = [
  {
    MaSP: "1",
    TenSP: "John Brown",
    SoLug: 32,
    TongTien: "1000000",
  },
  {
    MaSP: "2",
    TenSP: "Jim Green",
    SoLug: 42,
    TongTien: "1000000",
  },
  {
    MaSP: "3",
    TenSP: "Joe Black",
    SoLug: 32,
    TongTien: "1000000",
  },
];
function DoanhThu() {
  return (
    <Layout>
      <Content>
        <div>
          <Row>
            <Col span={17} classname="titlename">
              <Title level={2}>Doanh Thu Theo Ngày</Title>
            </Col>
            <Col span={7}>
              <Row style={{ margin: 5 }}>
                <Col>
                  <DatePicker
                    defaultValue={moment("2015/01/01", dateFormat)}
                    format={dateFormat}
                  />
                </Col>
                <Col className="btnsearchDT">
                  <Tooltip title="search">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<SearchOutlined />}
                    />
                  </Tooltip>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </Content>
    </Layout>
  );
}
export default DoanhThu;
