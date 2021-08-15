import { Form, Input, InputNumber, Button } from 'antd';
import { Radio } from 'antd';
import { Typography } from 'antd';
import { DatePicker, Space } from 'antd';
import { Layout } from 'antd';
const { Title } = Typography;

function onChange(date, dateString) {
  console.log(date, dateString);
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const Promotion = () => {
  
    return (     
        <Layout>
            <div>
                <Title level="2" align="center">Tạo mã khuyến mãi</Title>
            </div>
            <div>
            <Form {...layout} validateMessages={validateMessages}>
                <Form.Item label="Nhập mã khách hàng" rules={[{ required: true }]}>
                <Input />
                </Form.Item>     
                <Form.Item label="Chọn số tiền khuyến mãi (Đơn vị 1000đ)">
                    <InputNumber min={1} />
                </Form.Item>  
                <Form.Item label="Số lượng" rules={[{ required: true }]}>
                <InputNumber min={1} max={20} />
                </Form.Item>
                <Form.Item label="Ngày hết hạn" rules={[{ required: true }]}>
                    <DatePicker onChange={onChange} />
                </Form.Item>
                
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" size="middle">
                    Xem danh sách khách hàng
                </Button>
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

  export default Promotion;