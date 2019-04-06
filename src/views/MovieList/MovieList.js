import React from "react";
import withViewModel from "../../utils/withViewModel";
import styled, { withTheme } from "styled-components";
import { observer } from "mobx-react";
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
  margin-top: 44px;
  padding: 0 4%;
`;

const ListDisplay = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MovieList = ({ viewModel }) => {
  const { movies, setSelectedMovieID, searchMovie } = viewModel;

  return (
    <ViewContainer>
      <MovieListHeader searchMovie={searchMovie} />
      <ListContainer>
        <Typography customizeStyle={{ margin: "0 0 12px 8px" }} variant={"h2"}>
          Popular Movies
        </Typography>
        <ListDisplay>
          {movies.map(movie => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                setSelectedMovieID={setSelectedMovieID}
              />
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
