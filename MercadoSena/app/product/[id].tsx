import CustomButton from "@/components/buttons/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const defaultProductImage = require("../../assets/images/imagedefault.png");

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const product = {
    id,
    name: "Producto de ejemplo",
    price: "$9.99",
    seller: "Usuario vendedor",
    image: require("../../assets/images/imagedefault.png"),
  };

  return (

    <>

        <View className="left-14 top-16">
          <CustomButton
            variant="text-only"
            color="secondary"
            className="w-1/2 right-28"
            FontText='text-xl'
            onPress={() => router.push('/(tabs)/Home')}
            icon={<Ionicons name="arrow-back" size={20} color="#1C65E3" />}
            iconPosition='left'
          >
            Volver
          </CustomButton>
        </View>

      <View className="p-4">

        <Image
          source={product.image}
          className="w-full h-60 rounded-xl mb-4 mt-16"
          resizeMode="cover"
        />

        <Text className="text-2xl font-bold mb-2">{product.name}</Text>
        <Text className="text-xl text-gray-700">{product.price}</Text>

        <Text className="mt-4 text-gray-600">Vendido por:</Text>
        <Text className="text-lg font-medium">{product.seller}</Text>

        <Pressable
          className="mt-6 bg-green-600 p-4 rounded-xl"
          onPress={() => router.push("/(tabs)/Chats")}
        >
          <Text className="text-white text-center text-lg">
            Chatear con el vendedor
          </Text>
        </Pressable>

      </View>

      <Text 
        className="text-xl font-bold px-4 mb-4"
        >
        Productos que quizás te interesen
      </Text>


      <View className="flex-1 px-4 pb-6">

        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        >

          <View className="flex-row space-x-5 px-1">

          <View className="w-52">
            <CustomButton
              variant="card"
              defaultImage={defaultProductImage}
              price="$9.99"
              onPress={() => router.push(`/product/[id]`)}
              onCartPress={() => router.push(`/product/[id]?modal=true`)}
            >
              Comprar ahora
            </CustomButton>
          </View>
          
          <View className="w-52">
            <CustomButton
              variant="card"
              defaultImage={defaultProductImage}
              price="$9.99"
              onPress={() => router.push(`/product/[id]`)}
              onCartPress={() => router.push(`/product/[id]?modal=true`)}
            >
              Comprar ahora
            </CustomButton>
          </View>
          
          <View className="w-52">
            <CustomButton
              variant="card"
              defaultImage={defaultProductImage}
              price="$9.99"
              onPress={() => router.push(`/product/[id]`)}
              onCartPress={() => router.push(`/product/[id]?modal=true`)}
            >
              Comprar ahora
            </CustomButton>
          </View>
          
        </View>
      </ScrollView>
    </View>

  </>

  );
}
