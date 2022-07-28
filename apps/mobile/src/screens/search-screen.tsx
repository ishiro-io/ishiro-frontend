import { useTheme } from "@rneui/themed";
import { View } from "react-native";

export const SearchScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}></View>
  );
};
