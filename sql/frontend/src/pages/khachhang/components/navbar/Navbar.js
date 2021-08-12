/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import LogoTiki from "../../logoTiki.png";
import "./Navbar.css";
import DropdownComponent from "./navbarComponents/Dropdown";
import SearchBar from "./navbarComponents/SearchBar";
import UserComponent from "./navbarComponents/User";
import Cart from "./navbarComponents/Cart";
import AuthUser from "./navbarComponents/AuthUser";

export default function Navbar({ auth, setAuth }) {


  return (
    <div>
      <Row>
        <Col flex="300px"></Col>
        <Col flex="70px">
          <div className="logo">
            <Link to="/">
              <img src={LogoTiki} alt="logo tiki" width="50px" />
            </Link>
          </div>
        </Col>
        <Col flex="150px" className="dropdown-danhmuc">
          <DropdownComponent />
        </Col>
        <Col flex="auto" className="searchbar">
          <SearchBar />
        </Col>
        <Col flex="150px">
          {auth === null ? (
            <UserComponent />
          ) : (
            <AuthUser user={auth} setAuth={setAuth} />
          )}
        </Col>
        <Col flex="150px">
          <Cart />
        </Col>
        <Col flex="300px"></Col>
      </Row>
    </div>
  );
}
