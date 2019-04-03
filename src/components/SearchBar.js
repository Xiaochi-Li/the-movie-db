import styled, { withTheme } from "styled-components";
import React from "react";

const SearchInput = styled("input")(
  ({ theme }) => `
  height: 44px;
  width: 90%;
  position: absolute;
  z-index: 1000000;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -10%);
  font-family: ${theme.font.family.roboto};
  text-indent: 17px;
  color: ${theme.color.main};
  font-size: ${theme.font.size.sm};
  font-weight: ${theme.font.weight.md};
  outline: 0;
  border: 0px;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.boxShadow.sm};
  
  &::placeholder {
      color: ${theme.color.main};
    }
`
);
const SearchBar = props => {
  return <SearchInput type="text" placeholder="Search" />;
};

export default withTheme(SearchBar);
