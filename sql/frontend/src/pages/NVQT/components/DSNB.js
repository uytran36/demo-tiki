import { Table, Pagination, Space, Button, Input, Form, Select, DatePicker, Modal } from "antd";
import { Layout } from "antd";
import { Typography } from "antd";
import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import moment from "moment";

const { Option } = Select;
const dateFormat = "YYYY-MM-DD";
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
    let TenNhaBan = form.getFieldValue("TenNhaBan");
    let SDTNhaBan = form.getFieldValue("SDTNhaBan");
    let DiaChiNhaBan = form.getFieldValue("DiaChiNhaBan");
    let MatKhauNhaBan = form.getFieldValue("MatKhauNhaBan");

    const info = {
      TenNhaBan: TenNhaBan === undefined ? props.NhaBan.TenNhaBan : TenNhaBan,
      SDTNhaBan: SDTNhaBan === undefined ? props.NhaBan.SDTNhaBan : SDTNhaBan,
      DiaChiNhaBan: DiaChiNhaBan === undefined ? props.NhaBan.DiaChiNhaBan : DiaChiNhaBan,
      MatKhauNhaBan: MatKhauNhaBan === undefined ? props.NhaBan.MatKhauNhaBan : MatKhauNhaBan,
    };

    axios
      .put("http://localhost:5000/api/NVQT/editNB/" + props.NhaBan.MaNhaBan,
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
        // props.setListNhaBan(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      axios.get("http://localhost:5000/api/NVQT/listNhaBan/" + page).then((res) => {
            setListNhaBan(res.data);
        }).catch((err) => {
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
                <Title level="3" align="center">Sửa Nhà Bán</Title>
            </div>
            <div>
            <Form {...layout} form={form}>  
                <Form.Item name="TenNhaBan" label="Nhập tên nhà bán"  >
                    <Input defaultValue={props.NhaBan.TenNhaBan} />
                </Form.Item>    
                <Form.Item name="EmailNhaBan" label="Email" >
                    <Input defaultValue={props.NhaBan.EmailNhaBan} disabled={true} />
                </Form.Item>
                
                <Form.Item
                name="MatKhauNhaBan"
                label="Mật khẩu"
                rules={[
                    {
                    required: true,
                    message: "Xin vui lòng nhập mật khẩu!",
                    },
                ]}
                hasFeedback
                >
                <Input.Password defaultValue = {props.NhaBan.MatKhauNhaBan} />
                </Form.Item>

                <Form.Item
                name="confirm"
                label="Xác nhận mật khẩu"
                dependencies={["MatKhauNhaBan"]}
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
                <Input.Password defaultValue = {props.NhaBan.MatKhauNhaBan}/>
                </Form.Item>

                <Form.Item name="SDTNhaBan" label="Số điện thoại" >
                    <Input defaultValue={props.NhaBan.SDTNhaBan} />
                </Form.Item>
                <Form.Item name="DiaChiNhaBan" label="Địa chỉ" >
                    <Input defaultValue={props.NhaBan.DiaChiNhaBan} />
                </Form.Item>
            </Form>
            </div>
        </Layout>  
      </Modal>
    </>
  );
}



function DSNB() {
    const [listNhaBan, setListNhaBan] = useState([]);
    const [current, setCurrent] = useState(1);
    const [amountNB, setAmountNB] = useState(0);
    const [NhaBan, setNhaBan] = useState({});
    const [editVisible, setEditVisible] = useState(false);
    const [addVisible, setAddVisible] = useState(false);

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/NVQT/listNhaBan/1")
          .then((res) => {
            setListNhaBan(res.data);
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .get("http://localhost:5000/api/nhaban/slnb")
          .then((res) => {
            setAmountNB(res.data[0].slNB);
          })
          .catch((err) => {
            console.log(err);
          })
      }, []);

    const onChange = (page) => {
        setCurrent(page);
        axios.get("http://localhost:5000/api/NVQT/listNhaBan/" + page).then((res) => {
            setListNhaBan(res.data);
        }).catch((err) => {
          console.log(err);
        });
    };

    const onClickEdit = (item) => {
      setNhaBan(item);
      setEditVisible(true);
    };
  

    const setVisibleFalse = () => {
      setEditVisible(false);
      setAddVisible(false);
    };

    const columns = [
      {
        title: "Mã Nhà Bán",
        dataIndex: "MaNhaBan",
        key: "MaNhaBan",
      },
      {
        title: "Tên Nhà Bán",
        key: "TenNhaBan",
        dataIndex: "TenNhaBan",
      },
      {
        title: "Địa chỉ Nhà Bán",
        key: "DiaChiNhaBan",
        dataIndex: "DiaChiNhaBan",
      },
      {
        title: "Email Nhà Bán",
        key: "EmailNhaBan",
        dataIndex: "EmailNhaBan",
      },
      {
        title: "SĐT",
        key: "SDTNhaBan",
        dataIndex: "SDTNhaBan",
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
            Danh sách nhà bán
          </Title>
          <Table columns={columns} dataSource={listNhaBan} pagination={false} />
        </Content>
      </Layout>
    </div>

    <div className="paging" style={{ marginLeft: 500 }}>
        <Pagination
        current={current}
        pageSize={10}
        total={amountNB}
        onChange={onChange}
        showSizeChanger={false}
        />
    </div>
