import React from "react";
import { Layout, Card, Button, Space, Switch } from "antd";

import TopicsHeader from "./TopicsHeader";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectStats from "./ProjectStats";
import ClientName from "./ClientName";
import ProjectDetail from "./ProjectDetail";
import ProjectDetButtons from "./ProjectDetButtons";

const { Content, Sider } = Layout;

let projectId = "1";
let detsId = "dets1";
let newDetsId = "dets1";

const ProjectListDetail = ({
  projId,
  title,
  topic,
  description,
  status,
  year,
  trimester,
  assigned_students,
  eoi,
  client,
  logo,
  background_rationale,
  resources,
  goals_objectives,
}) => {
  let isClicked = false;

  const changeBorderRed = () => {
    if (projectId === projId) {
      document.getElementById(projectId).style.borderColor = "red";
      detsId = "dets" + projId;
      isClicked
        ? (document.getElementById(detsId).hidden = true)
        : (document.getElementById(detsId).hidden = false);
      document.getElementById(newDetsId).scrollIntoView();
      isClicked = !isClicked;
    }
    if (projectId !== projId) {
      document.getElementById(projectId).style.borderColor = "white";
      document.getElementById(detsId).hidden = true;
      newDetsId = "dets" + projId;
      document.getElementById(projId).style.borderColor = "red";
      //document.getElementById(newDetsId).hidden = false;

      isClicked
        ? (document.getElementById(newDetsId).hidden = true)
        : (document.getElementById(newDetsId).hidden = false);
      document.getElementById(newDetsId).scrollIntoView();
      isClicked = !isClicked;

      projectId = projId;
      detsId = newDetsId;
    }
  };

  return (
    <Layout>
      <Sider
        style={{
          background: "#f0f0f0",
          paddingLeft: "30px",
          paddingRight: "10px",
          paddingBottom: "30px",
        }}
        width={660}
      >
        <Card
          id={projId}
          style={{
            width: 620,
            height: 180,
          }}
          type="inner"
          hoverable="true"
        >
          <Space>
            <Content style={{ width: 450 }}>
              <TopicsHeader topic={topic} />
              <ProjectTitle title={title} />
              <ProjectDescription description={description} />
              <ProjectStats
                status={status}
                year={year}
                trimester={trimester}
                assigned_students={assigned_students}
                eoi={eoi}
              />
              <Switch
                checkedChildren="Retract"
                unCheckedChildren="Expand"
                onClick={changeBorderRed}
              />
            </Content>
            <ClientName client={client} logo={logo} h="100" w="100" />
          </Space>
        </Card>
      </Sider>
      <Content
        style={{
          background: "#f0f0f0",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
        width={710}
      >
        <Card
          id={"dets" + projId}
          hidden={true}
          style={{ width: 670, height: 580, borderColor: "red" }}
          type="inner"
        >
          <Space>
            <Content style={{ width: 500 }}>
              <TopicsHeader topic={topic} />
              <ProjectTitle title={title} />
              <ProjectStats
                status={status}
                year={year}
                trimester={trimester}
                assigned_students={assigned_students}
                eoi={eoi}
              />
            </Content>
            <ClientName client={client} logo={logo} w="50" h="50" />
          </Space>
          <ProjectDetail
            background_rationale={background_rationale}
            resources={resources}
            goals_objectives={goals_objectives}
          />
          <ProjectDetButtons />
        </Card>
      </Content>
    </Layout>
  );
};

export default ProjectListDetail;
