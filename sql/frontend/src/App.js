import axios from "axios";

import Nhaban from "./pages/nhaban";
import KhachHang from './pages/khachhang'

function App() {
  // const callAPI = () => {
  //   //get post put delete
  //   axios
  //     .get("http://localhost:5000/testapi")
  //     .then((res) => console.log(res.data));
  // };

  // callAPI();

  return (
    <div>
      <KhachHang />
    </div>
  );
}

export default App;
