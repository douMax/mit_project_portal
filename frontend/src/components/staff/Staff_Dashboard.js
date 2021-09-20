import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Empty, Card, Space, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUserProjectsData, logoutUser, getUserEOIData, getApprovedProjectsData } from "../../redux/authRedux/actions";
import ProjectListDetail from "../Browse_Projects/ProjectListDetail";
import ProjectDetail from "../Browse_Projects/ProjectDetail";
import { fetchInactiveProjects } from "../../actions/projects";
import ProjectDescription from "../Browse_Projects/ProjectDescription";
import ProjectTitle from "../Browse_Projects/ProjectTitle";
import ProposalStatusDetail from "../MyProjects/ProposalStatusDetail";
import TopicsHeader from "../Browse_Projects/TopicsHeader";
import ProjectStats from "../Browse_Projects/ProjectStats";
import { COLORS } from "../../utils/APP_CONSTANTS";

const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  width:100%;
`;

const RightPanelWrapper = styled.div`
  max-height: calc(100vh - 100px);
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

const SectionTitleWrapper = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
  padding-top: 10px;
`;

const sectionCardStyle = {
    border: `0.5px ${COLORS.PrimaryRed} solid`,
    borderRadius: "5px",
};

const Staff_Dashboard = () => {
    const { user, auth_user, projects, eoi, approved_projects } = useSelector(state => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(null);
    const { _id } = user;
    const { role } = auth_user;
    const [pendingProjects, setPendingProjects] = useState(null);

    useEffect(() => {
        if (user === null) {
            dispatch(logoutUser());
            history.push("/")
        }
    }, []);

    const handleShowDetail = (selectedproject) => {
        setSelected(selectedproject);
    };

    const getNewData = useCallback(async () => {
        if (user) {
            if (role === "student") {
                await dispatch(getUserProjectsData({ "assigned.userId": _id }));
                await dispatch(getUserEOIData({ "eoi.userId": _id }));
            }
            else if (role === "staff") {
                await dispatch(getUserProjectsData({ "supervisorId": _id }));
                await dispatch(getUserEOIData({ "supervisorEOI.userId": _id }));
            }
        }
    }, [user]);

    useEffect(async () => {
        await getNewData();
        await getProjects();
    }, []);

    useEffect(async () => {
        const data = await fetchInactiveProjects();
        setPendingProjects(data.projects);
    }, [user]);

    const getProjects = useCallback(() => {
        dispatch(getApprovedProjectsData());
    }, [approved_projects])

    const commonProjects = eoi?.filter(item => projects.some(item2 => item2._id === item._id));
    console.log(commonProjects)

    return (
        <>
            {(user?.position === "Supervisor") && (<>
                <Row gutter={24}>
                    <Col span={12}>
                        <h1>Staff Dashboard  - {user?.position || ""}</h1>
                        <PageTitle>My Projects</PageTitle>
                        <LeftPanelWrapper>
                            <Row>
                                {/* <SearchNSort /> */}
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
                        </LeftPanelWrapper>
                        <PageTitle>My EOI</PageTitle>
                        <LeftPanelWrapper>
                            <Row>
                                {eoi?.map((eoi) => (
                                    <Card hoverable="true" style={{ width: "100%", border: "2px solid aqua", margin: "5px" }} key={eoi._id}>
                                        <Row span={12}>
                                            <Col span={18}>
                                                <ProjectTitle title={eoi.title} />
                                                <ProjectDescription description={eoi.interest} />
                                            </Col>
                                            <Col span={6}>
                                                <ProposalStatusDetail status={(commonProjects.some(item => item._id === eoi._id)) ? "approved" : "rejected"} />
                                            </Col>
                                        </Row>
                                    </Card>
                                ))}
                            </Row>
                        </LeftPanelWrapper>
                    </Col>
                    <Col span={12}>
                        <RightPanelWrapper>
                            {selected ? (
                                <Row>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <TopicsHeader topic={selected?.topics.join(",")} />
                                            <ProjectTitle title={selected?.title} />
                                            <ProjectStats
                                                status={selected?.status}
                                                year={selected?.year}
                                                trimester={selected?.trimester}
                                                assigned_students={selected?.assigned.length}
                                                eoi={selected?.eoi.length}
                                            />
                                        </Col>
                                        <Col>
                                            <SectionTitleWrapper>Background and Rationale</SectionTitleWrapper>
                                            <Card style={sectionCardStyle}>{selected?.background}</Card>
                                            <SectionTitleWrapper>Project Resources</SectionTitleWrapper>
                                            <Card style={sectionCardStyle}>{selected?.resources}</Card>
                                            <SectionTitleWrapper>Project Goals and Objectives</SectionTitleWrapper>
                                            <Card style={sectionCardStyle}>{selected?.objectives}</Card>

                                        </Col>
                                        <Col style={{ margin: "20px" }}>
                                            <Link to={{
                                                pathname: `/staff/projects/change-status/${selected._id}`,
                                                state: selected,
                                            }}>
                                                <Button type="danger">change status</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Row>) : (
                                <Empty description="No project selected" />
                            )}
                        </RightPanelWrapper>
                    </Col>
                </Row>
            </>)}
            {(user?.position === "Unit Coordinator") && (<>
                <Row gutter={24}>
                    <h1>Staff Dashboard  - {user?.position || ""}</h1>
                    <PageTitle>Approved Project Proposals</PageTitle>
                    <Col span={24} style={{ maxHeight: "80vh", overflowY: "auto" }}>
                        {approved_projects && approved_projects?.map((project) => (
                            <ProjectListDetail
                                key={project._id}
                                isSelected={project._id === (selected && selected._id)}
                                project={project}
                                handleShowDetail={() => {
                                    handleShowDetail(project);
                                }}
                            />
                        ))}
                    </Col>
                </Row>
            </>)
            }
            {
                (user?.position === "Chair Project Review Panel") && (<>
                    <Row gutter={24}>
                        <Col span={12}>
                            <h1>Staff Dashboard  - {user?.position || ""}</h1>
                            <PageTitle> Project Proposal Requests</PageTitle>
                            <>
                                <Row>
                                    {/* <SearchNSort /> */}
                                    {pendingProjects?.map((project) => (
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
                            </>
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
                </>)
            }
        </>
    );
}

export default Staff_Dashboard;