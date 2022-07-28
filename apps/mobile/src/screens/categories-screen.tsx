import { useTheme } from "@rneui/themed";
import { View } from "react-native";

export const CategoriesScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}></View>
  );
};
