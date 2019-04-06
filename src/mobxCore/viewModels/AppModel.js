import { types, flow, applySnapshot } from "mobx-state-tree";
import { MovieModel } from "../models/MovieModel";
import { fetchPopularMovies, searchMovie } from "../../utils/movieAPI";
import { getTrimmedMovieList } from "../../utils/movieDataExtractor";

const AppModel = types
  .model("AppModel", {
    movies: types.array(MovieModel),
    searchResult: types.array(MovieModel),
    selectedMovieID: types.maybeNull(types.number)
  })
  .views(self => ({
    get selectedMovieDetail() {
      return self.movies.find(movie => movie.id === self.selectedMovieID);
    }
  }))
  .actions(self => ({
    afterCreate() {
      self.loadPopularMovie();
    },
    loadPopularMovie: flow(function* load() {
      const response = yield fetchPopularMovies();
      applySnapshot(self.movies, getTrimmedMovieList(response));
    }),
    searchMovie: flow(function* search(movieName) {
      const response = yield searchMovie(movieName);
      applySnapshot(self.movies, getTrimmedMovieList(response));
    }),
    selectMovie(id) {
      self.selectedMovieID = id;
    }
  }));
export default AppModel;
