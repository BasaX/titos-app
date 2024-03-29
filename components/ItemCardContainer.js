import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../constants";

const ItemCardContainer = ({ imageSrc, title, type, iconType, data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.ITEM_SCREEN_NAVIGATOR, { param: data })}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2"
    >
      <Image source={{ uri: imageSrc }} className="w-full h-40 rounded-md object-cover" />
      <Text className="text-[#428288] text-[18px] font-bold">{title?.length > 14 ? `${title.slice(0, 14)}..` : title}</Text>
      <View className="flex-row items-center space-x-1">
        {iconType === "Comida" ? <MaterialCommunityIcons name="food-drumstick-outline" size={20} color="#8597A2" /> : <></>}
        {iconType === "Mimos" ? <Entypo name="heart-outlined" size={20} color="#8597A2" /> : <></>}
        {iconType === "Juego" ? <Ionicons name="ios-paw-outline" size={20} color="#8597A2" /> : <></>}
        <Text className="text-[#428288] text-[14px] font-bold">{type?.length > 14 ? `${type.slice(0, 14)}..` : type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
