import { getRoot, types, applySnapshot } from "mobx-state-tree";
import AppModel from "./viewModels/AppModel";
import MainViewModel from "./viewModels/MainViewModel";

const StoreModel = types
  .model("StoreModel", {
    appModel: types.optional(types.late(() => AppModel), {}),
    mainViewModel: types.optional(MainViewModel, {})
  })
  .actions(self => ({
    loadPopularMovies() {
      if (localStorage.getItem("movieApp")) {
        const localSnapshot = JSON.parse(localStorage.getItem("movieApp"));
        applySnapshot(getRoot(self), localSnapshot);
      } else {
        getRoot(self).appModel.loadPopularMovie();
      }
    }
  }));

export default StoreModel;
