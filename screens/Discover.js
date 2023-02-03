import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alimento, Avatar, Juego, Mimos, NoData } from "../assets";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { get_cat_all_info } from "../api";

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("Comida");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const data = get_cat_all_info();
    setMainData(data[type]);
    setIsLoading(false);
  }, [type]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8 mt-16">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Descubre</Text>
          <Text className="text-[#527283] text-[36px]">a tu compañero</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image source={Avatar} className="w-full h-full rounded-md object-cover" />
        </View>
      </View>

      {/* Menu Container */}

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer key={"Comida"} title={"Comida"} imageSrc={Alimento} type={type} setType={setType} />
            <MenuContainer key={"Juego"} title={"Juego"} imageSrc={Juego} type={type} setType={setType} />
            <MenuContainer key={"Mimos"} title={"Mimos"} imageSrc={Mimos} type={type} setType={setType} />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-6 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">Consejos</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">Explorar</Text>
                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
              </TouchableOpacity>
            </View>
            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, idx) => (
                    <ItemCardContainer
                      key={idx}
                      imageSrc={data?.image ? data?.image : "https://cdn.pixabay.com/photo/2016/03/17/06/49/renovation-1262389_960_720.png"}
                      title={data.name}
                      type={data.type}
                      iconType={type}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">
                    <Image source={NoData} className="w-64 h-32 object-cover" />
                    <Text className="text-xl text-[#428288] font-semibold">Opps... no se encontro informacion</Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
