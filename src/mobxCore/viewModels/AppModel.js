/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names,no-param-reassign */
import { types, flow, applySnapshot } from "mobx-state-tree";
import { MovieModel } from "../models/MovieModel";
import { fetchPolularMovies } from "../../utils/movieAPI";
import { getTrimmedMovieList } from "../../utils/movieDataExtractor";

const AppModel = types
  .model("AppModel", { movies: types.array(MovieModel) })
  .actions(self => ({
    loadPopularMovie: flow(function* load() {
      const response = yield fetchPolularMovies();
      console.log(getTrimmedMovieList(response));
      applySnapshot(self.movies, getTrimmedMovieList(response));
    })
  }));
export default AppModel;
