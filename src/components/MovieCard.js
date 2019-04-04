import styled, { withTheme } from "styled-components";
import React from "react";
import ThemePropTypes from "../assets/ThemePropTypes";
import Image from "./Image";

const CardContainer = styled("div")(
  ({ theme }) => `
 min-width: 158px;
 width: 45%
`
);

const MovieCard = props => {
  const { movie } = props;
  return <CardContainer>
    <Image/>
    {movie.id}</CardContainer>;
};

MovieCard.prototype = {
  theme: ThemePropTypes.isRequired
};

export default withTheme(MovieCard);
