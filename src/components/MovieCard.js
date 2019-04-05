import styled, { withTheme } from "styled-components";
import React from "react";
import ThemePropTypes from "../assets/ThemePropTypes";
import Image from "./Image";
import Typography from "./Typography/Typography";
import { Link } from "react-router-dom";

const CardContainer = styled("div")(
  ({ theme }) => `
  
  margin: 12px 8px;
`
);

const MovieCard = ({ movie, setSelectedMovieID }) => {
  const { posterPath, voteAverage, releaseDate, id, title } = movie;

  const handleSelectMovie = () => {
    setSelectedMovieID(id);
  };

  return (
    <Link to={`movies/${id}`} key={id} style={{ textDecoration: "none" }}>
      <CardContainer onClick={() => handleSelectMovie(movie.id)}>
        <Image imageUrl={posterPath} voteAverage={voteAverage} />
        {/*{}*/}
        <Typography
          customizeStyle={{ width: 154, margin: "6px 0" }}
          variant={"h3"}
        >
          {title}
        </Typography>

        <Typography variant={"caption2"}>{releaseDate}</Typography>
      </CardContainer>
    </Link>
  );
};

MovieCard.prototype = {
  theme: ThemePropTypes.isRequired
};

export default withTheme(MovieCard);
