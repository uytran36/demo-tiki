import {
  Table,
  Pagination,
  Button,
  Input,
  Form,
  Select,
  Space,
  notification,
  DatePicker,
  InputNumber,
} from "antd";
import { Layout } from "antd";
import { Typography, Modal } from "antd";
import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

const dateFormat = "YYYY-MM-DD";
const { Option } = Select;
const { Title } = Typography;
const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function EditModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(props.visible);
  const [form] = Form.useForm();

  const handleOk = () => {
    let HoTen = form.getFieldValue("name");
    let NgaySinh = form.getFieldValue("NgaySinh");
    let NgayVaoLam = form.getFieldValue("NgayVaoLam");
    let SDT = form.getFieldValue("SDT");
    let GioiTinh = form.getFieldValue("GioiTinh");
    let SoNha = form.getFieldValue("SoNha");
    let Duong = form.getFieldValue("Duong");
    let Phuong = form.getFieldValue("Phuong");
    let Quan = form.getFieldValue("Quan");
    let ThanhPho = form.getFieldValue("ThanhPho");
    let MatKhau = form.getFieldValue("MatKhau");
    let Luong = form.getFieldValue("Luong");
    let HeSoLuong = form.getFieldValue("HeSoLuong");
    let Email = form.getFieldValue("Email");

    const info = {
      HoTen: HoTen === undefined ? props.NhanVien.HoTen : HoTen,
      Email: Email === undefined ? props.NhanVien.Email : Email,
      NgaySinh: moment(
        NgaySinh === undefined ? props.NhanVien.NgaySinh : NgaySinh
      ).format("MM-DD-YYYY"),
      NgayVaoLam: moment(
        NgayVaoLam === undefined ? props.NhanVien.NgayVaoLam : NgayVaoLam
      ).format("MM-DD-YYYY"),
      SDT: SDT === undefined ? props.NhanVien.SDT : SDT,
      GioiTinh: GioiTinh === undefined ? props.NhanVien.GioiTinh : GioiTinh,
      SoNha: SoNha === undefined ? props.NhanVien.SoNha : SoNha,
      Duong: Duong === undefined ? props.NhanVien.Duong : Duong,
      Phuong: Phuong === undefined ? props.NhanVien.Phuong : Phuong,
      Quan: Quan === undefined ? props.NhanVien.Quan : Quan,
      ThanhPho: ThanhPho === undefined ? props.NhanVien.ThanhPho : ThanhPho,
      MatKhau: MatKhau === undefined ? props.NhanVien.MatKhau : MatKhau,
      Luong:
        Luong === undefined ? parseInt(props.NhanVien.Luong) : parseInt(Luong),
      HeSoLuong:
        HeSoLuong === undefined
          ? parseFloat(props.NhanVien.HeSoLuong)
          : parseFloat(HeSoLuong),
    };

    axios
      .put(
        "http://localhost:5000/api/NVQT/EditNVQLK/" + props.NhanVien.MaNV,
        JSON.stringify(info),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        axios
          .get("http://localhost:5000/api/NVQT/listNVQLK/")
          .then((res) => {
            props.setListNhanVien(res.data);
          })
          .catch((err) => {
            console.log(err);
          });

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

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Layout>
          <div>
            <Title level="3" align="center">
              S???a Nh??n Vi??n Qu???n L?? Kho
            </Title>
          </div>
          <div>
            <Form {...layout} form={form}>
              <Form.Item name="name" label="Nh???p t??n nh??n vi??n">
                <Input defaultValue={props.NhanVien.HoTen} />
              </Form.Item>
              <Form.Item name="Email" label="Email">
                <Input defaultValue={props.NhanVien.Email} />
              </Form.Item>

              <Form.Item
                name="MatKhau"
                label="M???t kh???u"
                rules={[
                  {
                    required: true,
                    message: "Xin vui l??ng nh???p m???t kh???u!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password defaultValue={props.NhanVien.MatKhau} />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="X??c nh???n m???t kh???u"
                dependencies={["MatKhau"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Xin vui l??ng nh???p l???i m???t kh???u!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("MatKhau") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("Hai m???t kh???u ???? nh???p kh??ng kh???p!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password defaultValue={props.NhanVien.MatKhau} />
              </Form.Item>

              <Form.Item name="SDT" label="S??? ??i???n tho???i">
                <Input defaultValue={props.NhanVien.SDT} />
              </Form.Item>

              <Form.Item
                name="NgaySinh"
                wrapperCol={{ span: 8 }}
                label="Ng??y sinh"
                rules={[
                  () => ({
                    validator(_, value) {
                      if (moment(value).year() <= 2003) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("Nh??n vi??n ch??a ????? tu???i l??m vi???c")
                      );
                    },
                  }),
                ]}
              >
                <DatePicker
                  defaultValue={moment(props.NhanVien.NgaySinh, dateFormat)}
                />
              </Form.Item>

              <Form.Item
                name="NgayVaoLam"
                wrapperCol={{ span: 8 }}
                label="Ng??y v??o l??m"
              >
                <DatePicker
                  defaultValue={moment(props.NhanVien.NgayVaoLam, dateFormat)}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{ span: 7 }}
                name="GioiTinh"
                label="Gi???i t??nh"
              >
                <Select
                  placeholder="Ch???n gi???i t??nh"
                  defaultValue={props.NhanVien.GioiTinh}
                >
                  <Option value="Nam">Nam</Option>
                  <Option value="N???">N???</Option>
                </Select>
              </Form.Item>

              <Form.Item label="?????a ch???">
                <Input.Group compact>
                  <Form.Item name="ThanhPho" noStyle>
                    <Input
                      style={{ width: "35%" }}
                      placeholder="Nh???p th??nh ph???"
                      defaultValue={props.NhanVien.ThanhPho}
                    />
                  </Form.Item>
                  <Form.Item name="Quan" noStyle>
                    <Input
                      style={{ width: "35%" }}
                      placeholder="Nh???p qu???n"
                      defaultValue={props.NhanVien.Quan}
                    />
                  </Form.Item>
                  <Form.Item name="Phuong" noStyle>
                    <Input
                      style={{ width: "30%" }}
                      placeholder="Nh???p ph?????ng"
                      defaultValue={props.NhanVien.Phuong}
                    />
                  </Form.Item>
                  <Form.Item name="SoNha" noStyle>
                    <Input
                      style={{ width: "50%" }}
                      placeholder="Nh???p s??? nh??"
                      defaultValue={props.NhanVien.SoNha}
                    />
                  </Form.Item>
                  <Form.Item name="Duong" noStyle>
                    <Input
                      style={{ width: "50%" }}
                      placeholder="Nh???p t??n ???????ng"
                      defaultValue={props.NhanVien.Duong}
                    />
                  </Form.Item>
                </Input.Group>
              </Form.Item>

              <Form.Item
                name="Luong"
                wrapperCol={{ span: 3 }}
                label="L????ng nh??n vi??n (????n v??? 1.000??)"
              >
                <Input defaultValue={props.NhanVien.Luong} />
              </Form.Item>

              <Form.Item
                name="HeSoLuong"
                wrapperCol={{ span: 3 }}
                label="H??? s??? l????ng nh??n vi??n"
              >
                <Input defaultValue={props.NhanVien.HeSoLuong} />
              </Form.Item>
            </Form>
          </div>
        </Layout>
      </Modal>
    </>
  );
}

function AddModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(props.visible);
  const [form] = Form.useForm();

  const handleOk = () => {
    let HoTen = form.getFieldValue("name");
    let NgaySinh = form.getFieldValue("ngaySinh");
    let NgayVaoLam = form.getFieldValue("ngayVaoLam");
    let SDT = form.getFieldValue("sdt");
    let GioiTinh = form.getFieldValue("gioiTinh");
    let SoNha = form.getFieldValue("soNha");
    let Duong = form.getFieldValue("duong");
    let Phuong = form.getFieldValue("phuong");
    let Quan = form.getFieldValue("quan");
    let ThanhPho = form.getFieldValue("thanhPho");
    let MatKhau = form.getFieldValue("password");
    let Luong = form.getFieldValue("luong");
    let HeSoLuong = form.getFieldValue("hsl");
    let Email = form.getFieldValue("email");

    const info = {
      HoTen: HoTen,
      Email: Email,
      NgaySinh: moment(NgaySinh).format("MM-DD-YYYY"),
      NgayVaoLam: moment(NgayVaoLam).format("MM-DD-YYYY"),
      SDT: SDT,
      GioiTinh: GioiTinh,
      SoNha: SoNha,
      Duong: Duong,
      Phuong: Phuong,
      Quan: Quan,
      ThanhPho: ThanhPho,
      MatKhau: MatKhau,
      Luong: parseInt(Luong),
      HeSoLuong: parseFloat(HeSoLuong),
    };

    axios
      .post("http://localhost:5000/api/NVQT/taoNVQLK", JSON.stringify(info), {
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
      .get("http://localhost:5000/api/NVQT/listNVQLK/")
      .then((res) => {
        props.setListNhanVien(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    props.setVisibleFalse();
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Layout>
          <div>
            <Title level="3" align="center">
              Th??m Nh??n Vi??n Qu???n L?? Kho
            </Title>
          </div>
          <div>
            <Form {...layout} form={form}>
              <Form.Item name="name" label="Nh???p t??n nh??n vi??n">
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="M???t kh???u"
                rules={[
                  {
                    required: true,
                    message: "Xin vui l??ng nh???p m???t kh???u!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="X??c nh???n m???t kh???u"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Xin vui l??ng nh???p l???i m???t kh???u!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("Hai m???t kh???u ???? nh???p kh??ng kh???p!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="sdt" label="S??? ??i???n tho???i">
                <Input />
              </Form.Item>

              <Form.Item
                name="ngaySinh"
                wrapperCol={{ span: 8 }}
                label="Ng??y sinh"
                rules={[
                  () => ({
                    validator(_, value) {
                      if (moment(value).year() <= 2003) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("Nh??n vi??n ch??a ????? tu???i l??m vi???c")
                      );
                    },
                  }),
                ]}
              >
                <DatePicker />
              </Form.Item>

              <Form.Item
                name="ngayVaoLam"
                wrapperCol={{ span: 8 }}
                label="Ng??y v??o l??m"
              >
                <DatePicker />
              </Form.Item>

              <Form.Item
                wrapperCol={{ span: 7 }}
                name="gioiTinh"
                label="Gi???i t??nh"
              >
                <Select placeholder="Ch???n gi???i t??nh">
                  <Option value="Nam">Nam</Option>
                  <Option value="N???">N???</Option>
                </Select>
              </Form.Item>

              <Form.Item label="?????a ch???">
                <Input.Group compact>
                  <Form.Item name="thanhPho" noStyle>
                    <Input
                      style={{ width: "35%" }}
                      placeholder="Nh???p th??nh ph???"
                    />
                  </Form.Item>
                  <Form.Item name="quan" noStyle>
                    <Input style={{ width: "35%" }} placeholder="Nh???p qu???n" />
                  </Form.Item>
                  <Form.Item name="phuong" noStyle>
                    <Input style={{ width: "30%" }} placeholder="Nh???p ph?????ng" />
                  </Form.Item>
                  <Form.Item name="soNha" noStyle>
                    <Input style={{ width: "50%" }} placeholder="Nh???p s??? nh??" />
                  </Form.Item>
                  <Form.Item name="duong" noStyle>
                    <Input
                      style={{ width: "50%" }}
                      placeholder="Nh???p t??n ???????ng"
                    />
                  </Form.Item>
                </Input.Group>
              </Form.Item>

              <Form.Item
                name="luong"
                wrapperCol={{ span: 3 }}
                label="L????ng nh??n vi??n (????n v??? 1.000??)"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="hsl"
                wrapperCol={{ span: 3 }}
                label="H??? s??? l????ng nh??n vi??n"
              >
                <Input />
              </Form.Item>
            </Form>
          </div>
        </Layout>
      </Modal>
    </>
  );
}

function DeleteModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(props.visible);

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalVisible(false);
    props.setVisibleFalse();
  };

  const handleOk = () => {
    let MaNV = form.getFieldValue("MaNV");

    axios
      .get("http://localhost:5000/api/NVQT/dsKho/")
      .then((res) => {
        const list = res.data;
        const temp = list.filter((item) => {
          return item.MaNVQL === props.NhanVien.MaNV;
        });

        let info;
        if (temp.length !== 0) {
          info = {
            MaNVmoi: MaNV,
            MaKho: temp[0].MaKho,
          };

          axios
            .put(
              "http://localhost:5000/api/NVQT/UpdateAuthNVQLK/" +
                props.NhanVien.MaNV,
              JSON.stringify(info),
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              axios
                .delete(
                  "http://localhost:5000/api/NVQT/xoaNVQLK/" +
                    props.NhanVien.MaNV
                )
                .then(() => {
                  axios
                    .get("http://localhost:5000/api/NVQT/listNVQLK/")
                    .then((res) => {
                      props.setListNhanVien(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((error) => {
                  console.log(error);
                });
              console.log(res.data);
              setIsModalVisible(false);
              props.setVisibleFalse();
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          info = {
            MaNVmoi: MaNV,
            MaKho: 0,
          };
          axios
            .delete(
              "http://localhost:5000/api/NVQT/xoaNVQLK/" + props.NhanVien.MaNV
            )
            .then(() => {
              axios
                .get("http://localhost:5000/api/NVQT/listNVQLK/")
                .then((res) => {
                  props.setListNhanVien(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((error) => {
              console.log(error);
            });
          console.log(res.data);
          setIsModalVisible(false);
          props.setVisibleFalse();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Layout>
          <div>
            <Title level="3" align="center">
              X??a Nh??n Vi??n Qu???n L?? Kho
            </Title>
          </div>
          <div>
            <Form {...layout} form={form}>
              <Form.Item name="MaNV" label="Nh???p nh??n vi??n thay th???">
                <InputNumber />
              </Form.Item>
            </Form>
          </div>
        </Layout>
      </Modal>
    </>
  );
}
function NVQLK() {
  const [listNhanVien, setListNhanVien] = useState([]);
  const [NhanVien, setNhanVien] = useState({});
  const [editVisible, setEditVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/NVQT/listNVQLK/")
      .then((res) => {
        setListNhanVien(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addVisible, editVisible]);

  const onClickEdit = (item) => {
    setNhanVien(item);
    setEditVisible(true);
  };

  const onClickAdd = () => {
    setAddVisible(true);
  };

  const onClickDelete = (nv) => {
    setNhanVien(nv);
    setDeleteVisible(true);
  };

  const columns = [
    {
      title: "M?? Nh??n Vi??n",
      dataIndex: "MaNV",
      key: "MaNV",
    },
    {
      title: "H??? T??n",
      key: "HoTen",
      dataIndex: "HoTen",
    },
    {
      title: "Ng??y sinh",
      dataIndex: "NgaySinh",
      key: "NgaySinh",
      render: (_, record) => {
        return moment(record.NgaySinh).format("YYYY-MM-DD");
      },
    },
    {
      title: "?????a ch???",
      key: "DiaChi",
      dataIndex: "SoNha",
      render: (_, record) => {
        return (
          <div>
            {record.SoNha +
              " " +
              record.Duong +
              " Ph?????ng " +
              record.Phuong +
              " Qu???n " +
              record.Quan +
              " " +
              record.ThanhPho}
          </div>
        );
      },
    },
    {
      title: "Email",
      key: "Email",
      dataIndex: "Email",
    },
    {
      title: "S??T",
      key: "SDT",
      dataIndex: "SDT",
    },
    {
      title: "Gi???i t??nh",
      key: "GioiTinh",
      dataIndex: "GioiTinh",
    },
    {
      title: "Ng??y V??o L??m",
      key: "NgayVaoLam",
      dataIndex: "NgayVaoLam",
      render: (_, record) => {
        return moment(record.NgayVaoLam).format("MM-DD-YYYY");
      },
    },
    {
      title: "L????ng",
      key: "Luong",
      dataIndex: "Luong",
    },
    {
      title: "H??? S??? L????ng",
      key: "HeSoLuong",
      dataIndex: "HeSoLuong",
    },
    {
      title: "H??nh ?????ng",
      key: "action",
      render: (_, record) => (
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
    setDeleteVisible(false);
  };

  return (
    <div>
      <div>
        <Layout>
          <Content>
            <Title level={2} classname="titlename">
              Danh s??ch Nh??n Vi??n Qu???n L?? Kho
            </Title>
            <Button onClick={onClickAdd}>Th??m nh??n vi??n</Button>
            <Table
              columns={columns}
              dataSource={listNhanVien}
              pagination={false}
            />
          </Content>
        </Layout>
      </div>

      <EditModal
        key={editVisible}
        visible={editVisible}
        NhanVien={NhanVien}
        setListNhanVien={setListNhanVien}
        setVisibleFalse={setVisibleFalse}
      />
      <AddModal
        key={addVisible}
        visible={addVisible}
        setVisibleFalse={setVisibleFalse}
        setListNhanVien={setListNhanVien}
      />
      <DeleteModal
        key={deleteVisible}
        visible={deleteVisible}
        NhanVien={NhanVien}
        setListNhanVien={setListNhanVien}
        setVisibleFalse={setVisibleFalse}
      />
    </div>
  );
}

export default NVQLK;
