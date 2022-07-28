import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, useTheme } from "@rneui/themed";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { moderateScale } from "react-native-size-matters";

import {
  CategoriesScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen
} from "screens";
import {
  AskCodeScreen,
  ConfirmCodeScreen,
  CreateProfileScreen,
  OnboardingScreen
} from "screens/auth";
import { useResources } from "shared/hooks";
import { useMeQuery } from "shared/lib/graphql";

import { StackParamList, TabsParamList } from "./Routes";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<StackParamList>();
const Tabs = createBottomTabNavigator<TabsParamList>();

export const AppStackNavigator = () => {
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
      initialRouteName={data?.me ? "Content" : "Onboarding"}
    >
      {data?.me ? (
        <>
          <Stack.Screen name="Content" component={AppTabsNavigator} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
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

const AppTabsNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home")
            return focused ? (
              <MaterialIcons name="home" {...{ color, size }} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                {...{ color, size }}
              />
            );

          if (route.name === "Search")
            return <MaterialIcons name="search" {...{ color, size }} />;

          if (route.name === "Categories")
            return focused ? (
              <MaterialIcons name="bookmark" {...{ color, size }} />
            ) : (
              <MaterialIcons name="bookmark-border" {...{ color, size }} />
            );

          return <MaterialIcons name="crop-square" {...{ color, size }} />;
        },
        tabBarLabel: () => {
          switch (route.name) {
            case "Home":
              return <Text>Accueil</Text>;
            case "Search":
              return <Text>Rechercher</Text>;
            case "Categories":
              return <Text>Catégories</Text>;
          }
        },
        tabBarActiveTintColor: theme.colors.white,
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderTopColor: theme.colors.black
        },
        tabBarLabelStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: moderateScale(12, 0.25)
        },
        headerShown: false
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Categories" component={CategoriesScreen} />
    </Tabs.Navigator>
  );
};
