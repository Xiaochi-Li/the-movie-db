import styled, { withTheme } from "styled-components";
import React from "react";
import PropTypes from "prop-types";

import ThemePropTypes from "../assets/ThemePropTypes";
import Typography from "./Typography/Typography";

const StyledVoteTag = styled("div")(
  ({ theme, tagColor }) => `
  padding: 0 8px;
  border-radius: ${theme.borderRadius.sm};
  background: ${tagColor};
  position:absolute;
  left: 7px;
  top: 4px;
`
);

const VoteTag = ({ voteAverage, theme }) => {
  let tagColor = theme.color.voting.middle;

  if (voteAverage >= 7) {
    tagColor = theme.color.voting.high;
  }

  if (voteAverage <= 3) {
    tagColor = theme.color.voting.low;
  }

  return (
    <StyledVoteTag tagColor={tagColor}>
      <Typography variant={"caption3"}>{voteAverage}</Typography>
    </StyledVoteTag>
  );
};

VoteTag.prototype = {
  theme: ThemePropTypes.isRequired,
  vote: PropTypes.number
};

export default withTheme(VoteTag);
