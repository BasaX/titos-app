import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants";
import Discover from "../screens/Discover";
import ItemScreen from "../screens/ItemScreen";

const Stack = createNativeStackNavigator();

const ItemNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name={ROUTES.DISCOVER_NAVIGATOR} component={Discover} />
      <Stack.Screen options={{ headerShown: false }} name={ROUTES.ITEM_SCREEN_NAVIGATOR} component={ItemScreen} />
    </Stack.Navigator>
  );
};

export default ItemNavigator;
