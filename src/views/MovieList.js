import React from "react";
import withViewModel from "../utils/withViewModel";
import { observer } from "mobx-react";

const MovieList = props => {
  const { movies } = props.viewModel;
  console.log(movies);
  return (
    <ul>
      {movies.map(movie => (
        <li>{movie.title}</li>
      ))}
    </ul>
  );
};

MovieList.defaultProps = {};

MovieList.propTypes = {};

export default withViewModel("MovieList")(observer(MovieList));
