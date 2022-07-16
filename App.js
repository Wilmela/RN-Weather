import { Platform } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  const theme = {
    ...DefaultTheme,
    color: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!loaded) return null;

  const Tab =
    Platform.OS === "android"
      ? createMaterialBottomTabNavigator()
      : createBottomTabNavigator();

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => {
              return <Ionicons name="home" size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color }) => {
              return <Ionicons name="information-circle" size={25} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
