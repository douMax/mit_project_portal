import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserProjectsData, logoutUser, getUserEOIData, getApprovedProjectsData } from "../../redux/authRedux/actions";
import ProjectListDetail from "../Browse_Projects/ProjectListDetail";
import ProjectDetail from "../Browse_Projects/ProjectDetail";
import UserEOI from "../MyProjects/UserEOI";
import { fetchInactiveProjects } from "../../actions/projects";
import AllocationComponent from "./AllocationComponent";

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

    console.log(approved_projects, "approved_projects")
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
                                    <UserEOI key={eoi._id} eoi={eoi} />
                                ))}
                            </Row>
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
                    {/* <Col span={12}>
                        <PageTitle>Allocate groups</PageTitle>
                        <>
                            {selected ? (
                                <AllocationComponent selectedProject={selected} />
                            ) : (
                                <Empty description="No project selected" />
                            )}
                        </>
                    </Col> */}
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