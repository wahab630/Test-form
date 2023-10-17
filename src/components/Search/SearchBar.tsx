import React from "react";
import { Input } from "antd";
import type { SearchProps } from "../Search";

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const SearchBar: React.FC = ({placeholder}) => (
  <Search
    placeholder={placeholder}
    allowClear
    onSearch={onSearch}
    style={{ width: 200 }}
  />
);

export default SearchBar;
