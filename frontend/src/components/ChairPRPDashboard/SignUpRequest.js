import React, { useContext, useState } from "react";
import { Table, Drawer, Card, Space } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import styled from "styled-components";

import { SignUpRequestContext } from "../../contexts/SignUpRequestContext";

const CompanyName = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const SectionContent = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  padding-bottom: 5px;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const LastNameContent = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  padding-bottom: 5px;
  text-transform: capitalize;
`;

const SignUpRequest = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [currentProposal, setCurrentProposal] = useState({});
  const showDrawer = (record) => {
    //console.log(record);
    setCurrentProposal(record);
    setIsDrawerVisible(true);
  };
  const handleClose = () => {
    setIsDrawerVisible(false);
  };
  const [signUpRequest, setsignUpRequest] = useContext(SignUpRequestContext);
  const columns = [
    {
      title: "First Name",
      dataIndex: "fName",
      key: "fName",
    },
    {
      title: "Last Name",
      dataIndex: "lName",
      key: "lName",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Company",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <a onClick={() => showDrawer(record)}>Review</a>
      ),
    },
  ];

  let companyWebsite = "https://" + currentProposal.website;

  return (
    <div>
      <Table columns={columns} dataSource={signUpRequest} />
      <Drawer
        visible={isDrawerVisible}
        maskClosable={false}
        onClose={handleClose}
        placement="left"
        width={650}
        closeIcon={<CloseCircleFilled style={{ fontSize: 20, color: "red" }} />}
      >
        <Card>
          <CompanyName>{currentProposal.companyName}</CompanyName>
          <SectionTitle>Company Profile:</SectionTitle>
          <SectionContent>{currentProposal.companyProfile}</SectionContent>
          <SectionTitle>Website:</SectionTitle>
          <SectionContent>
            <a href={companyWebsite}>{currentProposal.website}</a>
          </SectionContent>
          <SectionTitle>Point of Contact Name:</SectionTitle>
          <Space>
            <SectionContent>Mr</SectionContent>
            <SectionContent>{currentProposal.fName}</SectionContent>
            <LastNameContent>{currentProposal.lName}</LastNameContent>
          </Space>
          <SectionTitle>Email Address:</SectionTitle>
          <SectionContent>{currentProposal.email}</SectionContent>
          <SectionTitle>Mobile Phone Number:</SectionTitle>
          <SectionContent>{currentProposal.mobile}</SectionContent>
          <SectionTitle>Office Phone Number:</SectionTitle>
          <SectionContent>{currentProposal.office}</SectionContent>
          <SectionTitle>Position held at Company:</SectionTitle>
          <SectionContent>{currentProposal.position}</SectionContent>
        </Card>
      </Drawer>
    </div>
  );
};

export default SignUpRequest;
