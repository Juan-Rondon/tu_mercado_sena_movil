import CustomButton from "@/components/buttons/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Image, Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const defaultProductImage = require("../../assets/images/imagedefault.png");

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const product = useMemo(
    () => ({
      id,
      name: "Producto de ejemplo",
      price: "$9.99",
      seller: "Usuario vendedor",
      image: require("../../assets/images/imagedefault.png"),
    }),
    [id]
  );

  // Responsivo: altura imagen según pantalla
  const imageHeight = Math.max(220, Math.min(320, width * 0.75));

  // Responsivo: ancho de cards recomendadas
  const cardWidth = Math.max(180, Math.min(220, width * 0.55));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top", "bottom"]}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: 24 + insets.bottom,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header simple (sin posiciones fijas) */}
        <View style={{ marginBottom: 12, alignItems: "flex-start" }}>
          <CustomButton
            variant="text-only"
            color="secondary"
            FontText="text-xl"
            onPress={() => router.push("/(tabs)/Home")}
            icon={<Ionicons name="arrow-back" size={20} color="#1C65E3" />}
            iconPosition="left"
          >
            Volver
          </CustomButton>
        </View>

        {/* Imagen */}
        <Image
          source={product.image}
          style={{ width: "100%", height: imageHeight, borderRadius: 16 }}
          resizeMode="cover"
        />

        {/* Info */}
        <View style={{ paddingTop: 16 }}>
          <Text className="text-2xl font-bold mb-2">{product.name}</Text>
          <Text className="text-xl text-gray-700">{product.price}</Text>

          <Text className="mt-4 text-gray-600">Vendido por:</Text>
          <Text className="text-lg font-medium">{product.seller}</Text>

          <Pressable
            style={{
              marginTop: 18,
              backgroundColor: "#16a34a",
              paddingVertical: 14,
              borderRadius: 14,
            }}
            onPress={() => router.push("/(tabs)/Chats")}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 18, fontWeight: "600" }}>
              Chatear con el vendedor
            </Text>
          </Pressable>
        </View>

        {/* Recomendados */}
        <Text className="text-xl font-bold mb-3" style={{ marginTop: 24 }}>
          Productos que quizás te interesen
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 4, paddingBottom: 8 }}
        >
          <View style={{ flexDirection: "row" }}>
            {["1", "2", "3"].map((k) => (
              <View key={k} style={{ width: cardWidth, marginRight: 12 }}>
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
            ))}

            {/* Ver más */}
            <View style={{ width: cardWidth, marginRight: 12, justifyContent: "center" }}>
              <CustomButton
                variant="text-only"
                color="gray"
                FontText="text-3xl font-medium text-blue-600"
                onPress={() => router.push("/(tabs)/Home")}
              >
                Ver más...
              </CustomButton>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
