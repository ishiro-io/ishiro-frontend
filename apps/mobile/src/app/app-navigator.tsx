import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthenticationNavigator, RootStackParamList } from "../routes";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authentication" component={AuthenticationNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
