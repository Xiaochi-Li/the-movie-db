import theme from "../../assets/theme";

const { color, font } = theme;
const { family, size, lineHeight, weight } = font;

export default new Map([
  /**
   * Header 1 - 6
   * These are rendered as their normal tags
   * They use header font
   */
  [
    "h1",
    {
      style: {
        fontSize: size.xlg,
        fontWeight: weight.bold,
        lineHeight: lineHeight.xlg,
        fontFamily: family.montserrat,
        color: color.text.light
      },
      as: "h1"
    }
  ],
  [
    "h2",
    {
      style: {
        fontSize: size.lg,
        fontWeight: weight.bold,
        lineHeight: lineHeight.lg,
        fontFamily: family.montserrat,
        color: color.text.light
      },
      as: "h2"
    }
  ],
  [
    "h3",
    {
      style: {
        fontSize: size.sm,
        fontWeight: weight.normal,
        lineHeight: lineHeight.md,
        fontFamily: family.roboto,
        color: color.text.mdLight
      },
      as: "h3"
    }
  ],
  [
    "body",
    {
      style: {
        fontSize: size.md,
        fontWeight: weight.normal,
        lineHeight: lineHeight.lg,
        fontFamily: family.roboto,
        color: color.text.mdGrey
      },
      as: "p"
    }
  ],
  [
    "caption1",
    {
      style: {
        fontSize: size.xsm,
        fontWeight: weight.normal,
        lineHeight: lineHeight.sm,
        fontFamily: family.roboto,
        color: color.text.lightGrey
      },
      as: "span"
    }
  ],
  [
    "caption2",
    {
      style: {
        fontSize: size.xsm,
        fontWeight: weight.normal,
        lineHeight: lineHeight.sm,
        fontFamily: family.roboto,
        color: color.text.grey
      },
      as: "span"
    }
  ],
  [
    "caption3",
    {
      style: {
        fontSize: size.xsm,
        fontWeight: weight.normal,
        lineHeight: lineHeight.sm,
        fontFamily: family.roboto,
        textAlign: "center",
        color: color.text.white
      },
      as: "span"
    }
  ]
]);
