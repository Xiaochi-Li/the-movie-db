import styled, { withTheme } from "styled-components";
import React from "react";
import ThemePropTypes from "../assets/ThemePropTypes";
import Image from "./Image";
import Typography from "./Typography/Typography";

const CardContainer = styled("div")(
  ({ theme }) => `
  
  margin: 12px 8px;
`
);

const MovieCard = ({ movie }) => {
  const { posterPath, voteAverage, releaseDate } = movie;

  return (
    <CardContainer>
      <Image imageUrl={posterPath} voteAverage={voteAverage} />
      {/*{}*/}
      <Typography
        customizeStyle={{ width: 154, margin: "6px 0" }}
        variant={"h3"}
      >
        {movie.title}
      </Typography>

      <Typography variant={"caption2"}>{releaseDate}</Typography>
    </CardContainer>
  );
};

MovieCard.prototype = {
  theme: ThemePropTypes.isRequired
};

export default withTheme(MovieCard);
