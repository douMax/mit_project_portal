import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import EOILeft from "./EOILeft";
import ProjectSummary from "./ProjectSummary";
import EOIDetails from "./EOIDetails";

// import mockEOIs from "../../data/mockEOIs.json";
import { UserContext } from "../../contexts/UserContext";

const NewEOI = () => {
  const location = useLocation();
  const project = location.state;
  const [user, setUser] = useContext(UserContext);
  return (
    <Row>
      <Col span={12}>
        <EOILeft eoilen={user.eoi} />
      </Col>
      <Col span={12}>
        <ProjectSummary project={project} />
      </Col>
      <Row>
        <Col>
          <EOIDetails />
        </Col>
      </Row>
    </Row>
  );
};

export default NewEOI;
