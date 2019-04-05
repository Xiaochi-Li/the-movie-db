import { pick } from "lodash";

// image size is hard coded for now, will develop a api
// helper to size form config API is have more time.
// https://developers.themoviedb.org/3/configuration/get-api-configuration
const getImageUrl = (size, path) => {
  return `https://image.tmdb.org/t/p/${size}/${path}`;
};

const formatDate = date => {
  const releaseDate = new  Date(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return `${months[releaseDate.getMonth()]} ${releaseDate.getFullYear()}`;
};

export function pickMovieProperties(OriginalMovie) {
  const MOVIE_PROPERTIES = [
    "id",
    "vote_average",
    "title",
    "poster_path",
    "release_date",
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
    release_date,
    overview
  } = movieProperties;

  const movie = {
    voteAverage: vote_average,
    posterPath: getImageUrl("w154", poster_path),
    backdropPath: getImageUrl("w500", backdrop_path),
    releaseDate: formatDate(release_date),
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
