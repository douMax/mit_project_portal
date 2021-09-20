import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import UserProjects from "./UserProjects";
import UserProposals from "./UserProposals";

import { USERTYPES } from "../../utils/APP_CONSTANTS";
import { useDispatch, useSelector } from "react-redux";
import { getClientProjectsData, logoutUser } from "../../redux/authRedux/actions";
import { useHistory } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const PanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const MyProjects = () => {
  const { user, auth_user, projects } = useSelector(state => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const { _id } = user;

  // const [myProjects, setMyProjects] = useState([]);
  // const [myProposals, setMyProposals] = useState([]);

  const getNewData = useCallback(() => {
    if (user) {
      dispatch(getClientProjectsData(_id));
    }
  }, [_id, user]);

  // const projectsFilter = useCallback(async () => {
  // if (user && projects) {
  const filteredProjects = projects?.filter(item => item.status === "open");
  // await setMyProjects(filteredProjects);
  const filteredProposals = projects?.filter(item => item.status === "pending" || item.status === "rejected");
  // await setMyProposals(filteredProposals);
  // }
  // }, [user, projects]);

  useEffect(async () => {
    await getNewData();
  }, []);

  useEffect(() => {
    if (user === null) {
      dispatch(logoutUser());
      history.push("/")
    }
  }, []);
  console.log(projects);

  return (
    <div style={{ height: "80vh" }}>
      <Row gutter={24}>
        <Col span={12}>
          <PanelWrapper>
            <PageTitle>My Projects</PageTitle>
            {filteredProjects?.map((project, index) => (
              <UserProjects key={index} project={project} />
            ))}
          </PanelWrapper>
        </Col>
        <Col span={12}>
          {auth_user?.role === USERTYPES.CLIENT ? (
            <PanelWrapper>
              <PageTitle>My Proposals</PageTitle>
              {filteredProposals?.map((project, index) => (
                <UserProposals key={index} proposal={project} />
              ))}
            </PanelWrapper>
          ) : (
            <>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MyProjects;
