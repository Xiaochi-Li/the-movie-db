/* eslint-disable func-names, no-param-reassign */
import { getRoot, types } from "mobx-state-tree";
import AppModel from "./viewModels/AppModel";
import MainViewModel from "./viewModels/MainViewModel";

const StoreModel = types
  .model("StoreModel", {
    appModel: types.optional(types.late(() => AppModel), {}),
    mainViewModel: types.optional(MainViewModel, {})
  })
  .views(self => ({}))
  .actions(self => ({
    loadPopularMovies() {
      getRoot(self).appModel.loadPopularMovie();
    }
  }));

export default StoreModel;
