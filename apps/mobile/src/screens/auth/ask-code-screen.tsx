import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "@rneui/themed";
import { View } from "react-native";

import { DismissKeyboard, Header } from "components";
import { AskCodeForm } from "features/auth";
import { StackParamList } from "utils/routes";

export const AskCodeScreen = () => {
  const { theme } = useTheme();

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "AskCode">>();

  return (
    <DismissKeyboard>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background
        }}
      >
        <Header
          label="Connexion"
          iconLeft={
            <MaterialIcons name="keyboard-arrow-left" size={32} color="white" />
          }
          onIconLeftPress={() => navigation.goBack()}
        />
        <AskCodeForm />
      </View>
    </DismissKeyboard>
  );
};
