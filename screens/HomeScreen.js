import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { TitoHome } from "../assets";
import { useAuth } from "../contexts/AuthContext";
import { ROUTES } from "../constants";

const HomeScreen = (props) => {
  const { navigation } = props;
  const { login, currentUser } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogin = async () => {
    await login();
    currentUser && navigation.navigate(ROUTES.DISCOVER_AUTH);
  };

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}

      <View className="flex-row px-6 mt-20 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-white text-lg font-semibold">Purr</Text>
        </View>
        <Text className="text-[#3C6072] text-3xl font-semibold">Tito App</Text>
      </View>

      {/* Second Section */}

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[32px] ">Conectar con tu gatito trae</Text>
        <Text className="text-[#00BCC9] text-[32px] font-semibold">buenos momentos</Text>

        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.{" "}
        </Text>
      </View>

      {/* Circle Section */}

      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      {/* Image Container */}

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={TitoHome}
          className=" w-[60%] h-[70%] object-cover scale-125 absolute left-8 bottom-10"
        />

        <TouchableOpacity
          onPress={handleLogin}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20  items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[26px] font-semibold">Purr</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
