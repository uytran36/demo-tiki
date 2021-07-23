import axios from "axios";
import Temp from "./pages/khachhang";

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
      <Temp />
    </div>
  );
}

export default App;
