import axios from "axios";
import NhanVienGH from "./pages/nhanviengh";
import NhanVienQL from "./pages/nhanvienql";
import { useState, useEffect } from "react";
import NhaBan from "./pages/nhaban";
import KhachHang from "./pages/khachhang";
import NVQT from "./pages/NVQT";
import NVGH from "./pages/nhanviengh";

function App() {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const params = path.split("/")[1];
    setRoute(params);
  }, []);

  return (
    <div>
<<<<<<< HEAD
      {/* <Nhaban /> */}
      {
        // route === "nhaban" ? <NhaBan /> : <KhachHang />
      }
      {/* <KhachHang /> */}
      <NVGH/>
=======
      {route === "nhaban" ? (
        <NhaBan />
      ) : route === "QT" ? (
        <NVQT />
      ) : (
        <KhachHang />
      )}
>>>>>>> a2c59b5d358e5746f956e2a6732bfa138e987285
    </div>
  );
}

export default App;
