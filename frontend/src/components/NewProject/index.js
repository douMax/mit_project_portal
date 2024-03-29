import React, { useState } from "react";
import {
  Form,
  Select,
  Input,
  Row,
  Col,
  Button,
  Space,
} from "antd";
import { CheckCircleTwoTone } from '@ant-design/icons';
import { LOCATIONS, TEMP_TOPICS, TRIMESTER } from "../../utils/APP_CONSTANTS";
import MultipleSelectWithLimit from "../SharedComponents/MultipleSelectWithLimit";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addProject } from "../../actions/projects";
import { getClientProjectsData } from "../../redux/authRedux/actions";

const NewProject = () => {
  //(projects);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user, auth_user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFinish = async (values) => {

    const { _id } = user;
    const { role } = auth_user;

    if (role === 'client') {
      const newPayload = { ...values, status: "pending", clientId: _id, year: "2021", assigned: [], eoi: [] };
      // const payload = [...user.projects, newPayload];
      // (payload, newPayload);
      await addProject(newPayload);
      await dispatch(getClientProjectsData(_id));
    }
    else if (role === 'staff') {
      const newPayload = { ...values, status: "open", year: "2021", assigned: [], eoi: [] };
      await addProject(newPayload);
    }

    setIsSubmitted(true);

    setTimeout(() => {
      history.goBack();
    }, 2000);

  };

  return (
    <div style={{ height: "80vh" }}>
      {!isSubmitted ? (<>
        <Form
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 20,
          }}
          layout="vertical"
          labelAlign='left'
          onFinish={handleFinish}
        >
          <h1>New Project Proposal</h1>
          <Row style={{ fontWeight: "bold" }}>
            <Col span={12}>
              <Form.Item label="Project Title" name="title"
                rules={[
                  {
                    required: true,
                    message: "Field Required"
                  },
                ]} >
                <Input placeholder="Enter your project title here..." />
              </Form.Item>
              <Form.Item label="Select Trimester" name="trimester"
                rules={[
                  {
                    required: true,
                    message: "Field Required"
                  },
                ]}>
                <Select options={TRIMESTER} id="trimester" />
              </Form.Item>
              <Form.Item
                label="Background and Rationale for Project"
                name="background"
                rules={[
                  {
                    required: true,
                    message: "Field Required"
                  },
                ]}
              >
                <Input.TextArea rows={8} placeholder="Briefly describe about your project" />
              </Form.Item>
              <Form.Item label="Project Resources" name="resources"
                rules={[
                  {
                    required: true,
                    message: "Field Required"
                  },
                ]}>
                <Input.TextArea rows={3} placeholder="Enter the required resources" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Project Topics" name="topics"
                rules={[
                  {
                    required: true,
                    message: "Field Required"
                  },
                ]}>
                <MultipleSelectWithLimit max={3} options={TEMP_TOPICS} />
              </Form.Item>
              <Form.Item label="Project Goals and Objectives" name="objectives"
                rules={[
                  {
                    required: true,
                    message: "Field Required"
                  },
                ]}>
                <Input.TextArea rows={4} placeholder="Project Goals and Objectives" />
              </Form.Item>
              <Form.Item label="Abstract information" name="abstract"
                rules={[
                  {
                    required: true,
                    message: "Field Required"
                  },
                ]}>
                <Input.TextArea rows={4} placeholder="More information related to your project in brief" />
              </Form.Item>
              {/* <Form.Item label="Is this an open project?" name="assigned">
              <ProjectOption />
            </Form.Item> */}
              <Form.Item label="Preferred location" name="location"
                rules={[
                  {
                    required: true,
                    message: "Field Required"
                  },
                ]}>
                <Select options={LOCATIONS} id="location" />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button
                    type
                    danger
                    onClick={event => history.goBack()}
                  >
                    Cancel
                  </Button>
                  <Button type="danger" htmlType="submit">
                    Submit
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </>) : (
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", lineHeight: "80vh" }}>
          <h1>New project proposal submitted successfully <span>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </span></h1>
        </div>
      )}
    </div>
  );
};

export default NewProject;
