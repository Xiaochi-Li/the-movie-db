import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "6ed12e064b90ae1290fa326ce9e790ff";

export const fetchPopularMovies = () =>
  axios
    .get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY
      }
    })
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      throw error;
    });

export const searchMovie = movieName =>
  axios
    .get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: encodeURI(movieName)
      }
    })
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
