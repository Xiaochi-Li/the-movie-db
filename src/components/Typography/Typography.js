import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

import ThemePropTypes from "../../assets/ThemePropTypes";
import variantsMap from "./variantsMap";
import { observer } from "mobx-react";

// Typography component renders all text content on demand.
// It has default variants styles but also take customise styles.
const Typography = ({
  variant,
  color,
  theme,
  customizeStyle,
  ...otherProps
}) => {
  // Get correct variant or default to body - PropTypes will throw a warning if wrong
  const selectedVariant = variantsMap.get(variant) || variantsMap.get("body");
  // Decide what html tag to use. Use the variants default at the moment.
  const HTMLTag = selectedVariant.as;
  return (
    <HTMLTag
      {...otherProps}
      style={{ ...customizeStyle, ...selectedVariant.style }}
    />
  );
};

Typography.defaultProps = {
  variant: "body"
};

Typography.propTypes = {
  variant: PropTypes.oneOf([...variantsMap.keys()]),
  theme: ThemePropTypes.isRequired,
  customizeStyle: PropTypes.shape({})
};

export default withTheme(observer(Typography));
