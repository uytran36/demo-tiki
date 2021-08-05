/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table, InputNumber } from "antd";
import { DeleteOutlined } from "@ant-design/icons";


function onChange(value) {
  console.log("changed", value);
}

const columns = [
  {
    title: "Tên sản phẩm",
    dataIndex: "nameItem",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Đơn giá",
    dataIndex: "price",
  },
  {
    title: "Số lượng",
    dataIndex: "amount",
    render: (text) => (
      <InputNumber min={1} max={10} defaultValue={text} onChange={onChange} />
    ),
  },
  {
    title: "Thành tiền",
    dataIndex: "total",
  },
  {
    title: () => <DeleteOutlined />,
    render: () => (
      <div>
        <DeleteOutlined />
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    nameItem: "Chuột logitech",
    price: 50000,
    amount: 1,
    total: 200000,
  },
  {
    key: "2",
    nameItem: "Chuột logitech",
    price: 50000,
    amount: 2,
    total: 200000,
  },
  {
    key: "3",
    nameItem: "Chuột logitech",
    price: 50000,
    amount: 3,
    total: 200000,
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const TableItem = () => {
  return (
    <div>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default TableItem;
