import React from "react";
import { Input, Layout, Card, Select, Form, Space } from "antd";

const { Content, Sider } = Layout;
const { Option } = Select;

const { Search } = Input;

const SearchNSort = () => {
  return (
    <Layout style={{ background: "#f0f0f0" }}>
      <Search
        placeholder="Search Projects"
        style={{ width: 620, marginLeft: 30, background: "#f0f0f0" }}
      />
      <Space
        style={{
          background: "#f0f0f0",
          paddingLeft: "30px",
          paddingTop: "10px",
        }}
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
    </Layout>
  );
};

export default SearchNSort;
