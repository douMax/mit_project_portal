import React from "react";
import styled from "styled-components";

const ClientInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`;

const ClientInfo = (props) => {
  let clientName = props.clientName;
  let alternative = "Logo of " + clientName;
  return (
    <ClientInfoContainer>
      <img src={props.logo} alt={alternative} />
      {props.clientName}
    </ClientInfoContainer>
  );
};

export default ClientInfo;
