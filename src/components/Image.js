import styled, { withTheme } from "styled-components";
import React from "react";
import ThemePropTypes from "../assets/ThemePropTypes";

const ImageContainer = styled("div")(
  ({ theme }) => `
 min-width: 158px;
 width: 45%
`
);

const Image = props => {
  return <ImageContainer></ImageContainer>;
};

Image.prototype = {
  theme: ThemePropTypes.isRequired
};

export default withTheme(Image);