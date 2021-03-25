import React from 'react';

import {
    Form,
    Input,
    Button,
    Radio,
    Space,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';

const StaffSignUp = () => {
    return(
        <Form
        labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 9,
          }}
          layout="horizontal"
        >
            <Form.Item label="Job Position">
                <Select>
                    <Select.Option value="Proffessor">Professor</Select.Option>
                    <Select.Option value="Assitant.Prof">Assitant Prof</Select.Option>
                    <Select.Option value="Lecturer">Lecturer</Select.Option>
                    <Select.Option value="Assitant Lecturer">Assistant Lecturer</Select.Option>
                    <Select.Option value="Tutor">Tutor</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Interested Topics">
                <Input />
            </Form.Item>
        </Form>
    );
};

export default StaffSignUp;