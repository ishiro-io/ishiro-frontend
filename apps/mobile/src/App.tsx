import { Provider } from "app/provider";

import AppNavigator from "./AppNavigator";

const App = () => {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
};

export default App;
