import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { render } from "react-dom";
import DangNhapQL from "./components/dangnhapql";
import ChuyenKho from "./components/chuyenkho";
import SpTrongKho from "./components/sanphamtrongkho";
import QlDonHang from "./components/quanlydonhang";
class NhanVienQL extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/loginql"><DangNhapQL/></Route>
                    <Route exact path="/chuyenkho"><ChuyenKho/></Route>
                    <Route exact path="/spkho"><SpTrongKho/></Route>
                    <Route exact path="/quanlynv"></Route>
                    <Route exact path="/quanlydh"><QlDonHang/></Route>
                </div>
            </Router>
        );
    };
}
export default NhanVienQL;