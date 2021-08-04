import React from "react";
import { Input, Card, Select, Space } from "antd";

const { Option } = Select;

const { Search } = Input;

const filterStyle = { width: "100px" };

const SearchNSort = () => {
  return (
    <Card>
      <Search placeholder="Search Projects" width={100} />
      <Space style={{ marginTop: "10px" }}>
        <span>Status</span>
        <Select style={filterStyle}>
          <Option value="Assigned">Assigned</Option>
          <Option value="Completed">Completed</Option>
          <Option value="Open">Open</Option>
        </Select>
        <span>Trimester</span>
        <Select style={filterStyle}>
          <Option value="1">2021-T2</Option>
          <Option value="2">2021-T1</Option>
          <Option value="3">2020-T3</Option>
        </Select>
        <span>Sort by</span>

        <Select style={filterStyle}>
          <Option value="date">Date</Option>
          <Option value="status">Status</Option>
          <Option value="trimester">Trimester</Option>
        </Select>
      </Space>
    </Card>
  );
};

export default SearchNSort;
