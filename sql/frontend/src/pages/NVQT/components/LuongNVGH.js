import { Table } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import { Typography } from "antd";
import "./style.css";
const { Title } = Typography;
const { Content } = Layout;

const columns = [
  {
    title: "Mã Nhân Viên",
    dataIndex: "MaNV",
    key: "MaNV",
    render: (text) => {
      return (
          <Link to="/ChiTietNhanVien">{text}</Link>
      );
    },
  },
  {
    title: "Tên nhân viên",
    key: "TenNV",
    dataIndex: "TenNV",
  },
  {
    title: "Ngày biến động",
    dataIndex: "NgayBD",
    key: "NgayBD",
  },
  {
    title: "Lương hiện tại",
    key: "LuongHT",
    dataIndex: "LuongHT",
  },
  {
    title: "Ghi chú",
    key: "GhiChu",
    dataIndex: "GhiChu",
  },
];

const data = [
  {
    MaNV: "NV000000001",
    TenNV: "Lương Long Hà",
    NgayBD: "14/07/2021",
    LuongHT: "20000000",
    GhiChu: "Self Destruc activated",
  },
  {
    MaNV: "NV000000002",
    TenNV: "Nguyễn Trọng Khang",
    NgayBD: "09/01/2021",
    LuongHT: "30000000",
    GhiChu: "It's High Noonnnnn",
  },
  {
    MaNV: "NV000000003",
    TenNV: "Trần Khánh Gia Uy",
    NgayBD: "23/08/2020",
    LuongHT: "40000000",
    GhiChu: "An anomaly!",
  },
  {
    MaNV: "NV000000004",
    TenNV: "Đỗ Minh Khoa",
    NgayBD: "02/09/2021",
    LuongHT: "40000000",
    GhiChu: "Beep boop beep boop",
  },
];

function LuongNVGH() {
  return (
    <div>
      <Layout>
        <Content>
          <Title level={2} classname="titlename">
            Thống kê lương Nhân Viên Giao Hàng
          </Title>

          <Table columns={columns} dataSource={data} />
        </Content>
      </Layout>
    </div>
  );
}

export default LuongNVGH;
