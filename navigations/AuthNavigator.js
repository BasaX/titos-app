import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants";
import BottomTabNavigator from "./BottomTabNavigator";
import HomeScreen from "../screens/HomeScreen";
import SignIn from "../screens/SignIn";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name={ROUTES.LOGIN} component={SignIn} />
      <Stack.Screen options={{ headerShown: false }} name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name={ROUTES.DISCOVER_AUTH} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
