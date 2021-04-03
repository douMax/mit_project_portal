import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const { Content, Sider } = Layout;

const PageTitle = styled.nav`
  margin-left: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const BrowseProjects = () => {
  return (
    <Layout>
      <PageTitle>Browse Projects</PageTitle>
    </Layout>
  );
};

export default BrowseProjects;
