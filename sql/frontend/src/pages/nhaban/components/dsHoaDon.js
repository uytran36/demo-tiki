import { Table } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tabs, Layout } from "antd";
import { Typography } from "antd";
import "./style.css";
import ThongTinHD from "./thongTinHD";
const { Title } = Typography;
const { TabPane } = Tabs;
const { Content } = Layout;
function callback(key) {
  console.log(key);
}

const columns = [
  {
    title: "Mã Đơn Hàng",
    dataIndex: "MaHD",
    key: "MaHD",
    render: (text) => {
      return (
          <Layout>
            <Content>
            <Link to="/thongTinHD">{text}</Link>
            </Content>
          </Layout>
      );
    },
  },
  {
    title: "Tình trạng",
    dataIndex: "TinhTrang",
    key: "TinhTrang",
  },
  {
    title: "Ngày lập",
    dataIndex: "NgayLap",
    key: "NgayLap",
  },
  {
    title: "Ngày giao",
    key: "NgayGiao",
    dataIndex: "NgayGiao",
  },
  {
    title: "Phí vận chuyển",
    key: "PhiVC",
    dataIndex: "PhiVC",
  },
  {
    title: "Tiki xu",
    key: "TikiXu",
    dataIndex: "TikiXu",
  },
  {
    title: "Tổng tiền",
    key: "TongTien",
    dataIndex: "TongTien",
  },
  {
    title: "Thành Tiền",
    key: "ThanhTien",
    dataIndex: "ThanhTien",
  },
  {
    title: "Ghi chú",
    key: "GhiChu",
    dataIndex: "GhiChu",
  },
];

const data = [
  {
    MaHD: "1",
    TinhTrang: "Đang giao",
    NgayLap: "14/07/2021",
    NgayGiao: "14/07/2021",
    PhiVC: "200000",
    TikiXu: "2000",
    TongTien: "100000",
    ThanhTien: "980000",
    GhiChu: "bdhfksdfhksdgioglagjeilgjaeoighaerlghae;",
  },
  {
    MaHD: "2",
    TinhTrang: "Đang giao",
    NgayLap: "14/07/2021",
    NgayGiao: "14/07/2021",
    PhiVC: "200000",
    TikiXu: "2000",
    TongTien: "100000",
    ThanhTien: "980000",
    GhiChu: "bdhfksdfhksd",
  },
  {
    MaHD: "3",
    TinhTrang: "Đang giao",
    NgayLap: "14/07/2021",
    NgayGiao: "14/07/2021",
    PhiVC: "200000",
    TikiXu: "2000",
    TongTien: "100000",
    ThanhTien: "980000",
    GhiChu: "bdhfksdfhksd",
  },
  {
    MaHD: "4",
    TinhTrang: "Đang giao",
    NgayLap: "14/07/2021",
    NgayGiao: "14/07/2021",
    PhiVC: "200000",
    TikiXu: "2000",
    TongTien: "100000",
    ThanhTien: "980000",
    GhiChu: "bdhfksdfhksd",
  },
];

function DsHoaDon() {
  return (
    <div>
      <Layout>
        <Content>
          <Title level={2} classname="titlename">
            Danh sách Hóa Đơn
          </Title>

          <Tabs onChange={callback} type="card">
            <TabPane tab="Tất cả" key="1">
              <Table columns={columns} dataSource={data} />
            </TabPane>
            <TabPane tab="Chờ xác nhận" key="2">
              <Table columns={columns} dataSource={data} />
            </TabPane>
            <TabPane tab="Đang xử lý" key="3">
              <Table columns={columns} dataSource={data} />
            </TabPane>
            <TabPane tab="Đang vận chuyển" key="4">
              <Table columns={columns} dataSource={data} />
            </TabPane>
            <TabPane tab="Đã giao hàng" key="5">
              <Table columns={columns} dataSource={data} />
            </TabPane>
            <TabPane tab="Đã hủy" key="6">
              <Table columns={columns} dataSource={data} />
            </TabPane>
          </Tabs>
          <br />
        </Content>
      </Layout>
    </div>
  );
}

export default DsHoaDon;
