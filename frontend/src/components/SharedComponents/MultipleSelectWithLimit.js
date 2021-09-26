import React from "react";
import { Select, message } from "antd";

const { Option } = Select;

const MultipleSelectWithLimit = ({ value, onChange, max, options }) => {
  const handleChange = (value) => {
    if (value.length > max) {
      value.pop();
      message.warning(`No more than ${max} items are allowed`);
    }
    onChange(value);
  };
  return (
    <Select
      mode="multiple"
      style={{ width: "100%" }}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={handleChange}
    >
      {options &&
        options.map((option) => {
          return (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          );
        })}
    </Select>
  );
};

export default MultipleSelectWithLimit;
