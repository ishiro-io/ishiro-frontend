import { useTheme } from "@rneui/themed";
import { View } from "react-native";

import { DismissKeyboard, Header } from "components";
import { CreateProfileForm } from "features/auth";

export const CreateProfileScreen = () => {
  const { theme } = useTheme();

  return (
    <DismissKeyboard>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background
        }}
      >
        <Header label="Créer votre profil" justifyContent="center" />
        <CreateProfileForm />
      </View>
    </DismissKeyboard>
  );
};
