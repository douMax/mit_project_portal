import React, { useState } from "react";
import { Typography, Select, Button, Form } from "antd";
import ProjectStats from "../Browse_Projects/ProjectStats";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import { submitUserEOI } from "../../redux/authRedux/actions";
import { CheckCircleTwoTone } from '@ant-design/icons';

const Container = styled.div`
display: "flex";
flex-direction:"row";
border:"2px solid black";
`;

function createOptions(arr) {
    let studentOptions = [];
    arr.forEach((element, i) => {
        var obj = {
            label: element.username,
            value: element.userId
        };
        studentOptions[i] = obj;
        obj = {};
    });
    return studentOptions;
}


const AllocationComponent = () => {

    const location = useLocation();
    const project = location.state;
    const dispatch = useDispatch();
    const history = useHistory();

    const {
        title,
        status,
        assigned,
        trimester,
        year,
        eoi,
        supervisorEOI,
        supervisorId,
        _id
    } = project;


    const [submitted, setSubmitted] = useState(false);
    const [count, setCount] = useState(assigned.length);

    const { Title } = Typography;

    let students = Array.from(new Set(eoi.map(item => item.userId))).map(item2 => {
        return {
            userId: item2,
            username: eoi.find(item3 => item3.userId === item2).username
        };
    });

    let supervisors = Array.from(new Set(supervisorEOI.map(item => item.userId))).map(item2 => {
        return {
            userId: item2,
            username: supervisorEOI.find(item3 => item3.userId === item2).username
        };
    });

    let uniqueStudents = students.filter(item => !assigned.includes(item.userId));

    let student_options = createOptions(uniqueStudents);
    let supervisor_options = createOptions(supervisors);

    const handleFinish = async (values) => {
        const { students, supervisor } = values;
        var payload = {};
        if (supervisor && students === undefined) {
            payload = { "supervisorId": supervisor };
        }
        else if (supervisor === undefined && students.length > 0) {
            payload = { "assigned": [...assigned, ...students] };
        }
        else if (supervisor && students) {
            payload = { "supervisorId": supervisor, "assigned": [...assigned, ...students] }
        }
        else payload = {};

        await (payload)
        await dispatch(submitUserEOI(payload, _id));

        setSubmitted(true);

        setTimeout(() => {
            history.goBack();
        }, 2000);
    }

    return (<>
        {!submitted ? (
            <Container>
                <Container>
                    <Title>{title}</Title>
                    <ProjectStats
                        status={status}
                        year={year}
                        trimester={trimester}
                        assigned_students={assigned.length}
                        eoi={eoi.length}
                    />
                </Container>
                <Form style={{ padding: "20px" }} onFinish={handleFinish}>

                    <h2>Allocate students</h2>
                    <Form.Item name="students">
                        <Select mode="multiple"
                            style={{ width: "100%" }}
                            placeholder={`select maximum of ${5 - assigned.length} students`}
                            size="large"
                            disabled={assigned.length >= 5 || count === 5}
                            options={student_options}
                            onChange={() => setCount(count + 1)}
                        />
                    </Form.Item>

                    <h2>Allocate a Supervisor</h2>
                    <Form.Item name="supervisor">
                        <Select
                            style={{ width: "100%" }}
                            size="large"
                            placeholder="select a supervisor"
                            disabled={supervisorId}
                            options={supervisor_options}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="danger" htmlType="submit" style={{ float: "right", position: "relative", top: 100 }}>Submit</Button>
                    </Form.Item>
                </Form>
            </Container>
        ) : (
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", margin: "200px 450px" }}>
                <h1> Allocation has done successfully <span>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                </span></h1>
            </div>
        )}
    </>)
}

export default AllocationComponent;