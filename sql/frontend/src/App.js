import axios from "axios";

import Nhaban from "./pages/nhaban";
import NVQT from "./pages/NVQT";

function App() {
  const callAPI = () => {
    //get post put delete
    axios
      .get("http://localhost:5000/testapi")
      .then((res) => console.log(res.data));
  };

  // callAPI();

  return (
    <div>
      <Nhaban />
      <NVQT />
    </div>
  );
}

export default App;
