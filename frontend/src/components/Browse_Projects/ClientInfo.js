import React from "react";
import styled from "styled-components";
import logo from "../../assets/mit_logo.png";

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
      <img width="150" src={logo} alt={alternative} />
      {"MIT"}
    </ClientInfoContainer>
  );
};

export default ClientInfo;
