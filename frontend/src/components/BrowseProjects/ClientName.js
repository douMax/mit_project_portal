import React from "react";
import styled from "styled-components";

const CLIENT_NAME = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`;

const ClientName = (clientdet) => {
  return (
    <CLIENT_NAME>
      <img
        src={clientdet.logo}
        alt={clientdet.client}
        width={clientdet.w}
        height={clientdet.h}
      />
      {clientdet.client}
    </CLIENT_NAME>
  );
};

export default ClientName;
