import { Colors, createTheme } from "@rneui/themed";
import { RecursivePartial } from "@rneui/themed/dist/config/theme";
import {
  moderateScale,
  moderateVerticalScale
} from "react-native-size-matters";

const colors: RecursivePartial<Colors> = {
  primary: "#CE1126",
  primaryLighter: "#E14649",
  background: "#131313",
  white: "#FFF",
  black: "#131313",
  grey0: "##ededed",
  grey1: "#e1e1e1",
  grey2: "#d3d3d3",
  grey3: "#c4c4c4",
  grey4: "#b3b3b3",
  grey5: "#a0a0a0",
  grey6: "#898989",
  grey7: "#6c6c6c",
  grey8: "#3f3f3f",
  grey9: "#2f2f2f",
  success: "#62AD13",
  error: "#D32643",
  warning: "#C17005",
  info: "#0087C6"
};

export const theme = createTheme({
  mode: "dark",
  darkColors: colors,
  spacing: {
    xs: moderateVerticalScale(4),
    sm: moderateVerticalScale(8),
    md: moderateVerticalScale(16),
    lg: moderateVerticalScale(24),
    xl: moderateVerticalScale(40),
    xxl: moderateVerticalScale(64),
    "3xl": moderateVerticalScale(100)
  },
  Button: {
    buttonStyle: {
      width: moderateScale(310),
      borderRadius: moderateScale(1000),
      height: moderateVerticalScale(44),
      padding: 0
    },
    titleStyle: {
      fontSize: moderateScale(13, 0.25),
      fontFamily: "Poppins-SemiBold",
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: 1
    }
  },
  Input: {
    inputStyle: {
      color: "#fff",
      fontFamily: "Poppins-Regular",
      fontSize: moderateScale(12, 0.25)
    },
    inputContainerStyle: {
      height: moderateVerticalScale(40),
      backgroundColor: "#2f2f2f",
      borderRadius: moderateScale(8),
      borderBottomWidth: 0,
      paddingLeft: moderateScale(8)
    },
    labelStyle: {
      fontFamily: "Poppins-Medium",
      fontSize: moderateScale(16, 0.25),
      color: "#fff",
      marginBottom: moderateVerticalScale(8)
    },
    errorStyle: { fontSize: moderateScale(10, 0.25) }
  },
  Text: {
    h1Style: {
      fontFamily: "Poppins-Medium",
      fontWeight: "500",
      fontSize: moderateScale(24, 0.5),
      color: colors.white,
      textAlign: "center"
    },
    style: {
      fontFamily: "Poppins-Light",
      fontSize: moderateScale(12, 0.25),
      color: colors.white
    }
  }
});

declare module "@rneui/themed" {
  export interface Colors {
    primaryLighter: string;
    grey6: string;
    grey7: string;
    grey8: string;
    grey9: string;
    info: string;
  }

  export interface ThemeSpacing {
    xxl: number;
    "3xl": number;
  }
}
