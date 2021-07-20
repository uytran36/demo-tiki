import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DsKhachHang from './components/dsKhachHang';
import DsNhaBan from './components/dsNhaBan';


const NhaBan = () => {
  return (
    <div>
      <Router>
        <Link to="/dskhachhang">Danh sách khách hàng</Link>
        <Link to="/dsnhaban">Danh sách nhà bán</Link>

        <Switch>
          <Route exact path="/dskhachhang">
            <DsKhachHang />
          </Route>
          <Route exact path="/dsnhaban">
            <DsNhaBan />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NhaBan;
