import {useState} from "react";
import { Form, Input,Button} from "antd";
import axios from 'axios';
import {useHistory } from "react-router-dom";
import moment from "moment";
const ThemNV = ({deleted, setDeleted}) => {
    const [componentSize, setComponentSize] = useState('default');
    const [form] = Form.useForm()
    const history = useHistory()

    const onFinish = () => {
      let MaNV = form.getFieldValue("MaNV");
      let Ten = form.getFieldValue("Ten");
      let Sdt = form.getFieldValue("Sdt");
      let GioiTinh = form.getFieldValue("GioiTinh");
      let NgaySinh = form.getFieldValue("NgaySinh");
      let SoNha = form.getFieldValue("SoNha");
      let Duong = form.getFieldValue("Duong");
      let Phuong = form.getFieldValue("Phuong");
      let Quan = form.getFieldValue("Quan");
      let ThanhPho = form.getFieldValue("ThanhPho");
      let Email = form.getFieldValue("Email");
      let MatKhau = form.getFieldValue("MatKhau");
      let NgayVaoLam = form.getFieldValue("NgayVaoLam");
      let Luong = form.getFieldValue("Luong");
      let MaQL = form.getFieldValue("MaQL");

      const info = {
        MaNV: MaNV,
        Ten: Ten,
        Sdt: Sdt,
        GioiTinh: GioiTinh,
        NgaySinh: moment(NgaySinh).format("MM-DD-YYYY"),
        SoNha: SoNha,
        Duong: Duong,
        Phuong: Phuong,
        Quan: Quan,
        ThanhPho: ThanhPho,
        Email: Email,
        MatKhau: MatKhau,
        NgayVaoLam: moment(NgayVaoLam).format("MM-DD-YYYY"),
        Luong: parseInt(Luong),
        MaQL: parseInt(MaQL)
      }
      console.log(JSON.stringify(info))
      axios
      .post("http://localhost:5000/api/NVQL/newgh", JSON.stringify(info), 
      {
        headers: {
          "Content-Type": "application/json",
            },
        })
      .then((res) => {
        setDeleted(!deleted)
        history.push("/ql")
      })
      .catch((e) => {
        alert("Thêm mới thất bại");
      })
    }
    
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };

    return (
      <div>

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        form={form}
        onFinish={onFinish}
      >
        
        <Form.Item label="Mã Nhân viên" name="MaNV">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Tên Nhân viên" name="Ten">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Giới Tính" name="GioiTinh">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Số điện thoại" name="Sdt">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Ngày sinh" name="NgaySinh">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Số nhà" name="SoNha">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Đường" name="Duong">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Phường" name="Phuong">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Quận" name="Quan">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Thành Phố" name="ThanhPho">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Email" name="Email">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Mật Khẩu" name="MatKhau">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Ngày Vào Làm" name="NgayVaoLam">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Lương" name="Luong">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Đơn Hàng đã giao" name="DonHangDaGiao">
          <Input required={true}/>
        </Form.Item>
        <Form.Item label="Mã người Quản lý" name="MaQL">
          <Input required={true}/>
        </Form.Item>
        
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
            Add
            </Button>
            <Button type="ghost" htmlType="reset">
            Reset
            </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
  
  export default ThemNV;
  