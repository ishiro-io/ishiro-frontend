import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import { HomeScreen } from "screens";
import {
  AskCodeScreen,
  ConfirmCodeScreen,
  CreateProfileScreen,
  OnboardingScreen
} from "screens/auth";
import { useResources } from "shared/hooks";
import { useMeQuery } from "shared/lib/graphql";

import { RouteStackParamList } from "./Routes";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RouteStackParamList>();

export const AppNavigator = () => {
  const [isReady, setIsReady] = useState(false);

  const { isFontReady, isLogoReady } = useResources();

  const [{ data, fetching }] = useMeQuery();

  useEffect(() => {
    if (isFontReady && isLogoReady && !fetching) {
      setIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [isFontReady, isLogoReady, fetching]);

  if (!isReady) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={data?.me ? "Home" : "Onboarding"}
    >
      {data?.me ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="AskCode" component={AskCodeScreen} />
          <Stack.Screen name="ConfirmCode" component={ConfirmCodeScreen} />
          <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
