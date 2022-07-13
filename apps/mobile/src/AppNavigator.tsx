import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./Routes";
import Authentication from "./routes/authentication-navigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authentication" component={Authentication} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
