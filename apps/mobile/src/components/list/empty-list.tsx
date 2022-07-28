import { Text, useTheme } from "@rneui/themed";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const EmptyList = ({ title, subtitle }: Props) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        marginTop: theme.spacing?.xl,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          fontSize: moderateScale(24, 0.25),
          marginBottom: theme.spacing.md
        }}
      >
        😧
      </Text>
      <Text
        style={{
          fontSize: moderateScale(16, 0.25),
          fontFamily: "Poppins-Medium",
          textAlign: "center",
          marginBottom: theme.spacing.sm
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: moderateScale(12, 0.25),
          textAlign: "center",
          fontFamily: "Poppins-Light",
          marginHorizontal: theme.spacing?.md
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

type Props = {
  title: string;
  subtitle: string;
};
