import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Layout, Card, Select, Button, Space, Switch } from "antd";
import SearchNSort from "./SearchNSort";

const { Content, Sider } = Layout;
const { Option } = Select;

const TopicsHeader = styled.nav`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: #ff4d4f;
`;

const ProjectTitle = styled.nav`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const ProjectDescription = styled.nav`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  padding-bottom: 10px;
`;

const ClientName = styled.nav`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`;

const BackgroundTitle = styled.nav`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
  padding-top: 10px;
`;

let projectId = "1";
let detsId = "dets1";
let newDetsId = "dets1";

const ProjectListDetails = ({
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
      isClicked = !isClicked;

      projectId = projId;
      detsId = newDetsId;
    }
  };

  return (
    <Layout key={projId}>
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
              <TopicsHeader>{topic}</TopicsHeader>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDescription>{description}</ProjectDescription>
              <Space>
                <Button style={{ background: "turquoise", color: "white" }}>
                  {status}
                </Button>
                <Button type="text">
                  {year} - T{trimester}
                </Button>
                <Button type="text">Group: {assigned_students}/5</Button>
                <Button type="text">EOIs: {eoi}</Button>
                <Switch
                  checkedChildren="Retract"
                  unCheckedChildren="Expand"
                  onClick={changeBorderRed}
                />
              </Space>
            </Content>
            <ClientName>
              <img src={logo} alt={client} width="100" height="100" />
              {client}
            </ClientName>
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
              <TopicsHeader>{topic}</TopicsHeader>
              <ProjectTitle>{title}</ProjectTitle>
              <Space>
                <Button style={{ background: "turquoise", color: "white" }}>
                  {status}
                </Button>
                <Button type="text">
                  {year} - T{trimester}
                </Button>
                <Button type="text">Group: {assigned_students}/5</Button>
                <Button type="text">EOIs: {eoi}</Button>
              </Space>
            </Content>
            <ClientName>
              <img src={logo} alt={client} width="50" height="50" />
              {client}
            </ClientName>
          </Space>
          <BackgroundTitle>
            Background and Rationale for Project:
          </BackgroundTitle>
          <Card style={{ width: 620, height: 100, borderColor: "red" }}>
            {background_rationale}
          </Card>
          <BackgroundTitle>Project Resources:</BackgroundTitle>
          <Card style={{ width: 620, height: 100, borderColor: "red" }}>
            {resources}
          </Card>
          <BackgroundTitle>Project Goals and Objectives:</BackgroundTitle>
          <Card style={{ width: 620, height: 100, borderColor: "red" }}>
            {goals_objectives}
          </Card>
          <Space style={{ paddingTop: 20, paddingLeft: 236 }}>
            <Button
              style={{
                background: "#f0f0f0",
                fontWeight: "bold",
                borderColor: "black",
              }}
            >
              Print Project
            </Button>
            <Button
              style={{
                background: "#f0f0f0",
                fontWeight: "bold",
                borderColor: "black",
              }}
            >
              Save Project
            </Button>
            <Button
              style={{
                fontWeight: "bold",
                borderColor: "red",
              }}
              type="danger"
            >
              Express Interest
            </Button>
          </Space>
        </Card>
      </Content>
    </Layout>
  );
};

export default ProjectListDetails;
