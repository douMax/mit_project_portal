import styled from "styled-components";
import { COLORS } from "../../utils/APP_CONSTANTS";

const NavContainer = styled.nav`
  font-size: 16px;
  line-height: 46px;
  list-style: none;
  color: rgb(0, 0, 0, 0.85);
  text-align: left;
  outline: none;
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;

  a {
    color: inherit;
    margin: 0 15px;

    :hover {
      color: ${COLORS.PrimaryRed};
      border-bottom: 2px solid ${COLORS.PrimaryRed};
    }
  }
`;

export default NavContainer;
