/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { history } from "react-router";

import UserProjects from "./UserProjects";
import UserProposals from "./UserProposals";
import UserEOI from "./UserEOI";

import { USERTYPES } from "../../utils/APP_CONSTANTS";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logoutUser } from "../../redux/authRedux/actions";
import { Redirect, useHistory } from "react-router-dom";

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const PanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const MyProjects = () => {
  const { user, isLoading } = useSelector(state => state.auth);
  const history = useHistory();

  console.log(user, "---------------user")

  useEffect(() => {
    if (user === null) {
      dispatch(logoutUser());
      history.push("/")
    }
  }, [user]);

  const [myProjects, setMyProjects] = useState(null);
  const [myProposals, setMyProposals] = useState(null);
  const dispatch = useDispatch();

  const projectsFilter = useCallback(() => {
    if (user) {
      const { projects } = user;
      const filteredProjects = projects.filter(item => item.status === "open");
      setMyProjects(filteredProjects);
      const filteredProposals = projects.filter(item => item.status === "pending" || item.status === "rejected");
      setMyProposals(filteredProposals);
    }
  }, [user]);

  const getNewData = useCallback(() => {
    if (user) {
      dispatch(getUserData(user.username, "client"));
    }
  }, [user]);

  useEffect(() => {
    projectsFilter();
    getNewData();

  }, []);
  return (
    <div style={{ height: "80vh" }}>
      {(user && user.projects) && (<Row gutter={24}>
        <Col span={12}>
          <PanelWrapper>
            <PageTitle>My Projects</PageTitle>
            {myProjects?.map((project, index) => (
              <UserProjects key={index} project={project} />
            ))}
          </PanelWrapper>
        </Col>
        <Col span={12}>
          {user?.role === USERTYPES.INDUSTRY_CLIENT ? (
            <PanelWrapper>
              <PageTitle>My Proposals</PageTitle>
              {myProposals?.map((project, index) => (
                <UserProposals key={index} proposal={project} />
              ))}
            </PanelWrapper>
          ) : (
            <PanelWrapper>
              <PageTitle>My EOIs</PageTitle>
              {/* {eois?.map((eoi) => (
              <UserEOI eoi={eoi} key={eoi._id} />
            ))} */}
            </PanelWrapper>
          )}
        </Col>
      </Row>)}
    </div>
  );
};

export default MyProjects;
