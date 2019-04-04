import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

import ThemePropTypes from "../../assets/ThemePropTypes"
import variantsMap from "./variantsMap";
import { observer } from "mobx-react";

const Typography = ({ variant, color, theme, ...otherProps }) => {
  // Get correct variant or default to body - PropTypes will throw a warning if wrong
  const selectedVariant = variantsMap.get(variant) || variantsMap.get("body");
  // Decide what html tag to use. Use the provided, or the variants default
  const HTMLTag = selectedVariant.as;
  return <HTMLTag {...otherProps} style={selectedVariant.style} />;
};

Typography.defaultProps = {
  variant: "body"
};

Typography.propTypes = {
  variant: PropTypes.oneOf([...variantsMap.keys()]),
  theme: ThemePropTypes.isRequired
};

export default withTheme(observer(Typography));
