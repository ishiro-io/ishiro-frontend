import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnboardingScreen } from "../screens/auth";
import { AuthenticationStackParamList } from "./Routes";

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationStackParamList>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <AuthenticationStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
