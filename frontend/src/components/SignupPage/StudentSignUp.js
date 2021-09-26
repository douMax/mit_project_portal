import React, { useEffect, useState } from "react";

import { Form, Radio, Button, Col, Row, Space } from "antd";
import CommonFields from "./CommonFields";
import { useDispatch } from "react-redux";
import { getAllUsersData, registerUser, signupUser } from "../../redux/authRedux/actions";
import { useHistory } from "react-router-dom";

const StudentSignUp = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [isRegister, setIsRegister] = useState(false);

  const handleFinish = async (values) => {

    const { first_name, last_name, email, mit_email, mit_student_id, phone, username, password, is_enrolled_in_course, is_enrolled_in_capstone_projects } = values;
    const payload = {
      first_name,
      last_name,
      email,
      mit_email,
      mit_student_id,
      phone,
      username,
      is_enrolled_in_capstone_projects,
      is_enrolled_in_course
    };
    // await dispatch(updateUser({ is_first_time_visited: false }, _id));
    await dispatch(registerUser({ username: username, role: "student", is_first_time_visited: false, password: password }));
    await dispatch(signupUser(payload, "student"));
    await dispatch(getAllUsersData());
    await setIsRegister(true);
  };

  useEffect(() => {
    if (isRegister) {
      var timer = setTimeout(() => {
        history.push("/dashboard/admin-dashboard");
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    }
  }, [isRegister])

  return (
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onFinish={handleFinish}
    >
      <Row gutter={36}>
        <Col span={12}>
          <CommonFields />
          <Form.Item label="Course Enrolment" name="is_enrolled_in_course"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}>
            <Radio.Group
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Capstone Proj. Enrolment"
            name="is_enrolled_in_capstone_projects"
            rules={[
              {
                required: true,
                message: "Field Required",
              },
            ]}
          >
            <Radio.Group
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
            />
          </Form.Item>
        </Col>
        {/* <Col span={12}>
          <Form.Item name="profilePic">
            <ProfilePicUploader />
          </Form.Item>
        </Col> */}
      </Row>
      <Form.Item label=" " colon={false}>
        <Space>
          <Button danger onClick={event => history.goBack()}>
            Cancel
          </Button>
          <Button type="danger" htmlType="Submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default StudentSignUp;
