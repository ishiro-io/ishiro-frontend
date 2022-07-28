import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, useTheme } from "@rneui/themed";
import { Image, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { StackParamList } from "utils/routes";

export const OnboardingScreen = () => {
  const { theme } = useTheme();

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "Onboarding">>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background
      }}
    >
      <Image
        source={require("shared/assets/images/logo.png")}
        style={{
          height: moderateScale(150, 0.8),
          width: moderateScale(150, 0.8)
        }}
      />

      <Text
        h1
        style={{
          paddingHorizontal: theme.spacing.xl,
          marginVertical: theme.spacing.xxl
        }}
      >
        Des milliers d'animes que vous pouvez suivre à tout moment.
      </Text>

      <Button
        type="outline"
        buttonStyle={{
          borderColor: theme.colors.primaryLighter,
          borderWidth: moderateScale(2, 0.25)
        }}
        disabledStyle={{ backgroundColor: theme.colors.grey8 }}
        containerStyle={{
          marginBottom: theme.spacing.sm,
          padding: 0
        }}
        titleStyle={{
          color: theme.colors.white
        }}
        icon={
          <View style={{ marginRight: theme.spacing.md }}>
            <FontAwesome name="phone" size={moderateScale(20)} color="white" />
          </View>
        }
        onPress={() => navigation.navigate("AskCode")}
      >
        Continuer avec mon numéro
      </Button>
    </View>
  );
};
