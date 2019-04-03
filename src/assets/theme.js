const theme = {
  color: {
    gradient:
      "radial-gradient(312.01px at 53.46% -21.35%, rgba(5, 112, 172, 0.46) 0%, rgba(8, 27, 35, 0) 100%)",
    background: "#081B23",
    main: "#01D277",
    text: {
      light: "#FFFFFF",
      largeTitle: "#E3F4FC",
      smallTitle: "#E6F7FF",
      description: "#9FBBC7"
    },
    voting: { low: "#D1225B", middle: "#4902A3", high: "#01D277" }
  },
  borderRadius: {
    sm: "8px",
    lg: "22px"
  },
  font: {
    family: { roboto: "Roboto", montserrat: "Montserrat" },
    size: { xsm: "12px", sm: "14px", md: "16px", lg: "20px", xlg: "28px" },
    lineHeight: { sm: "14px", md: "16px", lg: "24px", xlg: "30px" },
    weight: { normal: "normal", md: 500, bold: "bold" }
  },
  boxShadow: {
    sm: "0px 4px 8px rgba(0, 0, 0, 0.5);",
    md: "0px 4px 20px rgba(0, 0, 0, 0.5)",
    lg:
      "0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5), 0px 16px 32px rgba(0, 0, 0, 0.5)"
  }
};
export default theme;
