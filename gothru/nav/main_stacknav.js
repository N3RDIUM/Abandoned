import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import screens from "../screens/index";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={screens.Login} name="login" />
      <Stack.Screen component={screens.Splash} name="splash" />
      <Stack.Screen component={screens.GettingStarted} name="getting_started" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
