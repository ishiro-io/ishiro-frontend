import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "@rneui/themed";
import { Image, View } from "react-native";
import {
  moderateScale,
  moderateVerticalScale
} from "react-native-size-matters";

import { Header } from "components";
import { PreviewsList } from "features/home";
import { StackParamList } from "utils/routes";

export const HomeScreen = () => {
  const { theme } = useTheme();

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "Content">>();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Header
        iconLeft={
          <Image
            source={require("shared/assets/images/logo.png")}
            style={{
              height: moderateVerticalScale(40),
              width: moderateVerticalScale(40),
              resizeMode: "cover"
            }}
          />
        }
        iconRight={
          <MaterialIcons name="person" size={moderateScale(32)} color="white" />
        }
        onIconRightPress={() => navigation.navigate("Profile")}
      />

      <View
        style={{
          marginTop: theme.spacing.md,
          paddingBottom: theme.spacing["3xl"]
        }}
      >
        <PreviewsList />
      </View>
    </View>
  );
};
