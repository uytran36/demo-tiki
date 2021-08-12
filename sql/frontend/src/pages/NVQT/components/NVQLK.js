import { Table, Pagination, Button, Input, Form, Select ,Space, notification } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import { Typography , Modal} from "antd";
import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

const { Option } = Select;
const { Title } = Typography; 
const { Content } = Layout;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

// function EditModal(props) {
//   const [isModalVisible, setIsModalVisible] = useState(props.visible);
//   const [form] = Form.useForm();
//   const [maLoai, setMaLoai] = useState(-1);

//   const handleOk = () => {
//     let TenSP = form.getFieldValue("TenSP");
//     let MoTaSP = form.getFieldValue("MoTaSP");
//     let SLTonSP = form.getFieldValue("SLTonSP");
//     let GiaBanSP = form.getFieldValue("GiaBanSP");
//     let GiaGiamSP = form.getFieldValue("GiaGiamSP");
//     let ThanhTienSP = form.getFieldValue("ThanhTienSP");
//     let MaLoaiSP = form.getFieldValue("MaLoaiSP"); //coi lai
//     let url = form.getFieldValue("url");

//     const info = {
//       MaSP: props.product.MaSP,
//       TenSP: TenSP,
//       MoTaSP: MoTaSP,
//       SLTonSP: SLTonSP,
//       GiaBanSP: GiaBanSP,
//       GiaGiamSP: GiaGiamSP,
//       ThanhTienSP: ThanhTienSP,
//       MaLoaiSP: maLoai,
//       url: url,
//     };

//     axios
//       .put(
//         "https://60b0f8b91f26610017fff943.mockapi.io/api/v1/todo_data/" +
//           props.product.MaSP,
//         JSON.stringify(info),
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res.data);
//         setIsModalVisible(false);
//         props.setVisibleFalse();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     props.setVisibleFalse();
//   };

//    function onChangeSelect(value) {
//      setMaLoai(value);
//    }
//   return (
//     <>
//       <Modal
//         title="Basic Modal"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Form {...layout} name="nest-messages">
//           <Form.Item name="TenSP" label="Tên sản phẩm">
//             <Input defaultValue={props.product.TenSP} />
//           </Form.Item>
//           <Form.Item name="MoTaSP" label="Mô tả ">
//             <Input defaultValue={props.product.MoTaSP} />
//           </Form.Item>
//           <Form.Item name="SLTonSP" label="Số lượng tồn">
//             <Input defaultValue={props.product.SLTonSP} />
//           </Form.Item>
//           <Form.Item name="GiaBanSP" label="Giá bán">
//             <Input defaultValue={props.product.GiaBanSP} />
//           </Form.Item>
//           <Form.Item name="GiaGiamSP" label="Giá giảm">
//             <Input defaultValue={props.product.GiaGiam} />
//           </Form.Item>
//           <Form.Item name="ThanhTienSP" label="Thành tiền">
//             <Input defaultValue={props.product.ThanhTienSP} />
//           </Form.Item>
//           <Form.Item name="MaLoaiSP" label="Loại sản phẩm">
//             <Select
//               placeholder="chọn loại sản phẩm"
//               defaultValue={props.product.MaLoaiSP}
//               onChange={onChangeSelect}
//             >
//               <Option value={0}>Điện thoại - Máy tính bảng</Option>
//               <Option value={1}>Điện tử - Điện lạnh</Option>
//               <Option value={2}>Phụ kiện - Thiết bị số</Option>
//               <Option value="3">Laptop- Thiết bị IT</Option>
//               <Option value="4">Máy ảnh - Thiết bị quay phim</Option>

//               <Option value="5">Điện gia dùng</Option>

//               <Option value="6">Nhà cửa đời sống</Option>
//               <Option value="7">Hàng tiêu dùng - Thực phẩm</Option>
//               <Option value="8">Đồ chơi - Mẹ và Bé</Option>
//               <Option value="9">Làm đẹp - Sức khỏe</Option>
//               <Option value="10">Thời trang - phụ kiện</Option>
//               <Option value="11">Thể thao - dã ngoại</Option>
//               <Option value="12">Xe máy, ô tô, xe đạp</Option>
//               <Option value="13">Sách - VPP và Quà tặng</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item name="url" label="Đường dẫn hình ảnh">
//             <Input defaultValue={props.product.url} />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// }

// function AddModal(props) {
//   const [isModalVisible, setIsModalVisible] = useState(props.visible);
//   const [form] = Form.useForm();

//   const handleOk = () => {
//     let HoTen = form.getFieldValue("HoTen");
//     let NgaySinh = form.getFieldValue("NgaySinh");
//     let SLTonSP = form.getFieldValue("SLTonSP");
//     let GiaBanSP = form.getFieldValue("GiaBanSP");
//     let GiaGiamSP = form.getFieldValue("GiaGiamSP");
//     let ThanhTienSP = form.getFieldValue("ThanhTienSP");
//     let MaLoaiSP = form.getFieldValue("MaLoaiSP");
//     let url = form.getFieldValue("url");

//     const info = {
//       MaSP: props.product.MaSP, //lay amount tu api
//       TenSP: TenSP,
//       MoTaSP: MoTaSP,
//       SLTonSP: SLTonSP,
//       GiaBanSP: GiaBanSP,
//       GiaGiamSP: GiaGiamSP,
//       ThanhTienSP: ThanhTienSP,
//       MaLoaiSP: MaLoaiSP,
//       url: url,
//     };

//     axios
//       .put(
//         "https://60b0f8b91f26610017fff943.mockapi.io/api/v1/todo_data/" +
//           props.product.MaSP,
//         JSON.stringify(info),
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res.data);
//         setIsModalVisible(false);
//         props.setVisibleFalse();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     props.setVisibleFalse();
//   };

//   function onChangeSelect(value) {
//     console.log(`selected ${value}`);
//   }
//   return (
//     <>
//       <Modal
//         title="Basic Modal"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Form {...layout} name="nest-messages">
//           <Form.Item name="TenSP" label="Tên sản phẩm">
//             <Input />
//           </Form.Item>
//           <Form.Item name="MoTaSP" label="Mô tả ">
//             <Input />
//           </Form.Item>
//           <Form.Item name="SLTonSP" label="Số lượng tồn">
//             <Input />
//           </Form.Item>
//           <Form.Item name="GiaBanSP" label="Giá bán">
//             <Input />
//           </Form.Item>
//           <Form.Item name="GiaGiamSP" label="Giá giảm">
//             <Input />
//           </Form.Item>
//           <Form.Item name="ThanhTienSP" label="Thành tiền">
//             <Input />
//           </Form.Item>
          
//         </Form>
//       </Modal>
//     </>
//   );
// }


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
        .delete("http://localhost:5000/api/NVQTxoaNVQLK/" + nv.MaNV)
        .then((response) => {
          console.log(response);
          console.log(nv.MaNV);
        });
    };
    
    const openNotification = () => {
      notification.open({
        message: 'Chúc mừng!',
        description:
          'Bạn đã xóa tài khoản Nhân Viên Quản Lý Kho thành công',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }

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
              //onClick={() => onClickEdit(record)}
            />
            <DeleteTwoTone
              className="delete"
              onClick={() => onClickDelete(record)}
              onClick={openNotification}
            />
          </Space>
        ),
      },
    ];

  return (
    <div>
        <div>
      <Layout>
        <Content>
          <Title level={2} classname="titlename">
            Danh sách Nhân Viên Quản Lý Kho
          </Title>
          <Table columns={columns} dataSource={listNhanVien} pagination={false} />
        </Content>
      </Layout>
    </div>

      {/* <EditModal
          key={editVisible}
          visible={editVisible}
          NhanVien={NhanVien}
          setVisibleFalse={setVisibleFalse}
        />
        <AddModal
          key={addVisible}
          visible={addVisible}
          setVisibleFalse={setVisibleFalse}
        /> */}
    </div>
  );
}

export default NVQLK;
