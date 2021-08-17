import { useState, useEffect } from "react";
import NhaBan from "./pages/nhaban";
import KhachHang from "./pages/khachhang";
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
      {/* <Nhaban /> */}
      {
        route === "nhaban" ? <NhaBan /> : <KhachHang />
      }
      {/* <KhachHang /> */}
    </div>
  );
}

export default App;
