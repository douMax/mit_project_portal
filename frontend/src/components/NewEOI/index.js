import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import EOILeft from "./EOILeft";
import ProjectSummary from "./ProjectSummary";
import EOIDetails from "./EOIDetails";
import { useSelector } from "react-redux";

const NewEOI = () => {
  const location = useLocation();
  const project = location.state;
  const { user, auth_user, eoi } = useSelector(state => state.auth);

  return (
    <Row>
      <Col span={12}>
        <EOILeft eoilen={eoi?.length} />
      </Col>
      <Col span={12}>
        <ProjectSummary project={project} />
      </Col>
      <Row>
        <Col>
          <EOIDetails project={project} eoiItem={eoi} />
        </Col>
      </Row>
    </Row>
  );
};

export default NewEOI;
