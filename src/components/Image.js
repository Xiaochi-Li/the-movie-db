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
  width: 100%;
  box-shadow: ${theme.boxShadow.sm};
  border-radius: ${theme.borderRadius.sm};
`
);

const Image = ({ imageUrl, voteAverage, showVoteTag }) => {
  return (
    <StyledImageContainer>
      <StyledImage src={imageUrl} />
      {showVoteTag && <VoteTag voteAverage={voteAverage} />}
    </StyledImageContainer>
  );
};

Image.defaultProps = {
  showVoteTag: false
};

Image.prototype = {
  showVoteTag: PropTypes.bool,
  voteAverage: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  theme: ThemePropTypes.isRequired
};

export default withTheme(Image);
