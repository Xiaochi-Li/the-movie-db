import React from "react";
import styled, { withTheme } from "styled-components";
import withViewModel from "../utils/withViewModel";

import { Link } from "react-router-dom";
import ArrowLeftIcon from "mdi-react/ArrowLeftIcon";
import { Image } from "../components";
import { Typography } from "../components/";

const ViewContainer = styled("div")(
  ({ theme }) => `
  height:100%; 
  background: ${theme.color.background}
`
);

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

const ContentContainer = styled("div")`
  margin: 5%;
  position: relative;

  @media (max-width: 420px) {
    top: -120px;
  }

  @media (min-width: 421px) {
    top: -150px;
  }

  @media (min-width: 600px) {
    margin: 10%;
    top: -150px;
  }
`;

const MovieTitle = styled("div")`
  display: inline-flex;
  position: relative;
  width: 100%;
`;

const TitleText = styled("div")`
  min-width: 125px;
  position: absolute;
  left: 170px;
  bottom: 0;
`;

const Divider = styled("div")(
  ({ theme }) => `
  margin: 24px 0;
  height:1px;
  width: 100%;
  background: ${theme.color.divider}`
);

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
    <ViewContainer>
      <HeaderImage largePoster={largePoster} />
      <Link to={"/"}>
        <BackIcon color={theme.color.text.white} />
      </Link>
      <ContentContainer>
        <MovieTitle>
          <Image imageUrl={posterPath} />
          <TitleText>
            <Typography variant={"h1"}>{title}</Typography>
            <Typography
              variant={"caption1"}
              customizeStyle={{ marginRight: 8 }}
            >
              {`${releaseDate}`}
            </Typography>
            <Typography variant={"caption1"} customizeStyle={{ marginLeft: 8 }}>
              {`${voteAverage * 10}% User Score `}
            </Typography>
          </TitleText>
        </MovieTitle>{" "}
        <Divider />
        <Typography variant={"h2"}>Overview</Typography>
        <Typography variant={"body"}>{overview}</Typography>
      </ContentContainer>
    </ViewContainer>
  );
};

export default withViewModel("MovieDetails")(withTheme(MovieDetail));
