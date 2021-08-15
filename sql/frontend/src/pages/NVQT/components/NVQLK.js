import { Table, Pagination, Button, Input, Form, Select ,Space, notification, DatePicker } from "antd";
import { Layout } from "antd";
import { Typography , Modal} from "antd";
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
      NgaySinh: moment(NgaySinh === undefined ? props.NhanVien.NgaySinh : NgaySinh).format("MM-DD-YYYY"),
      NgayVaoLam: moment(NgayVaoLam === undefined ? props.NhanVien.NgayVaoLam : NgayVaoLam).format("MM-DD-YYYY"),
      SDT: SDT === undefined ? props.NhanVien.SDT : SDT,
      GioiTinh: GioiTinh === undefined ? props.NhanVien.GioiTinh : GioiTinh,
      SoNha: SoNha === undefined ? props.NhanVien.SoNha : SoNha,
      Duong: Duong === undefined ? props.NhanVien.Duong : Duong,
      Phuong: Phuong === undefined ? props.NhanVien.Phuong : Phuong,
      Quan: Quan === undefined ? props.NhanVien.Quan : Quan,
      ThanhPho: ThanhPho === undefined ? props.NhanVien.ThanhPho : ThanhPho,
      MatKhau: MatKhau === undefined ? props.NhanVien.MatKhau : MatKhau,
      Luong: Luong === undefined ? parseInt(props.NhanVien.Luong) : parseInt(Luong),
      HeSoLuong: HeSoLuong === undefined ? parseFloat(props.NhanVien.HeSoLuong) : parseFloat(HeSoLuong),
    };

    axios
      .put("http://localhost:5000/api/NVQT/EditNVQLK/" + props.NhanVien.MaNV,
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

    axios
      .get("http://localhost:5000/api/NVQT/listNVQLK/")
      .then((res) => {
        props.setListNhanVien(res.data);
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
                <Title level="3" align="center">Sửa Nhân Viên Quản Lý Kho</Title>
            </div>
            <div>
            <Form {...layout} form={form}>  
                <Form.Item name="name" label="Nhập tên nhân viên"  >
                    <Input defaultValue={props.NhanVien.HoTen} />
                </Form.Item>    
                <Form.Item name="Email" label="Email" >
                    <Input defaultValue={props.NhanVien.Email} />
                </Form.Item>
                
                <Form.Item
                name="MatKhau"
                label="Mật khẩu"
                rules={[
                    {
                    required: true,
                    message: "Xin vui lòng nhập mật khẩu!",
                    },
                ]}
                hasFeedback
                >
                <Input.Password defaultValue = {props.NhanVien.MatKhau} />
                </Form.Item>

                <Form.Item
                name="confirm"
                label="Xác nhận mật khẩu"
                dependencies={["MatKhau"]}
                hasFeedback
                rules={[
                    {
                    required: true,
                    message: "Xin vui lòng nhập lại mật khẩu!",
                    },
                    ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue("MatKhau") === value) {
                        return Promise.resolve();
                        }

                        return Promise.reject(
                        new Error("Hai mật khẩu đã nhập không khớp!")
                        );
                    },
                    }),
                ]}
                >
                <Input.Password defaultValue = {props.NhanVien.MatKhau}/>
                </Form.Item>

                <Form.Item name="SDT" label="Số điện thoại" >
                    <Input defaultValue={props.NhanVien.SDT} />
                </Form.Item>

                <Form.Item name="NgaySinh" wrapperCol={{span: 8}} label="Ngày sinh" 
                rules={[
                  () => ({
                  validator(_, value) {
                      if (moment(value).year() <= 2003) {
                      return Promise.resolve();
                      }

                      return Promise.reject(
                      new Error("Nhân viên chưa đủ tuổi làm việc")
                      );
                  },
                  }),
              ]} >
                    <DatePicker defaultValue={moment(props.NhanVien.NgaySinh, dateFormat)} />
                </Form.Item>

                <Form.Item name="NgayVaoLam" wrapperCol={{span: 8}} label="Ngày vào làm"  >
                    <DatePicker defaultValue={moment(props.NhanVien.NgayVaoLam, dateFormat)} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{span: 7}}
                    name="GioiTinh"
                    label="Giới tính"
                >
                    <Select placeholder="Chọn giới tính" defaultValue={props.NhanVien.GioiTinh}>
                        <Option value="Nam">Nam</Option>
                        <Option value="Nữ">Nữ</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Địa chỉ">
                    <Input.Group compact>
                    <Form.Item
                        name="ThanhPho"
                        noStyle 
                    >
                        <Input style={{ width: '35%' }} placeholder="Nhập thành phố" defaultValue={props.NhanVien.ThanhPho} />
                    </Form.Item>
                    <Form.Item
                        name="Quan"
                        noStyle
                    >
                        <Input style={{ width: '35%' }} placeholder="Nhập quận" defaultValue={props.NhanVien.Quan}/>
                    </Form.Item>
                    <Form.Item
                        name="Phuong"
                        noStyle
                        
                    >
                        <Input style={{ width: '30%' }} placeholder="Nhập phường" defaultValue={props.NhanVien.Phuong}/>
                    </Form.Item>
                    <Form.Item
                        name="SoNha"
                        noStyle
                    >
                        <Input style={{ width: '50%' }} placeholder="Nhập số nhà" defaultValue={props.NhanVien.SoNha}/>
                    </Form.Item>
                    <Form.Item
                        name="Duong"
                        noStyle
                    >
                        <Input style={{ width: '50%' }} placeholder="Nhập tên đường"  defaultValue={props.NhanVien.Duong}/>
                    </Form.Item>
                    </Input.Group>
                </Form.Item>

                <Form.Item name="Luong" wrapperCol={{span: 3}} label="Lương nhân viên (Đơn vị 1.000đ)" >
                    <Input defaultValue={props.NhanVien.Luong} />
                </Form.Item>

                <Form.Item name="HeSoLuong" wrapperCol={{span: 3}} label="Hệ số lương nhân viên" >
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
                <Title level="3" align="center">Thêm Nhân Viên Quản Lý Kho</Title>
            </div>
            <div>
            <Form {...layout} form={form}>  
                <Form.Item name="name" label="Nhập tên nhân viên" >
                    <Input />
                </Form.Item>    
                <Form.Item name="email" label="Email" >
                    <Input />
                </Form.Item>
                
                <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[
                    {
                    required: true,
                    message: "Xin vui lòng nhập mật khẩu!",
                    },
                ]}
                hasFeedback
                >
                <Input.Password />
                </Form.Item>

                <Form.Item
                name="confirm"
                label="Xác nhận mật khẩu"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                    required: true,
                    message: "Xin vui lòng nhập lại mật khẩu!",
                    },
                    ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                        }

                        return Promise.reject(
                        new Error("Hai mật khẩu đã nhập không khớp!")
                        );
                    },
                    }),
                ]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item name="sdt" label="Số điện thoại" >
                    <Input />
                </Form.Item>

                <Form.Item name="ngaySinh" wrapperCol={{span: 8}} label="Ngày sinh" 
                rules={[
                  () => ({
                  validator(_, value) {
                      if (moment(value).year() <= 2003) {
                      return Promise.resolve();
                      }

                      return Promise.reject(
                      new Error("Nhân viên chưa đủ tuổi làm việc")
                      );
                  },
                  }),
              ]}>
                    <DatePicker />
                </Form.Item>

                <Form.Item name="ngayVaoLam" wrapperCol={{span: 8}} label="Ngày vào làm" >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    wrapperCol={{span: 7}}
                    name="gioiTinh"
                    label="Giới tính"
                >
                    <Select placeholder="Chọn giới tính">
                        <Option value="Nam">Nam</Option>
                        <Option value="Nữ">Nữ</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Địa chỉ">
                    <Input.Group compact>
                    <Form.Item
                        name="thanhPho"
                        noStyle
                    >
                        <Input style={{ width: '35%' }} placeholder="Nhập thành phố" />
                    </Form.Item>
                    <Form.Item
                        name="quan"
                        noStyle
                    >
                        <Input style={{ width: '35%' }} placeholder="Nhập quận" />
                    </Form.Item>
                    <Form.Item
                        name="phuong"
                        noStyle
                    >
                        <Input style={{ width: '30%' }} placeholder="Nhập phường" />
                    </Form.Item>
                    <Form.Item
                        name="soNha"
                        noStyle
                    >
                        <Input style={{ width: '50%' }} placeholder="Nhập số nhà" />
                    </Form.Item>
                    <Form.Item
                        name="duong"
                        noStyle
                    >
                        <Input style={{ width: '50%' }} placeholder="Nhập tên đường" />
                    </Form.Item>
                    </Input.Group>
                </Form.Item>

                <Form.Item name="luong" wrapperCol={{span: 3}} label="Lương nhân viên (Đơn vị 1.000đ)" >
                    <Input />
                </Form.Item>

                <Form.Item name="hsl" wrapperCol={{span: 3}} label="Hệ số lương nhân viên" >
                    <Input />
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
    const [NhanVien, setNhanVien] = useState({})
    const [editVisible, setEditVisible] = useState(false);
    const [addVisible, setAddVisible] = useState(false);

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/NVQT/listNVQLK/")
          .then((res) => {
            setListNhanVien(res.data);
            console.log(listNhanVien);
          })
          .catch((err) => {
            console.log(err);
          });

      }, []);

    const onClickEdit = (item) => {
      setNhanVien(item);
      setEditVisible(true);
    };
  
    const onClickAdd = () => {
      setAddVisible(true);
    };

    const onClickDelete = (nv) => {
      axios
        .delete("http://localhost:5000/api/NVQT/xoaNVQLK/" + nv.MaNV)
        .then( () => {
            axios
            .get("http://localhost:5000/api/NVQT/listNVQLK/")
            .then((res) => {
              setListNhanVien(res.data);
              console.log(listNhanVien);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch ((error) => {console.log(error)});
    };
    

    const columns = [
      {
        title: "Mã Nhân Viên",
        dataIndex: "MaNV",
        key: "MaNV",
      },
      {
        title: "Họ Tên",
        key: "HoTen",
        dataIndex: "HoTen",
      },
      {
        title: "Ngày sinh",
        dataIndex: "NgaySinh",
        key: "NgaySinh",
        render: (_,record) => {return moment(record.NgaySinh).format("YYYY-MM-DD")}
      },
      {
        title: "Địa chỉ",
        key: "DiaChi",
        dataIndex: "SoNha",
        render: (_,record) => {return <div>{record.SoNha + " " +record.Duong + " Phường " + record.Phuong + " Quận " + record.Quan + " " +record.ThanhPho}</div>}
      },
      {
        title: "Email",
        key: "Email",
        dataIndex: "Email",
      },
      {
        title: "SĐT",
        key: "SDT",
        dataIndex: "SDT",
      },
      {
        title: "Giới tính",
        key: "GioiTinh",
        dataIndex: "GioiTinh",
      },
      {
        title: "Ngày Vào Làm",
        key: "NgayVaoLam",
        dataIndex: "NgayVaoLam",
        render: (_,record) => {return moment(record.NgayVaoLam).format("MM-DD-YYYY")}
      },
      {
        title: "Lương",
        key: "Luong",
        dataIndex: "Luong",
      },
      {
        title: "Hệ Số Lương",
        key: "HeSoLuong",
        dataIndex: "HeSoLuong",
      },
      {
        title: "Hành động",
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
    };

  return (
    <div>
        <div>
      <Layout>
        <Content>
          <Title level={2} classname="titlename">
            Danh sách Nhân Viên Quản Lý Kho
          </Title>
          <Button onClick={onClickAdd} >Thêm nhân viên</Button>
          <Table columns={columns} dataSource={listNhanVien} pagination={false} />
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
    </div>
  );
}

export default NVQLK;
