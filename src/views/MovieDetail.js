import React from "react";
import withViewModel from "../utils/withViewModel";

const MovieDetail = props => {
  const { selectedMovieDetail } = props.viewModel;
  return <div>{selectedMovieDetail.title}</div>;
};

export default withViewModel("MovieDetails")(MovieDetail);
