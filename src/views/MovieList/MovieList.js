import React from "react";
import withViewModel from "../../utils/withViewModel";
import styled, { withTheme } from "styled-components";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import MovieListHeader from "./MovieListHeader";

const ViewContainer = styled("div")(
  ({ theme }) => `
    width: 100%;
    height: 100%;
    background:${theme.color.background}
  `
);

const MovieList = props => {
  const { movies, setSelectedMovieID } = props.viewModel;

  console.log(props);

  const handleSelectMovie = id => {
    setSelectedMovieID(id);
  };
  return (
    <ViewContainer>
      <MovieListHeader />
      {movies.map(movie => (
        <Link to={`movies/${movie.id}`}>
          <li onClick={handleSelectMovie(movie.id)}>{movie.title}</li>
        </Link>
      ))}
    </ViewContainer>
  );
};

MovieList.defaultProps = {};

MovieList.propTypes = {};

export default withViewModel("MovieList")(withTheme(observer(MovieList)));
