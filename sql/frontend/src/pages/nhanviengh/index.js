import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { render } from "react-dom";
import DangNhapGH from "./components/dangnhapgh";
import DanhSachDH from "./components/danhsachDH";
import ChiTietDH from "./components/chitietDH";
class NhanVienGH extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/login"><DangNhapGH/></Route>
                    <Route exact path="/danhsachdh"><DanhSachDH/></Route>
                    <Route exact path="/chitiet"><ChiTietDH/></Route>
                </div>
            </Router>
        );
    };
}
export default NhanVienGH;
