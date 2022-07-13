import { makeTheme } from "dripsy";

const theme = makeTheme({
  customFonts: {
    ["Poppins-Regular"]: {
      bold: "Poppins-Bold",
      default: "Poppins-Regular",
      100: "Poppins-Thin",
      200: "Poppins-ExtraLight",
      300: "Poppins-Light",
      400: "Poppins-Regular",
      500: "Poppins-Medium",
      600: "Poppins-SemiBold",
      700: "Poppins-Bold",
      800: "Poppins-ExtraBold",
      900: "Poppins-Black"
    }
  },
  colors: {
    primary: "#CE1126",
    primaryLighter: "#E14649",
    background: "#131313",
    white: "#FFF",
    text: "#FFF",
    grey0: "##ededed",
    grey1: "#e1e1e1",
    grey2: "#d3d3d3",
    grey3: "#c4c4c4",
    grey4: "#b3b3b3",
    grey5: "#a0a0a0",
    grey6: "#898989",
    grey7: "#6c6c6c",
    grey8: "#3f3f3f",
    grey9: "#2f2f2f"
  },
  fonts: {
    root: "Poppins-Regular"
  },
  space: [0, 4, 8, 16, 24, 40, 64, 100],
  buttons: {
    outline: {
      flexDirection: "row",
      borderWidth: 2,
      borderColor: "primaryLighter",
      borderRadius: 1000,
      width: 310,
      height: 45,
      margin: "2",
      alignItems: "center",
      justifyContent: "space-evenly"
    }
  },
  text: {
    h1: {
      fontSize: 24,
      color: "text",
      fontWeight: 500,
      textAlign: "center"
    },
    p: {
      color: "text",
      fontSize: 16
    }
  }
});

export default theme;

type Theme = typeof theme;

declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends Theme {}
}
