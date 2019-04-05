import styled, { withTheme } from "styled-components";
import React from "react";
import PropTypes from "prop-types";

import ThemePropTypes from "../assets/ThemePropTypes";
import VoteTag from "./VoteTag";

const StyledImageContainer = styled("div")(
  ({ theme }) => `
  position: relative;
`
);

const StyledImage = styled("img")(
  ({ theme }) => `
  box-shadow: ${theme.boxShadow.sm};
  border-radius: ${theme.borderRadius.sm};
`
);

const Image = props => {
  const { imageUrl, voteAverage } = props;

  return (
    <StyledImageContainer>
      <StyledImage src={imageUrl} />
      {<VoteTag voteAverage={voteAverage} />}
    </StyledImageContainer>
  );
};

Image.prototype = {
  voteAverage: PropTypes.number,
  theme: ThemePropTypes.isRequired
};

export default withTheme(Image);
