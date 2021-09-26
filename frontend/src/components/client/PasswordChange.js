import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Button, Card, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, updatePassword } from "../../redux/authRedux/actions";
import { useHistory } from "react-router-dom";

const LandingContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const checkPasswords = (password, confirm) => {
    if (password === confirm) {
        return true;
    }
    else return false;
}

const PasswordChange = () => {

    const [error, setError] = useState(false);
    const { auth_user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const { _id } = auth_user

    const onFinish = async ({ password, confirm }) => {
        const is_Equal = await checkPasswords(password, confirm);

        if (is_Equal) {
            setError(false);
            setTimeout(() => {
                const payload = { password };
                dispatch(updatePassword(payload, _id));
                dispatch(logoutUser());
                history.push("/")
            }, 2000);
        }
        else setError(true)
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
                                <Input.Password placeholder="Please enter your new password here" />
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
                                <Input.Password placeholder="Please enter confirm new password" />
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