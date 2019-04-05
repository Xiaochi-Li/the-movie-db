import React from "react";
import styled, { withTheme } from "styled-components";
import withViewModel from "../utils/withViewModel";

import ArrowLeftIcon from "mdi-react/ArrowLeftIcon";

const HeaderContainer = styled("div")`
  position: relevant;
`;

const HeaderImage = styled("div")(
  ({ largePoster }) => `width: 100%;
  height: 225px;
  background-image: url(${largePoster});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`
);

const BackIcon = styled(ArrowLeftIcon)`
  position: absolute;
  top: 35px;
  left: 24px;
`;

const MovieDetail = ({ theme, viewModel }) => {
  const { selectedMovieDetail } = viewModel;
  const {
    title,
    voteAverage,
    posterPath,
    largePoster,
    overview,
    releaseDate
  } = selectedMovieDetail;
  return (
    <>
      <HeaderContainer>
        <HeaderImage largePoster={largePoster} />
        <BackIcon color={theme.color.text.white} />
      </HeaderContainer>
    </>
  );
};

export default withViewModel("MovieDetails")(withTheme(MovieDetail));
