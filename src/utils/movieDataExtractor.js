import { pick } from "lodash";

export function pickMovieProperties(OriginalMovie) {
  const MOVIE_PROPERTIES = [
    "id",
    "vote_average",
    "title",
    "poster_path",
    "backdrop_path",
    "overview"
  ];

  const movieProperties = pick(OriginalMovie, MOVIE_PROPERTIES);

  const {
    id,
    vote_average,
    title,
    poster_path,
    backdrop_path,
    overview
  } = movieProperties;

  const movie = {
    voteAverage: vote_average,
    posterPath: poster_path,
    backdropPath: backdrop_path,
    id,
    title,
    overview
  };

  return movie;
}

export function getTrimmedMovieList(OriginalMovieList) {
  const trimmedMoviewList = OriginalMovieList.map(movie =>
    pickMovieProperties(movie)
  );
  return trimmedMoviewList;
}
