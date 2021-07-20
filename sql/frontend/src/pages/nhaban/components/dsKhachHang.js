import { Table, Tag, Space } from "antd";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const columns = [
  {
    title: "Ma Khach hang",
    dataIndex: "MaKH",
    key: "MaKH",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Ten khach hang",
    dataIndex: "TenKH",
    key: "TenKH",
  },
  {
    title: "Email khach hang",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "SDT",
    key: "Sdt",
    dataIndex: "Sdt",
  },
];

const data = [
  {
    MaKH: "1",
    TenKH: "Tran Uy",
    email: "asdas",
    Sdt: "123213",
  },
  {
    MaKH: "2",
    TenKH: "Nguyen Uy",
    email: "asdas",
    Sdt: "123213",
  },
  {
    MaKH: "3",
    TenKH: "Ho Uy",
    email: "asdas",
    Sdt: "123213",
  },
];

function DsKhachHang() {
  return (
    <div>
      <Tabs onChange={callback} type="card">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      <br/>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default DsKhachHang;
