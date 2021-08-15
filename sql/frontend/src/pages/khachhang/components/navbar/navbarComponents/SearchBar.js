import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Search } = Input;
const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#fff",
    }}
  />
);

const SearchBar = () => {
  const history = useHistory();

  const onSearch = (value) => {
    if (value !== "") {
      history.push("/search/" + value);
    } else {
      history.push("/");
    }
  };

  return (
    <Search
      placeholder="Tìm sản phẩm mong muốn"
      allowClear
      onSearch={onSearch}
      enterButton="Search"
      suffix={suffix}
      size="large"
      style={{ width: 200 }}
    />
  );
};

export default SearchBar;
