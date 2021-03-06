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
          <Form.Item name="TenSP" label="T??n s???n ph???m">
            <Input defaultValue={props.product.TenSP} />
          </Form.Item>
          <Form.Item name="MoTaSP" label="M?? t??? ">
            <Input defaultValue={props.product.MoTaSP} />
          </Form.Item>
          <Form.Item name="SLTonSP" label="S??? l?????ng t???n">
            <Input defaultValue={props.product.SLTonSP} />
          </Form.Item>
          <Form.Item name="GiaBanSP" label="Gi?? b??n">
            <Input defaultValue={props.product.GiaBanSP} />
          </Form.Item>
          <Form.Item name="GiaGiamSP" label="Gi?? gi???m">
            <Input defaultValue={props.product.GiaGiamSP} />
          </Form.Item>
          <Form.Item name="ThanhTienSP" label="Th??nh ti???n">
            <Input defaultValue={props.product.ThanhTienSP} />
          </Form.Item>
          <Form.Item name="MaLoaiSP" label="Lo???i s???n ph???m">
            <Select
              placeholder="ch???n lo???i s???n ph???m"
              defaultValue={props.product.MaLoaiSP}
              onChange={onChangeSelect}
            >
              <Option value={0}>??i???n tho???i - M??y t??nh b???ng</Option>
              <Option value={1}>??i???n t??? - ??i???n l???nh</Option>
              <Option value={2}>Ph??? ki???n - Thi???t b??? s???</Option>
              <Option value={3}>Laptop- Thi???t b??? IT</Option>
              <Option value={4}>M??y ???nh - Thi???t b??? quay phim</Option>

              <Option value={5}>??i???n gia d??ng</Option>

              <Option value={6}>Nh?? c???a ?????i s???ng</Option>
              <Option value={7}>H??ng ti??u d??ng - Th???c ph???m</Option>
              <Option value={8}>????? ch??i - M??? v?? B??</Option>
              <Option value={9}>L??m ?????p - S???c kh???e</Option>
              <Option value={10}>Th???i trang - ph??? ki???n</Option>
              <Option value={11}>Th??? thao - d?? ngo???i</Option>
              <Option value={12}>Xe m??y, ?? t??, xe ?????p</Option>
              <Option value={13}>S??ch - VPP v?? Qu?? t???ng</Option>
            </Select>
          </Form.Item>
          <Form.Item name="url" label="???????ng d???n h??nh ???nh">
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
          <Form.Item name="TenSP" label="T??n s???n ph???m">
            <Input />
          </Form.Item>
          <Form.Item name="MoTaSP" label="M?? t??? ">
            <Input />
          </Form.Item>
          <Form.Item name="SLTonSP" label="S??? l?????ng t???n">
            <Input />
          </Form.Item>
          <Form.Item name="GiaBanSP" label="Gi?? b??n">
            <Input />
          </Form.Item>
          <Form.Item name="GiaGiamSP" label="Gi?? gi???m">
            <Input />
          </Form.Item>
          <Form.Item name="ThanhTienSP" label="Th??nh ti???n">
            <Input />
          </Form.Item>
          <Form.Item name="MaLoaiSP" label="Lo???i s???n ph???m">
            <Select placeholder="ch???n lo???i s???n ph???m" onChange={onChangeSelect}>
              <Option value={0}>??i???n tho???i - M??y t??nh b???ng</Option>
              <Option value={1}>??i???n t??? - ??i???n l???nh</Option>
              <Option value={2}>Ph??? ki???n - Thi???t b??? s???</Option>
              <Option value={3}>Laptop- Thi???t b??? IT</Option>
              <Option value={4}>M??y ???nh - Thi???t b??? quay phim</Option>

              <Option value={5}>??i???n gia d??ng</Option>

              <Option value={6}>Nh?? c???a ?????i s???ng</Option>
              <Option value={7}>H??ng ti??u d??ng - Th???c ph???m</Option>
              <Option value={8}>????? ch??i - M??? v?? B??</Option>
              <Option value={9}>L??m ?????p - S???c kh???e</Option>
              <Option value={10}>Th???i trang - ph??? ki???n</Option>
              <Option value={11}>Th??? thao - d?? ngo???i</Option>
              <Option value={12}>Xe m??y, ?? t??, xe ?????p</Option>
              <Option value={13}>S??ch - VPP v?? Qu?? t???ng</Option>
            </Select>
          </Form.Item>
          <Form.Item name="url" label="???????ng d???n h??nh ???nh">
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
      title: "M?? s???n ph???m",
      dataIndex: "MaSP",
      key: "MaSP",
      sorter: (a, b) => a.MaSP - b.MaSP,
    },
    {
      title: "T??n s???n ph???m",
      dataIndex: "TenSP",
      key: "TenSP",
    },
    {
      title: "M?? t???",
      dataIndex: "MoTaSP",
      key: "MoTaSP",
    },
    {
      title: "S??? l?????ng t???n",
      dataIndex: "SLTonSP",
      key: "SLTonSP",
    },
    {
      title: "Gi?? b??n",
      dataIndex: "GiaBanSP",
      key: "GiaBanSP",
    },
    {
      title: "Gi?? gi???m",
      dataIndex: "GiaGiamSP",
      key: "GiaGiamSP",
    },
    {
      title: "Th??nh ti???n",
      dataIndex: "ThanhTienSP",
      key: "ThanhTienSP",
    },
    {
      title: "Lo???i s???n ph???m",
      dataIndex: "MaLoaiSP",
      key: "MaLoaiSP",
      render: (text) => {
        switch (text) {
          case 0:
            return <div>??i???n tho???i - M??y t??nh b???ng</div>;
          case 1:
            return <div>??i???n t??? - ??i???n l???nh</div>;
          case 2:
            return <div>Ph??? ki???n - Thi???t b??? s???</div>;
          case 3:
            return <div>Laptop- Thi???t b??? IT</div>;
          case 4:
            return <div>M??y ???nh - Thi???t b??? quay phim</div>;
          case 5:
            return <div>??i???n gia d??ng</div>;
          case 6:
            return <div>Nh?? c???a ?????i s???ng</div>;
          case 7:
            return <div>H??ng ti??u d??ng - Th???c ph???m</div>;
          case 8:
            return <div>????? ch??i - M??? v?? B??</div>;
          case 9:
            return <div>L??m ?????p - S???c kh???e</div>;
          case 10:
            return <div>Th???i trang - ph??? ki???n</div>;
          case 11:
            return <div>Th??? thao - d?? ngo???i</div>;
          case 12:
            return <div>Xe m??y, ?? t??, xe ?????p</div>;
          default:
            return <div>S??ch - VPP v?? Qu?? t???ng</div>;
        }
      },
    },
    {
      title: "H??nh ?????ng",
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
          <Title level={2}>Danh S??ch S???n Ph???m</Title>
        </Col>
        <Col>
          <Button type="primary" className="btnCreateDSSP" onClick={onClickAdd}>
            T???o S???n Ph???m
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
