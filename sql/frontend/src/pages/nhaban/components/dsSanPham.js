import React, { useContext, useState, useEffect, useRef } from "react";
import {
  Table,
  Input,
  Button,
  Popconfirm,
  Form,
  Typography,
  Row,
  Col,
} from "antd";
const EditableContext = React.createContext(null);
const { Title } = Typography;
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class DoanhThu extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Mã Sản Phẩm",
        dataIndex: "MaSP",
        width: "10%",
      },
      {
        title: "Tên Sản Phẩm",
        dataIndex: "TenSP",
        editable: true,
      },
      {
        title: "Số lượng tồn",
        dataIndex: "SLTon",
        editable: true,
      },
      {
        title: "Loại Sản Phẩm",
        dataIndex: "LoaiSP",
        editable: true,
      },
      {
        title: "Giá Bán",
        dataIndex: "GiaBan",
        editable: true,
      },
      {
        title: "Giá Giảm",
        dataIndex: "GiaGiam",
        editable: true,
      },
      {
        title: "Thành Tiền",
        dataIndex: "TTien",
      },
      {
        title: "Hoa Hồng",
        dataIndex: "HoaHog",
        editable: true,
      },
      {
        title: "Mô tả",
        dataIndex: "MoTa",
        width: "20%",
        editable: true,
      },
      {
        title: "",
        dataIndex: "operation",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          MaSP: "0",
          TenSP: "Edward King 0",
          SLTon: "32",
          LoaiSP: "abc",
          GiaBan: "32",
          GiaGiam: "32",
          TTien: "32",
          HoaHog: "32",
          MoTa: "32",
        },
        {
          MaSP: "1",
          TenSP: "Edward King 0",
          SLTon: "32",
          LoaiSP: "abc",
          GiaBan: "32",
          GiaGiam: "32",
          TTien: "32",
          HoaHog: "32",
          MoTa: "32",
        },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: "32",
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <div>
          <Row>
            <Col>
              <Title level={2}>Danh Sách Sản Phẩm</Title>
            </Col>
            <Col>
              <Button type="primary" className="btnCreateDSSP">
                Tạo Sản Phẩm
              </Button>
            </Col>
          </Row>
        </div>
        <div></div>
        <div>
          <Table
            components={components}
            rowClassName={() => "editable-row"}
            bordered
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>
    );
  }
}

export default DoanhThu;
