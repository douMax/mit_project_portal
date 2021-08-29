import React from "react";
import styled from "styled-components";

const TOPICS_HEADER = styled.div`
  font-size: 14px;
  color: #ff4d4f;
`;

const TopicsHeader = (topic) => {
  return <TOPICS_HEADER>{topic.topic}</TOPICS_HEADER>;
};

export default TopicsHeader;
