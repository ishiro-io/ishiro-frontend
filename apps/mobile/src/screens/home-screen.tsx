import { Button, useTheme } from "@rneui/themed";
import { Image, View } from "react-native";
import {
  moderateScale,
  moderateVerticalScale
} from "react-native-size-matters";

import { Header } from "components";
import { useLogoutMutation } from "shared/lib/graphql";

export const HomeScreen = () => {
  const { theme } = useTheme();

  const [_, logout] = useLogoutMutation();

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
      />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
          onPress={() => logout()}
        >
          Se déconnecter
        </Button>
      </View>
    </View>
  );
};
