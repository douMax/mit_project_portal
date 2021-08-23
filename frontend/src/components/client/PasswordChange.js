import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Button, Card, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/authRedux/actions";
import { useHistory } from "react-router-dom";

const LandingContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PasswordChange = () => {

    const [error, setError] = useState(false);
    const { auth_user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log(auth_user);
    const { _id } = auth_user

    const onFinish = ({ password, confirm }) => {
        console.log(password)

        if (password !== confirm) {
            setError(true);
        }
        else setError(false);

        setTimeout(() => {
            if (!error) {
                const payload = { password: password };
                dispatch(updateUser(payload, _id));
                history.goBack();
            }
        }, 1000);
    }

    return (
        <div style={{ overflow: "hidden", position: "sticky" }}>
            <LandingContainer>
                <Space direction="vertical">
                    <Card style={{ width: "600px" }}>
                        <Form onFinish={onFinish}>
                            <Form.Item
                                label="New Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="Confirm Password"
                                name="confirm"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button type="danger" htmlType="submit">
                                    Update
                                </Button>
                            </Form.Item>
                            {error && (<div style={{ color: "#dd042a", fontSize: "18px", margin: "5px" }}>{`Password and Confirm Password must be same !`}</div>)}
                        </Form>
                    </Card>
                </Space>
            </LandingContainer>
        </div>
    )
}

export default PasswordChange