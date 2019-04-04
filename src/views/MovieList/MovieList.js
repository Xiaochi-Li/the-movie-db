import React from "react";
import withViewModel from "../../utils/withViewModel";
import styled, { withTheme } from "styled-components";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import MovieListHeader from "./MovieListHeader";
import Typography from "../../components/Typography/Typography";
import ThemePropTypes from "../../assets/ThemePropTypes";
import MovieCard from "../../components/MovieCard";

const ViewContainer = styled("div")(
  ({ theme }) => `
    width: 100%;
    height: 100%;
    background:${theme.color.background}
  `
);

const ListContainer = styled("div")`
  margin-top: 66px;
  padding: 0 4%;
`;

const ListDisplay = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MovieList = ({ viewModel }) => {
  const { movies, setSelectedMovieID } = viewModel;
  const handleSelectMovie = id => {
    setSelectedMovieID(id);
  };

  return (
    <ViewContainer>
      <MovieListHeader />
      <ListContainer>
        <Typography variant={"h2"}>Popular Movies</Typography>
        <ListDisplay>
          {movies.map(movie => {
            return (
              <Link to={`movies/${movie.id}`} key={movie.id}>
                <MovieCard
                  onClick={handleSelectMovie(movie.id)}
                  movie={movie}
                />
              </Link>
            );
          })}
        </ListDisplay>
      </ListContainer>
    </ViewContainer>
  );
};

MovieList.propTypes = {
  viewModel: PropTypes.shape({}).isRequired,
  theme: ThemePropTypes.isRequired
};

export default withViewModel("MovieList")(withTheme(observer(MovieList)));
