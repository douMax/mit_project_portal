import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Card, Select, Button, Space } from "antd";
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
        onClick={changeBorderRed}
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
              </Space>
            </Content>
            <ClientName>
              <img src={logo} alt={client} width="" height="" />
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
          style={{ width: 670, height: 430 }}
        >
          {title}
        </Card>
      </Content>
    </Layout>
  );
};

export default ProjectListDetails;
