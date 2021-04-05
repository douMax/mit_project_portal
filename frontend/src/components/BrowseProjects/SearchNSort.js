import React from "react";

import { Layout, Card, Select, Form, Space } from "antd";

const { Content, Sider } = Layout;
const { Option } = Select;

const SearchNSort = () => {
  return (
    <Space
      style={{ background: "#f0f0f0", paddingLeft: "30px", paddingTop: "10px" }}
    >
      <Form.Item label="Project Status: ">
        <Select style={{ width: 200 }}>
          <Option value="Assigned">Assigned</Option>
          <Option value="Completed">Completed</Option>
          <Option value="Open">Open</Option>
          <Option value="WFApproval">Waiting For Approval</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Trimester: ">
        <Select style={{ width: 60 }}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Sort By: ">
        <Select style={{ width: 120 }}>
          <Option value="date">Date</Option>
          <Option value="status">Status</Option>
          <Option value="trimester">Trimester</Option>
        </Select>
      </Form.Item>
    </Space>
  );
};

export default SearchNSort;
