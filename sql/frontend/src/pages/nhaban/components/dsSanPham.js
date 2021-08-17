import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Typography,
  Row,
  Col,
  Table,
  Space,
  Select,
} from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const { Option } = Select;
const { Title } = Typography;

function EditModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(props.visible);
  const [form] = Form.useForm();
  const [maLoai, setMaLoai] = useState(-1);

  const handleOk = () => {
    let TenSP = form.getFieldValue("TenSP");
    let MoTaSP = form.getFieldValue("MoTaSP");
    let SLTonSP = form.getFieldValue("SLTonSP");
    let GiaBanSP = form.getFieldValue("GiaBanSP");
    let GiaGiamSP = form.getFieldValue("GiaGiamSP");
    let ThanhTienSP = form.getFieldValue("ThanhTienSP");
    let MaLoaiSP = form.getFieldValue("MaLoaiSP");
    let url = form.getFieldValue("url");
    let dataW = JSON.parse(window.localStorage.getItem("auth"));

    const info = {
      TenSP: TenSP === undefined ? props.product.TenSP : TenSP,
      MoTaSP: MoTaSP === undefined ? props.product.MoTaSP : MoTaSP,
      SLTonSP: SLTonSP === undefined ? props.product.SLTonSP : SLTonSP,
      GiaBanSP: GiaBanSP === undefined ? props.product.GiaBanSP : GiaBanSP,
      GiaGiamSP: GiaGiamSP === undefined ? props.product.GiaGiamSP : GiaGiamSP,
      ThanhTienSP:
        ThanhTienSP === undefined ? props.product.ThanhTienSP : ThanhTienSP,
      HoaHong: 0.05,
      MaLoaiSP: MaLoaiSP === undefined ? props.product.MaLoaiSP : maLoai,
      MaNhaBan: dataW.MaNhaBan,
      url: url === undefined ? props.product.url : url,
    };

    axios
      .put(
        "http://localhost:5000/api/nhaban/sanpham/" + props.product.MaSP,
        JSON.stringify(info),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setIsModalVisible(false);
        props.setVisibleFalse();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    props.setVisibleFalse();
  };

  function onChangeSelect(value) {
    setMaLoai(value);
  }
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...layout} form={form} name="nest-messages">
          <Form.Item name="TenSP" label="Tên sản phẩm">
            <Input defaultValue={props.product.TenSP} />
          </Form.Item>
          <Form.Item name="MoTaSP" label="Mô tả ">
            <Input defaultValue={props.product.MoTaSP} />
          </Form.Item>
          <Form.Item name="SLTonSP" label="Số lượng tồn">
            <Input defaultValue={props.product.SLTonSP} />
          </Form.Item>
          <Form.Item name="GiaBanSP" label="Giá bán">
            <Input defaultValue={props.product.GiaBanSP} />
          </Form.Item>
          <Form.Item name="GiaGiamSP" label="Giá giảm">
            <Input defaultValue={props.product.GiaGiamSP} />
          </Form.Item>
          <Form.Item name="ThanhTienSP" label="Thành tiền">
            <Input defaultValue={props.product.ThanhTienSP} />
          </Form.Item>
          <Form.Item name="MaLoaiSP" label="Loại sản phẩm">
            <Select
              placeholder="chọn loại sản phẩm"
              defaultValue={props.product.MaLoaiSP}
              onChange={onChangeSelect}
            >
              <Option value={0}>Điện thoại - Máy tính bảng</Option>
              <Option value={1}>Điện tử - Điện lạnh</Option>
              <Option value={2}>Phụ kiện - Thiết bị số</Option>
              <Option value={3}>Laptop- Thiết bị IT</Option>
              <Option value={4}>Máy ảnh - Thiết bị quay phim</Option>

              <Option value={5}>Điện gia dùng</Option>

              <Option value={6}>Nhà cửa đời sống</Option>
              <Option value={7}>Hàng tiêu dùng - Thực phẩm</Option>
              <Option value={8}>Đồ chơi - Mẹ và Bé</Option>
              <Option value={9}>Làm đẹp - Sức khỏe</Option>
              <Option value={10}>Thời trang - phụ kiện</Option>
              <Option value={11}>Thể thao - dã ngoại</Option>
              <Option value={12}>Xe máy, ô tô, xe đạp</Option>
              <Option value={13}>Sách - VPP và Quà tặng</Option>
            </Select>
          </Form.Item>
          <Form.Item name="url" label="Đường dẫn hình ảnh">
            <Input defaultValue={props.product.url} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

function AddModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(props.visible);
  const [form] = Form.useForm();
  const [amount, setAmount] = useState(0);
  const [maLoai, setMaLoai] = useState(-1);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/nhaban/slsp")
      .then((response) => {
        if (response.data.length > 0) {
          setAmount(response.data[0].slSP);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOk = () => {
    let TenSP = form.getFieldValue("TenSP");
    let MoTaSP = form.getFieldValue("MoTaSP");
    let SLTonSP = form.getFieldValue("SLTonSP");
    let GiaBanSP = form.getFieldValue("GiaBanSP");
    let GiaGiamSP = form.getFieldValue("GiaGiamSP");
    let ThanhTienSP = form.getFieldValue("ThanhTienSP");
    // let MaLoaiSP = form.getFieldValue("MaLoaiSP");
    let url = form.getFieldValue("url");
    let dataW = JSON.parse(window.localStorage.getItem("auth"));

    const info = {
      MaSP: amount, //lay amount tu api
      TenSP: TenSP,
      MoTaSP: MoTaSP,
      SLTonSP: SLTonSP,
      GiaBanSP: GiaBanSP,
      GiaGiamSP: GiaGiamSP,
      ThanhTienSP: ThanhTienSP,
      HoaHong: 0.05,
      MaLoaiSP: maLoai,
      MaNhaBan: dataW.MaNhaBan,
      url: url,
    };

    console.log(info);

    axios
      .post("http://localhost:5000/api/nhaban/sanpham", JSON.stringify(info), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setIsModalVisible(false);
        props.setVisibleFalse();
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("http://localhost:5000/api/nhaban/splist", JSON.stringify(info), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        props.setListProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    props.setVisibleFalse();
  };

  function onChangeSelect(value) {
    setMaLoai(value);
  }
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...layout} form={form} name="nest-messages">
          <Form.Item name="TenSP" label="Tên sản phẩm">
            <Input />
          </Form.Item>
          <Form.Item name="MoTaSP" label="Mô tả ">
            <Input />
          </Form.Item>
          <Form.Item name="SLTonSP" label="Số lượng tồn">
            <Input />
          </Form.Item>
          <Form.Item name="GiaBanSP" label="Giá bán">
            <Input />
          </Form.Item>
          <Form.Item name="GiaGiamSP" label="Giá giảm">
            <Input />
          </Form.Item>
          <Form.Item name="ThanhTienSP" label="Thành tiền">
            <Input />
          </Form.Item>
          <Form.Item name="MaLoaiSP" label="Loại sản phẩm">
            <Select placeholder="chọn loại sản phẩm" onChange={onChangeSelect}>
              <Option value={0}>Điện thoại - Máy tính bảng</Option>
              <Option value={1}>Điện tử - Điện lạnh</Option>
              <Option value={2}>Phụ kiện - Thiết bị số</Option>
              <Option value={3}>Laptop- Thiết bị IT</Option>
              <Option value={4}>Máy ảnh - Thiết bị quay phim</Option>

              <Option value={5}>Điện gia dùng</Option>

              <Option value={6}>Nhà cửa đời sống</Option>
              <Option value={7}>Hàng tiêu dùng - Thực phẩm</Option>
              <Option value={8}>Đồ chơi - Mẹ và Bé</Option>
              <Option value={9}>Làm đẹp - Sức khỏe</Option>
              <Option value={10}>Thời trang - phụ kiện</Option>
              <Option value={11}>Thể thao - dã ngoại</Option>
              <Option value={12}>Xe máy, ô tô, xe đạp</Option>
              <Option value={13}>Sách - VPP và Quà tặng</Option>
            </Select>
          </Form.Item>
          <Form.Item name="url" label="Đường dẫn hình ảnh">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

const DoanhThu = (props) => {
  const [listProduct, setListProduct] = useState([]);
  const [editVisible, setEditVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [product, setProduct] = useState({});
  const [onDelete, setOnDelete] = useState(false);
  let dataW = JSON.parse(window.localStorage.getItem("auth"));
  const info = {
    MaNhaBan: dataW.MaNhaBan,
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/nhaban/splist", JSON.stringify(info), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setListProduct(res.data);
        console.log(listProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [editVisible, addVisible, onDelete]);

  const onClickEdit = (item) => {
    setProduct(item);
    setEditVisible(true);
  };

  const onClickAdd = () => {
    setAddVisible(true);
  };

  const onClickDelete = (item) => {
    axios
      .delete("http://localhost:5000/api/nhaban/sanpham/" + item.MaSP)
      .then((response) => {
        console.log(response);
      });

    axios
      .post("http://localhost:5000/api/nhaban/splist", JSON.stringify(info), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setListProduct(res.data);
        setOnDelete(!onDelete);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "Mã sản phẩm",
      dataIndex: "MaSP",
      key: "MaSP",
      sorter: (a, b) => a.MaSP - b.MaSP,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "TenSP",
      key: "TenSP",
    },
    {
      title: "Mô tả",
      dataIndex: "MoTaSP",
      key: "MoTaSP",
    },
    {
      title: "Số lượng tồn",
      dataIndex: "SLTonSP",
      key: "SLTonSP",
    },
    {
      title: "Giá bán",
      dataIndex: "GiaBanSP",
      key: "GiaBanSP",
    },
    {
      title: "Giá giảm",
      dataIndex: "GiaGiamSP",
      key: "GiaGiamSP",
    },
    {
      title: "Thành tiền",
      dataIndex: "ThanhTienSP",
      key: "ThanhTienSP",
    },
    {
      title: "Loại sản phẩm",
      dataIndex: "MaLoaiSP",
      key: "MaLoaiSP",
      render: (text) => {
        switch (text) {
          case 0:
            return <div>Điện thoại - Máy tính bảng</div>;
          case 1:
            return <div>Điện tử - Điện lạnh</div>;
          case 2:
            return <div>Phụ kiện - Thiết bị số</div>;
          case 3:
            return <div>Laptop- Thiết bị IT</div>;
          case 4:
            return <div>Máy ảnh - Thiết bị quay phim</div>;
          case 5:
            return <div>Điện gia dùng</div>;
          case 6:
            return <div>Nhà cửa đời sống</div>;
          case 7:
            return <div>Hàng tiêu dùng - Thực phẩm</div>;
          case 8:
            return <div>Đồ chơi - Mẹ và Bé</div>;
          case 9:
            return <div>Làm đẹp - Sức khỏe</div>;
          case 10:
            return <div>Thời trang - phụ kiện</div>;
          case 11:
            return <div>Thể thao - dã ngoại</div>;
          case 12:
            return <div>Xe máy, ô tô, xe đạp</div>;
          default:
            return <div>Sách - VPP và Quà tặng</div>;
        }
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditTwoTone
            className="edit-button"
            onClick={() => onClickEdit(record)}
          />
          <DeleteTwoTone
            className="delete"
            onClick={() => onClickDelete(record)}
          />
        </Space>
      ),
    },
  ];
  const setVisibleFalse = () => {
    setEditVisible(false);
    setAddVisible(false);
  };

  return (
    <div>
      <Row>
        <Col>
          <Title level={2}>Danh Sách Sản Phẩm</Title>
        </Col>
        <Col>
          <Button type="primary" className="btnCreateDSSP" onClick={onClickAdd}>
            Tạo Sản Phẩm
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={listProduct} />
      <EditModal
        key={editVisible}
        visible={editVisible}
        product={product}
        setVisibleFalse={setVisibleFalse}
      />
      <AddModal
        key={addVisible}
        visible={addVisible}
        setListProduct={setListProduct}
        setVisibleFalse={setVisibleFalse}
      />
    </div>
  );
};

export default DoanhThu;
