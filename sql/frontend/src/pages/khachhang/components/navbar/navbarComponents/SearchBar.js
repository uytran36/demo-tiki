import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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
  const onSearch = (value) => console.log(value);

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
