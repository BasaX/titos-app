import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, ROUTES } from "../constants";
import ItemNavigator from "./ItemNavigator";
import Veterinary from "../screens/Veterinary";
import Profile from "../screens/Profile";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === ROUTES.DISCOVER) {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === ROUTES.VETERINARY) {
            iconName = focused ? "ios-heart-sharp" : "ios-heart-outline";
          } else if (route.name === ROUTES.PROFILE) {
            iconName = focused ? "person-sharp" : "person-outline";
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen options={{ headerShown: false, title: "Inicio" }} name={ROUTES.DISCOVER} component={ItemNavigator} />
      <Tab.Screen options={{ headerShown: false, title: "Veterinarias" }} name={ROUTES.VETERINARY} component={Veterinary} />
      <Tab.Screen options={{ headerShown: false, title: "Perfil" }} name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
