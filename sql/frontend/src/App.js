import axios from "axios";
import NhanVienGH from "./pages/nhanviengh";
import NhanVienQL from "./pages/nhanvienql";
import { useState, useEffect } from "react";
import NhaBan from "./pages/nhaban";
import KhachHang from "./pages/khachhang";
import NVQT from "./pages/NVQT";
import NVGH from "./pages/nhanviengh";
import NVQL from "./pages/nhanvienql";

function App() {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const params = path.split("/")[1];
    setRoute(params);
  }, []);

  return (
    <div>
      {/* <Nhaban /> */}
      {
        // route === "nhaban" ? <NhaBan /> : <KhachHang />
      }
      {/* <KhachHang /> */}
      <NVGH/>
    </div>
  );
}

export default App;
