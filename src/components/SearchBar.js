import styled, { withTheme } from "styled-components";
import React, { useState } from "react";

import MagnifyIcon from "mdi-react/MagnifyIcon";

const Container = styled("div")`
  height: 44px;
  width: 90%;
  transform: translate(5%, -30%);
`;

const SearchInput = styled("input")(
  ({ theme }) => `
  height: 100%;
  width: 100%;
  z-index: 1;
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
const StyledMagnifyIcon = styled(MagnifyIcon)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const SearchBar = ({ theme, searchMovie }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <Container>
      <SearchInput
        type="text"
        onChange={handleSearchValueChange}
        placeholder="Search"
      />
      <StyledMagnifyIcon
        color={theme.color.main}
        onClick={() => searchMovie(searchValue)}
      />
    </Container>
  );
};

export default withTheme(SearchBar);
