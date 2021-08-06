import { Form, Input, InputNumber, Select, Button } from 'antd';
import { DatePicker } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };

function onChange(date, dateString) {
console.log(date, dateString);
}
  

  const TaoNVQLK = () => {
    return (     
        <Layout>
            <div>
                <Title level="2" align="center">Thêm Nhân Viên Quản Lý Kho</Title>
            </div>
            <div>
            <Form {...layout}>
                <Form.Item label="Nhập mã nhân viên" rules={[{ required: true, message:'Vui lòng nhập mã nhân viên' }]}>
                    <Input />
                </Form.Item>     
                <Form.Item label="Nhập tên nhân viên" rules={[{ required: true,  message:'Vui lòng nhập tên nhân viên' }]}>
                    <Input />
                </Form.Item>    
                <Form.Item name={['user', 'email']} label="Email" 
                rules={[
                        {
                            type: 'email',
                            message: 'Email không đúng định dạng',
                        },
                        {
                            required: true,
                            message: 'Vui lòng nhập Email',
                        },
                        ]}>
                    <Input />
                </Form.Item>
                
                <Form.Item label="Số điện thoại" rules={[{ required: true, message:'Vui lòng nhập số điện thoại' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Ngày sinh" rules={[{ required: true, message:'Vui lòng chọn ngày sinh'}]}>
                    <DatePicker onChange={onChange} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{span: 2}}
                    name="GioiTinh"
                    label="GioiTinh"
                    rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                >
                    <Select placeholder="Chọn giới tính">
                    <Option value="Nam">Nam</Option>
                    <Option value="Nữ">Nữ</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Địa chỉ">
                    <Input.Group compact>
                    <Form.Item
                        name={['thanhPho']}
                        noStyle
                        rules={[{ required: true, message: 'Vui lòng chọn thành phố' }]}
                    >
                        <Input style={{ width: '35%' }} placeholder="Nhập thành phố" />
                    </Form.Item>
                    <Form.Item
                        name={['quan']}
                        noStyle
                        rules={[{ required: true, message: 'Vui lòng chọn quận' }]}
                    >
                        <Input style={{ width: '35%' }} placeholder="Nhập quận" />
                    </Form.Item>
                    <Form.Item
                        name={['phuong']}
                        noStyle
                        rules={[{ required: true, message: 'Vui lòng chọn phường' }]}
                    >
                        <Input style={{ width: '30%' }} placeholder="Nhập phường" />
                    </Form.Item>
                    <Form.Item
                        name={['duong']}
                        noStyle
                        rules={[{ required: true, message: 'Vui lòng nhập tên đường' }]}
                    >
                        <Input placeholder="Nhập tên đường" />
                    </Form.Item>
                    </Input.Group>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" size="middle">
                    Xác nhận
                </Button>
                </Form.Item>
            </Form>
            </div>
        </Layout>  
    );
  };
export default TaoNVQLK;