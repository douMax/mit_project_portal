import React from "react";
import styled from "styled-components";

const ClientInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`;

const ClientInfo = props => {
  return (
    <ClientInfoContainer>
      <img src={props.logo} alt={props.clientName} />
      {props.clientName}
    </ClientInfoContainer>
  );
};

export default ClientInfo;
