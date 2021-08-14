import { Form, Input, InputNumber, Select, Button, notification } from 'antd';
import { DatePicker } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';
import moment from "moment";
import axios from "axios";
import { useHistory } from "react-router-dom";



const { Title } = Typography;
const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };

  const TaoNVQLK = () => {
    const history = useHistory();

    function onChange(date, dateString) {
        console.log(date, dateString);
        }

    const onFinish = (values) => {
        
        const info = {
          Email: values.email,
          HoTen: values.name,
          NgaySinh: moment(values.ngaySinh).format("MM-DD-YYYY"),
          NgayVaoLam: moment(values.ngayVaolam).format("MM-DD-YYYY"),
          SDT: values.sdt,
          GioiTinh: values.gioiTinh,
          SoNha: values.soNha,
          Duong: values.duong,
          Phuong: values.phuong,
          Quan: values.quan,
          ThanhPho: values.thanhPho,
          MatKhau: values.password,
          Luong: parseInt(values.luong),
          HeSoLuong: parseFloat(values.hsl),
        };
        console.log(info);
        axios
          .post("http://localhost:5000/api/NVQT/taoNVQLK", JSON.stringify(info), {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const openNotification = () => {
        notification.open({
          message: 'Chúc mừng!',
          description:
            'Bạn đã tạo tài khoản Nhân Viên Quản Lý Kho thành công',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };
    
    return (     
        <Layout>
            <div>
                <Title level="2" align="center">Thêm Nhân Viên Quản Lý Kho</Title>
            </div>
            <div>
            <Form {...layout} onFinish={onFinish}>  
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
                label="Confirm Password"
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

                <Form.Item name="ngaySinh" wrapperCol={{span: 3}} label="Ngày sinh" >
                    <DatePicker onChange={onChange} />
                </Form.Item>

                <Form.Item name="ngayVaoLam" wrapperCol={{span: 3}} label="Ngày vào làm" >
                    <DatePicker onChange={onChange} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{span: 3}}
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

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" size="middle" onClick={openNotification}>
                    Xác nhận
                </Button>
                </Form.Item>
            </Form>
            </div>
        </Layout>  
    );
  };
export default TaoNVQLK;