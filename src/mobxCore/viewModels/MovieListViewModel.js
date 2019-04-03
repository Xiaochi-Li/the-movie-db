import { types, getRoot } from "mobx-state-tree";
import BaseViewModel from "./BaseViewModel";

const MovieListViewModel = BaseViewModel.named("MovieListViewModel")
  .props({
    viewName: types.literal("MovieList")
  })
  .views(self => ({
    get movies() {
      return getRoot(self).appModel.movies;
    }
  }))
  .actions(self => ({
    setSelectedMovieID(id) {
      getRoot(self).appModel.selectMovie(id);
    }
  }));

export default MovieListViewModel;
