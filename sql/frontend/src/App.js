import axios from "axios";
import NhaBan from "./pages/nhaban";
import NhanVienGH from "./pages/nhanviengh";
import NhanVienQL from "./pages/nhanvienql";
function App() {
  const callAPI = () => {
    //get post put delete
    axios
      .get("http://localhost:5000/testapi")
      .then((res) => console.log(res.data));
  };

  callAPI();

  return (
    <div>
      <NhanVienQL/>
      {/* <NhaBan/> */}
    </div>
  );
}

export default App;
