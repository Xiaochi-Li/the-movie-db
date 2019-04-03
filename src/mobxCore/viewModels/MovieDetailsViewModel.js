import { types, getRoot } from "mobx-state-tree";
import BaseViewModel from "./BaseViewModel";

const MovieDetailsViewModel = BaseViewModel.named("MovieDetailsViewModel")
.props({
  viewName: types.literal("MovieDetails")
})
.views(self => ({
  get selectedMovieDetail() {
    return getRoot(self).appModel.selectedMovieDetail;
  }
}));

export default MovieDetailsViewModel;
