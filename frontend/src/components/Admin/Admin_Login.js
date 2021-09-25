import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersData, loginUser } from "../../redux/authRedux/actions";
import { useHistory } from "react-router";

const Container = styled.div`
    height:200px;
    width:500px;
    position:absolute;
    top:200px;
    left:500px;
`;


const Admin_Login = () => {

    const dispatch = useDispatch();
    const { is_auth, is_error } = useSelector(state => state.auth);
    const history = useHistory();

    const handleFinish = ({ username, password }) => {
        const payload = { username, password, role: "admin" };
        dispatch(loginUser(payload));
    }

    useEffect(() => {
        if (is_auth) {
            dispatch(getAllUsersData());
            history.push("/dashboard/admin-dashboard")
        }
    }, [is_auth]);

    return (
        <Container>
            <h1>Admin Login</h1>
            <Form onFinish={handleFinish}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
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
                <Form.Item>
                    <Button type="danger" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
                {is_error && (<div style={{ color: "#dd042a", fontSize: "18px", margin: "5px" }}>{`Invalid credentials for MIT Admin!`}</div>)}
            </Form>
        </Container>
    )
}

export default Admin_Login;