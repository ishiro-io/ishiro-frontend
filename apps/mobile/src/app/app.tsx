import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import Constants from "expo-constants";

import { GraphQLProvider } from "shared/lib/graphql";
import { AppNavigator } from "utils/routes";
import { theme } from "utils/theme";

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <GraphQLProvider url={Constants?.manifest?.extra?.apiEndpoint}>
          <AppNavigator />
        </GraphQLProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
