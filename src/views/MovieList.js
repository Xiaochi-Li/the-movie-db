import React from "react";
import withViewModel from "../utils/withViewModel";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

const MovieList = props => {
  const { movies, setSelectedMovieID } = props.viewModel;

  const handleSelectMovie = id => {
    setSelectedMovieID(id);
  };
  return (
    <ul>
      {movies.map(movie => (
        <Link to={`movies/${movie.id}`}>
          <li onClick={handleSelectMovie(movie.id)}>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
};

MovieList.defaultProps = {};

MovieList.propTypes = {};

export default withViewModel("MovieList")(observer(MovieList));
