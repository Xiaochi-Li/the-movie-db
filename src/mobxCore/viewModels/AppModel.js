import { types, flow, applySnapshot } from "mobx-state-tree";
import { MovieModel } from "../models/MovieModel";
import { fetchPolularMovies } from "../../utils/movieAPI";
import { getTrimmedMovieList } from "../../utils/movieDataExtractor";

const AppModel = types
  .model("AppModel", {
    movies: types.array(MovieModel),
    selectedMovieID: types.maybeNull(types.number)
  })
  .views(self => ({
    get selectedMovieDetail() {
      return self.movies.find(movie => movie.id === self.selectedMovieID);
    }
  }))
  .actions(self => ({
    loadPopularMovie: flow(function* load() {
      const response = yield fetchPolularMovies();
      applySnapshot(self.movies, getTrimmedMovieList(response));
    }),
    selectMovie(id) {
      self.selectedMovieID = id;
    }
  }));
export default AppModel;
