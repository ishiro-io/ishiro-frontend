import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, useTheme } from "@rneui/themed";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { Header } from "components";
import { useLogoutMutation } from "shared/lib/graphql";
import { StackParamList } from "utils/routes";

export const ProfileScreen = () => {
  const { theme } = useTheme();

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "Profile">>();

  const [_, logout] = useLogoutMutation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >
      <Header
        label="Profil"
        iconLeft={
          <MaterialIcons
            name="keyboard-arrow-left"
            size={moderateScale(32)}
            color="white"
          />
        }
        onIconLeftPress={() => navigation.goBack()}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <Button
          type="solid"
          containerStyle={{
            alignSelf: "flex-end",
            marginTop: theme.spacing.md,
            marginBottom: theme.spacing?.xxl
          }}
          buttonStyle={{
            backgroundColor: theme.colors?.primaryLighter
          }}
          title="Déconnexion"
          onPress={() => logout()}
        />
      </View>
    </View>
  );
};
