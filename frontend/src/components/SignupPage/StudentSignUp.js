import React, { useCallback, useEffect, useState } from "react";

import { Form, Radio, Button, Col, Row } from "antd";
import CommonFields from "./CommonFields";
import ProfilePicUploader from "./ProfilePicUploader";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, signupUser, updateUser } from "../../redux/authRedux/actions";
import { useHistory } from "react-router-dom";

const StudentSignUp = () => {

  const dispatch = useDispatch();
  const { auth_user } = useSelector(state => state.auth);
  const { _id } = auth_user;
  const history = useHistory();
  const [isRegister, setIsRegister] = useState(false);

  // console.log(is_registration, 'registration')

  const handleFinish = (values) => {

    const { first_name, last_name, email, mit_email, mit_student_id, phone, username, is_enrolled_in_course, is_enrolled_in_capstone_projects } = values;
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
    dispatch(updateUser({ is_first_time_visited: false }, _id));
    dispatch(signupUser(payload, "student"));
    setIsRegister(true);
  };

  useEffect(() => {
    if (isRegister) {
      var timer = setTimeout(() => {
        history.push("/dashboard/student-dashboard");
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
          <Form.Item label="Course Enrolment" name="is_enrolled_in_course">
            <Radio.Group
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Capstone Projects Enrolment"
            name="is_enrolled_in_capstone_projects"
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
      <Form.Item wrapperCol={{ offset: 5, span: 7 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudentSignUp;
