import axios from 'axios'
// ajax call to get a list of popular movies

export const fetchPolularMovies = () =>
  axios
    .get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '6ed12e064b90ae1290fa326ce9e790ff'
      }
    })
    .then(response => {
      return response.data.results
    })
    .catch(error => {
      throw error
    })
