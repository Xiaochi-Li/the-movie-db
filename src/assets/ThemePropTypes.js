import PropTypes from "prop-types";

const ThemePropTypes = PropTypes.shape({
  color: PropTypes.shape({
    gradient: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    text: PropTypes.shape({
      white: PropTypes.string.isRequired,
      light: PropTypes.string.isRequired,
      mdLight: PropTypes.string.isRequired,
      lightGrey: PropTypes.string.isRequired,
      grey: PropTypes.string.isRequired,
      mdGrey: PropTypes.string.isRequired
    }),
    voting: PropTypes.shape({
      low: PropTypes.string.isRequired,
      middle: PropTypes.string.isRequired,
      high: PropTypes.string.isRequired
    })
  }),
  borderRadius: PropTypes.shape({
    sm: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired
  }),
  font: PropTypes.shape({
    family: PropTypes.shape({
      roboto: PropTypes.string.isRequired,
      montserrat: PropTypes.string.isRequired
    }),
    size: PropTypes.shape({
      xsm: PropTypes.string.isRequired,
      sm: PropTypes.string.isRequired,
      md: PropTypes.string.isRequired,
      lg: PropTypes.string.isRequired,
      xlg: PropTypes.string.isRequired
    }),
    lineHeight: PropTypes.shape({
      sm: PropTypes.string.isRequired,
      md: PropTypes.string.isRequired,
      lg: PropTypes.string.isRequired,
      xlg: PropTypes.string.isRequired
    }),
    weight: PropTypes.shape({
      normal: PropTypes.string.isRequired,
      md: PropTypes.number.isRequired,
      bold: PropTypes.string.isRequired
    })
  }),
  boxShadow: PropTypes.shape({
    sm: PropTypes.string.isRequired,
    md: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired
  })
});
export default ThemePropTypes;
