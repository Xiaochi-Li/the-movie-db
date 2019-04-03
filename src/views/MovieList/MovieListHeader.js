import React from "react";
import styled, { withTheme } from "styled-components";

import { SearchBar } from "../../components";
import { ReactComponent as Strips } from "../../assets/images/headerStrips.svg";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLeftStrip = styled(Strips)`
  position: absolute;
  right: 0;
`;

const HeaderContainer = styled("div")(
  ({ theme }) => `
  position: relative;
  background: ${theme.color.gradient};
`
);
const MovieListHeader = props => {
  return (
    <HeaderContainer>
      <Strips />
      <StyledLogo />
      <StyledLeftStrip />
      <SearchBar />
    </HeaderContainer>
  );
};

export default withTheme(MovieListHeader);
