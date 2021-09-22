import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Row, Col, Card, Typography, Space, Button } from "antd";
import { COLORS } from "../../utils/APP_CONSTANTS";
import { useDispatch, useSelector } from "react-redux";
import { submitUserEOI } from "../../redux/authRedux/actions";
import { useHistory } from "react-router";
import { CheckCircleTwoTone } from '@ant-design/icons';

const SectionTitleWrapper = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
  padding-top: 10px;
  min-width:1200px;
`;

const sectionCardStyle = {
    border: `0.5px ${COLORS.PrimaryRed} solid`,
    borderRadius: "5px",
};

const PrpDecision = () => {

    const location = useLocation();
    const project = location.state;
    const dispatch = useDispatch();
    const [submitted, setSubmitted] = useState(false);
    const history = useHistory();
    const { user } = useSelector(state => state.auth);

    console.log(project, user)
    const { background, resources, objectives, title, _id, eoi } = project;
    const { Title } = Typography;

    const handleApprove = async () => {
        const payload = { "status": "open" };
        await dispatch(submitUserEOI(payload, _id));
        setSubmitted(true);

        setTimeout(() => {
            history.goBack();
        }, 2000);
    }

    const handleReject = async () => {
        const payload = { "status": "rejected" };
        await dispatch(submitUserEOI(payload, _id));
        setSubmitted(true);

        setTimeout(() => {
            history.goBack();
        }, 2000);
    }

    const handleOngoing = async () => {
        const payload = { "status": "ongoing" };
        await dispatch(submitUserEOI(payload, _id));
        setSubmitted(true);

        setTimeout(() => {
            history.goBack();
        }, 2000);
    }

    const handleCompleted = async () => {
        const payload = { "status": "completed" };
        await dispatch(submitUserEOI(payload, _id));
        setSubmitted(true);

        setTimeout(() => {
            history.goBack();
        }, 2000);
    }

    return (<>
        {!submitted ? (<>
            <div>
                <h1>Project Proposal to Review</h1>
                <Row>
                    <Col>
                        <Title>{title}</Title>
                        <SectionTitleWrapper>Background and Rationale</SectionTitleWrapper>
                        <Card style={sectionCardStyle}>{background}</Card>
                        <SectionTitleWrapper>Project Resources</SectionTitleWrapper>
                        <Card style={sectionCardStyle}>{resources}</Card>
                        <SectionTitleWrapper>Project Goals and Objectives</SectionTitleWrapper>
                        <Card style={sectionCardStyle}>{objectives}</Card>
                        {user?.position === "Supervisor" ? (
                            <Space direction="horizontal" size="large" style={{ margin: "20px" }}>
                                <Button type="primary" onClick={handleOngoing}>change status to Ongoing</Button>
                                <Button type="danger" onClick={handleCompleted}>Change status to Completed</Button>
                            </Space>
                        ) : (
                            <Space direction="horizontal" size="large" style={{ margin: "20px" }}>
                                <Button type="primary" onClick={handleApprove} >Approve</Button>
                                <Button type="danger" onClick={handleReject}>Reject</Button>
                            </Space>
                        )}
                    </Col>
                </Row>
            </div>
        </>) : ((<>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", margin: "200px 450px" }}>
                <h1>Request submitted successfully <span>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                </span></h1>
            </div>
        </>))
        }
    </>)
};

export default PrpDecision;