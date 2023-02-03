import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(data);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-16">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{ uri: data?.image ? data?.image : "https://cdn.pixabay.com/photo/2016/03/17/06/49/renovation-1262389_960_720.png" }}
            className="w-full h-72 object-cover rounded-2xl"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity onPress={() => navigation.navigate("Discover")} className="w-10 h-10 rounded-md items-center justify-center bg-white">
              <Entypo name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome name="heartbeat" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row spac-x-2 items-center">
              <Text className="text-[12px] font-bold text-gray-100">{data.type}</Text>
            </View>

            <View className="px-2 py-1 rounded-md bg-teal-100">
              <Text>{data?.diet}</Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">{data?.name}</Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">{data?.location ? data.location : "Sin informacion"}</Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
              <FontAwesome name="star" size={24} color="#D58574" />
            </View>
            <View>
              <Text className="text-[#515151]">{data?.rating ? data.rating : "N/A"}</Text>
              <Text className="text-[#515151]">Puntuacion</Text>
            </View>
          </View>

          <View className="flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
              <MaterialIcons name="attach-money" size={24} color="#D58574" />
            </View>
            <View>
              <Text className="text-[#515151]">{data?.price ? data.price : "N/A"}</Text>
              <Text className="text-[#515151]">Precio</Text>
            </View>
          </View>

          <View className="flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
              <Entypo name="calendar" size={24} color="#D58574" />
            </View>
            <View>
              <Text className="text-[#515151]">{data?.age ? data.age : "N/A"}</Text>
              <Text className="text-[#515151]">Edad</Text>
            </View>
          </View>
        </View>

        {data?.description && <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">{data?.description}</Text>}

        {data?.races && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data.races.map((n, idx) => (
              <TouchableOpacity key={`${n.id}_${idx}`} className="px-2 py-1 rounded-md bg-emerald-100">
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
          <View className="items-center flex-row space-x-6">
            <FontAwesome name="phone" size={24} color="#428288" />
            <Text className="text-lg">{data?.contactPhone ? data.contactPhone : "N/A"}</Text>
          </View>

          <View className="items-center flex-row space-x-6">
            <FontAwesome name="envelope" size={24} color="#428288" />
            <Text className="text-lg">{data?.contactMail ? data.contactMail : "N/A"}</Text>
          </View>

          <View className="items-center flex-row space-x-6">
            <FontAwesome name="map-pin" size={24} color="#428288" />
            <Text className="text-lg">{data?.contactAddress ? data.contactAddress : "N/A"}</Text>
          </View>

          <TouchableOpacity>
            <View className="mt-8 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-8">
              <Text className="text-xl font-semibold uppercase tracking-wider text-gray-100">Contacta un profesional</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
