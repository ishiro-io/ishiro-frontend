import { useTheme } from "@rneui/themed";
import { View } from "react-native";

import { DismissKeyboard, Header } from "components";
import { ConfirmCodeForm } from "features/auth";

export const ConfirmCodeScreen = () => {
  const { theme } = useTheme();

  return (
    <DismissKeyboard>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background
        }}
      >
        <Header label="Confirmation" justifyContent="center" />
        <ConfirmCodeForm />
      </View>
    </DismissKeyboard>
  );
};
