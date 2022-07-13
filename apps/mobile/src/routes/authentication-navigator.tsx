import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "app/features/authentication/onboarding-screen";

import { AuthenticationStackParamList } from "../routes";

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationStackParamList>();

const Authentication = () => {
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

export default Authentication;
