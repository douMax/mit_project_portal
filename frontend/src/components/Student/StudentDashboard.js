import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Empty, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserProjectsData, logoutUser, getUserEOIData } from "../../redux/authRedux/actions";
import ProjectListDetail from "../Browse_Projects/ProjectListDetail";
import ProjectDetail from "../Browse_Projects/ProjectDetail";
import ProjectDescription from "../Browse_Projects/ProjectDescription";
import ProjectTitle from "../Browse_Projects/ProjectTitle";
import ProposalStatusDetail from "../MyProjects/ProposalStatusDetail";

const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  width:100%;
`;

const RightPanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  padding: 24px;
  background-color: #fff;
  border: 2px solid #f0f0f0;
  border-radius: 2px;
  overflow-y: scroll;
`;

const LeftPanelWrapper = styled.div`
  max-height: 40vh;
  overflow-y: auto;
  margin-bottom:20px
`;

const StudentDashboard = () => {
    const { user, projects, eoi } = useSelector(state => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(null);

    const { _id } = user;
    const commonProjects = eoi.filter(item => projects.some(item2 => item2._id === item._id));
    const projectId = commonProjects[0]?._id || null;

    useEffect(() => {
        if (user === null) {
            dispatch(logoutUser());
            history.push("/")
        }
    }, []);

    const getNewData = useCallback(() => {
        if (user) {
            dispatch(getUserProjectsData({ "assigned": _id }));
            dispatch(getUserEOIData({ "eoi.userId": _id }));
        }
    }, [user]);

    useEffect(() => {
        getNewData();
    }, []);

    const handleShowDetail = (selectedproject) => {
        setSelected(selectedproject);
    };

    return (
        <Row gutter={24}>
            <Col span={12}>
                <PageTitle>My Projects</PageTitle>
                <LeftPanelWrapper>
                    {projects.length > 0 ? (
                        <Row>
                            {projects?.map((project) => (
                                <ProjectListDetail
                                    key={project._id}
                                    isSelected={project._id === (selected && selected._id)}
                                    project={project}
                                    handleShowDetail={() => {
                                        handleShowDetail(project);
                                    }}
                                />
                            ))}
                        </Row>
                    ) : (
                        <Empty description="No projects data available" />
                    )}
                </LeftPanelWrapper>
                <PageTitle>My EOI</PageTitle>
                <LeftPanelWrapper>
                    {eoi.length > 0 ? (
                        <Row>
                            {eoi?.map((eoi) => (
                                <Card hoverable="true" style={{ width: "100%", border: "2px solid aqua", margin: "5px" }} key={eoi._id}>
                                    <Row span={12}>
                                        <Col span={18}>
                                            <ProjectTitle title={eoi.title} />
                                            <ProjectDescription description={eoi.interest} />
                                        </Col>
                                        <Col span={6}>
                                            <ProposalStatusDetail status={(projectId === eoi._id) ? "approved" : !projectId ? eoi?.status === "open" ? "pending" : eoi?.status : "rejected"} />
                                        </Col>
                                    </Row>
                                </Card>
                            ))}
                        </Row>
                    ) : (
                        <Empty description="No EOI data available" />
                    )}
                </LeftPanelWrapper>
            </Col>
            <Col span={12}>
                <RightPanelWrapper>
                    {selected ? (
                        <ProjectDetail selectedproject={selected} controls={false} />
                    ) : (
                        <Empty description="No project selected" />
                    )}
                </RightPanelWrapper>
            </Col>
        </Row>
    );
}

export default StudentDashboard;