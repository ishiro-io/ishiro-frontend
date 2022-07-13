import { NavigationContainer } from "@react-navigation/native";
import { View } from "dripsy";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

import { useResources } from "shared/hooks";
import { Provider } from "shared/provider";

import AppNavigator from "./app-navigator";

const App = () => {
  const { isFontReady } = useResources();

  const onLayout = useCallback(async () => {
    if (isFontReady) {
      await SplashScreen.hideAsync();
    }
  }, [isFontReady]);

  if (!isFontReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Provider>
        <View sx={{ flex: 1 }} onLayout={onLayout}>
          <AppNavigator />
        </View>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
