import { Table, Form, InputNumber, Modal} from "antd";
import { Layout, Space } from "antd";
import { Typography } from "antd";
import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { EditTwoTone } from "@ant-design/icons";

const { Title } = Typography;
const { Content } = Layout;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function EditModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(props.visible);
  const [form] = Form.useForm();
  const handleCancel = () => {
    setIsModalVisible(false);
    props.setVisibleFalse();
  };

  const handleOk = () => {
    let MaNV = form.getFieldValue("MaNV");

    const info = {
      MaNVmoi: MaNV,
    };

    axios
        .put("http://localhost:5000/api/NVQT/UpdateAuthNVQLK/" + props.Kho.MaNVQL,
          JSON.stringify(info),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          axios
          .get("http://localhost:5000/api/NVQT/dsKho/")
          .then((res) => {
            props.setListKho(res.data);
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
                <Title level="3" align="center">Sửa Nhân Viên Quản Lý của Kho</Title>
            </div>
            <div>
            <Form {...layout} form={form}>  
                <Form.Item name="MaNV" label="Nhập nhân viên thay thế" >
                    <InputNumber />
                </Form.Item>    
            </Form>
            </div>
        </Layout>  
      </Modal>
    </>
  );
}

function DSKho() {
    const [listKho, setListKho] = useState([]);
    const [Kho, setKho] = useState({});
    const [editVisible, setEditVisible] = useState(false);

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/NVQT/dsKho/")
          .then((res) => {
            setListKho(res.data);
          })
          .catch((err) => {
            console.log(err);
          });

      }, []);


      const onClickEdit = (item) => {
        setKho(item);
        setEditVisible(true);
      };

      const setVisibleFalse = () => {
        setEditVisible(false);
      };

      const columns = [
        {
          title: "Mã Kho",
          dataIndex: "MaKho",
          key: "MaKho",
        },
        {
          title: "Mã Nhân Viên Quản Lý",
          key: "MaNVQL",
          dataIndex: "MaNVQL",
        },
        {
          title: "Địa chỉ",
          key: "DiaChi",
          dataIndex: "DiaChi",
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
            Danh sách kho
          </Title>
          <Table columns={columns} dataSource={listKho} pagination={false} />
        </Content>
      </Layout>
    </div>
    <EditModal
          key={editVisible}
          visible={editVisible}
          Kho={Kho}
          setListKho={setListKho}
          setVisibleFalse={setVisibleFalse}
        />
    </div>
  );
}

export default DSKho;
