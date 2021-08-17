<<<<<<< HEAD
import axios from "axios";
import NhaBan from "./pages/nhaban";
import NhanVienGH from "./pages/nhanviengh";
import NhanVienQL from "./pages/nhanvienql";

import Nhaban from "./pages/nhaban";
=======
import { useState, useEffect } from "react";
import NhaBan from "./pages/nhaban";
import KhachHang from "./pages/khachhang";
>>>>>>> 2e8ac464fe66edcca12f1f05ec0238f3759b206a
import NVQT from "./pages/NVQT";

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
      <NhanVienGH />
=======
      {/* <Nhaban /> */}
      {
        route === "nhaban" ? <NhaBan /> : <KhachHang />
      }
      {/* <KhachHang /> */}
>>>>>>> 2e8ac464fe66edcca12f1f05ec0238f3759b206a
    </div>
  );
}

export default App;
