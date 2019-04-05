import { types } from "mobx-state-tree";

export const MovieModel = types.model("Movie", {
  id: types.number,
  voteAverage: types.number,
  title: types.string,
  posterPath: types.string,
  largePoster: types.string,
  overview: types.string,
  releaseDate: types.string
});
