/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table, InputNumber } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const TableItem = ({ bill, setBill }) => {

  function onChange(value, record) {
    const r = {
      key: record.key,
      Ten: record.Ten,
      SoLuong: value,
      DonGia: record.DonGia,
      ThanhTien: record.DonGia * value,
    };
    let temp = bill;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].key === record.key) {
        temp[i] = r;
      }
    }
    setBill(temp);
    const cart = bill.map((item) => {
      return {
        MaSP: item.key,
        Ten: item.Ten,
        SoLuong: item.SoLuong,
        DonGia: item.DonGia,
        ThanhTien: item.ThanhTien,
      };
    });
 
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }

  const onClickDelete = (record) => {
    const temp = bill;
    const index = temp.indexOf(record);
    if (index > -1) {
      temp.splice(index, 1);
    }

    setBill(temp);

    const cart = temp.map((item) => {
      return {
        MaSP: item.key,
        Ten: item.Ten,
        SoLuong: item.SoLuong,
        DonGia: item.DonGia,
        ThanhTien: item.ThanhTien,
      };
    });

    window.localStorage.setItem("cart", JSON.stringify(cart));
  }

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "Ten",
      render: (text, record) => <Link to={`/productdetail/${record.key}`}>{text}</Link>,
    },
    {
      title: "Đơn giá",
      dataIndex: "DonGia",
      render: (text) => <div>{text}.000 Đồng</div>,
    },
    {
      title: "Số lượng",
      dataIndex: "SoLuong",
      render: (text, record) => (
        <InputNumber
          min={0}
          max={10}
          defaultValue={text}
          onChange={(value) => onChange(value, record)}
        />
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "ThanhTien",
      render: (text) => <div>{text}.000 Đồng</div>,
    },
    {
      title: "Action",
      render: (_, record) => (
        <div>
          <DeleteOutlined onClick={() => onClickDelete(record)}/>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={bill}
      />
    </div>
  );
};

export default TableItem;
