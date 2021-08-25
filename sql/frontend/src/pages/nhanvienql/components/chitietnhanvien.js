import {useState, useEffect} from "react";
import { Form, Input, Button } from "antd";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import moment from "moment";
const ChiTietNV = ({deleted, setDeleted}) => {
    const [componentSize, setComponentSize] = useState('default');
    const [ctnv, setCtnv] = useState(JSON.parse(window.localStorage.getItem("ctnv")));
    const [form] = Form.useForm()
    const history = useHistory();
    // useEffect(() => {
    //   axios
    //     .get("http://localhost:5000/api/NVQL/ctnv/" + JSON.parse(window.localStorage.getItem("MaNV")))
    //     .then((res) => {
    //       console.log(res.data)
    //       setCtnv(res.data[0])
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   }, []);
    const onFinish = () => {
      let Ten = form.getFieldValue("Ten");
      let Sdt = form.getFieldValue("Sdt");
      let GioiTinh = form.getFieldValue("GioiTinh");
      let SoNha = form.getFieldValue("SoNha");
      let Duong = form.getFieldValue("Duong");
      let Phuong = form.getFieldValue("Phuong");
      let Quan = form.getFieldValue("Quan");
      let ThanhPho = form.getFieldValue("ThanhPho");
      let MatKhau = form.getFieldValue("MatKhau");
      let Luong = form.getFieldValue("Luong");
      let MaQL = form.getFieldValue("MaQL");

      const info = {
        Ten: Ten === undefined ? ctnv.Ten : Ten,
        Sdt: Sdt === undefined ? ctnv.Sdt : Sdt,
        GioiTinh: GioiTinh === undefined ? ctnv.GioiTinh : GioiTinh,
        SoNha: SoNha === undefined ? ctnv.SoNha : SoNha,
        Duong: Duong === undefined ? ctnv.Duong : Duong,
        Phuong: Phuong === undefined ? ctnv.Phuong : Phuong,
        Quan: Quan === undefined ? ctnv.Quan : Quan,
        ThanhPho: ThanhPho === undefined ? ctnv.ThanhPho : ThanhPho,
        MatKhau: MatKhau === undefined ? ctnv.MatKhau : MatKhau,
        Luong: Luong === undefined ? parseInt(ctnv.Luong) : parseInt(Luong),
        MaQL: MaQL === undefined ? parseInt(ctnv.MaQL) : parseInt(MaQL)
      }
      console.log(JSON.stringify(info))
      axios
      .put("http://localhost:5000/api/NVQL/updategh/" + window.localStorage.getItem("MaNV"), JSON.stringify(info), 
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
        alert(e + " Thay đổi thất bại");
      })
    }
    
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    const deletenvgh = () => {
      axios
      .delete("http://localhost:5000/api/NVQL/deletegh/" + JSON.parse(window.localStorage.getItem("MaNV")))
      .then((res) => {
        window.localStorage.removeItem("MaNV");
        setDeleted(!deleted)
        history.push("/ql")
      })
      .catch((e) => {
        console.log(e)
      })
    }

    return (
      <div>
      <Form
        name="chitietnv"
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
          <Input defaultValue={ctnv.MaNV} disabled={true}/>
        </Form.Item>
        <Form.Item label="Tên Nhân viên" name="Ten">
          <Input defaultValue={ctnv.Ten}/>
        </Form.Item>
        <Form.Item label="Giới Tính" name="GioiTinh">
          <Input defaultValue={ctnv.GioiTinh}/>
        </Form.Item>
        <Form.Item label="Số điện thoại" name="Sdt">
          <Input defaultValue={ctnv.Sdt}/>
        </Form.Item>
        <Form.Item label="Ngày sinh" name="NgaySinh">
          <Input defaultValue={ctnv.NgaySinh} disabled={true}/>
        </Form.Item>
        <Form.Item label="Số nhà" name="SoNha">
          <Input defaultValue={ctnv.SoNha}/>
        </Form.Item>
        <Form.Item label="Đường" name="Duong">
          <Input defaultValue={ctnv.Duong}/>
        </Form.Item>
        <Form.Item label="Phường" name="Phuong">
          <Input defaultValue={ctnv.Phuong}/>
        </Form.Item>
        <Form.Item label="Quận" name="Quan">
          <Input defaultValue={ctnv.Quan}/>
        </Form.Item>
        <Form.Item label="Thành Phố" name="ThanhPho">
          <Input defaultValue={ctnv.ThanhPho}/>
        </Form.Item>
        <Form.Item label="Email" name="Email">
          <Input defaultValue={ctnv.Email} disabled={true}/>
        </Form.Item>
        <Form.Item label="Mật Khẩu" name="MatKhau">
          <Input defaultValue={ctnv.MatKhau}/>
        </Form.Item>
        <Form.Item label="Ngày Vào Làm" name="NgayVaoLam">
          <Input defaultValue={ctnv.NgayVaoLam} disabled={true}/>
        </Form.Item>
        <Form.Item label="Lương" name="Luong">
          <Input defaultValue={ctnv.Luong}/>
        </Form.Item>
        <Form.Item label="Đơn Hàng đã giao" name="DonHangDaGiao">
          <Input defaultValue={ctnv.DonHangDaGiao} disabled={true}/>
        </Form.Item>
        <Form.Item label="Mã người Quản lý" name="MaQL">
          <Input defaultValue={ctnv.MaQL}/>
        </Form.Item>
        
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
            Save
            </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="button" onClick={deletenvgh}>
              Delete 
            </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
  
  export default ChiTietNV;
  