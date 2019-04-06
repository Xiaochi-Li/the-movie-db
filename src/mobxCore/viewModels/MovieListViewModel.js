import { types, getRoot } from "mobx-state-tree";
import BaseViewModel from "./BaseViewModel";

const MovieListViewModel = BaseViewModel.named("MovieListViewModel")
  .props({
    viewName: types.literal("MovieList")
  })
  .views(self => ({
    get movies() {
      return getRoot(self).appModel.movies;
    },
    get searchResult() {
      return getRoot(self).appModel.searchResult;
    }
  }))
  .actions(self => ({
    setSelectedMovieID(id) {
      getRoot(self).appModel.selectMovie(id);
    },
    searchMovie(movieName) {
      getRoot(self).appModel.searchMovie(movieName);
    }
  }));

export default MovieListViewModel;
