import CustomButton from "@/components/buttons/CustomButton";
import WelcomeCarousel, { CarouselSlide } from "@/components/carousel/WelcomeCarousel";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  // ✅ Header realmente responsivo (entre 220 y 320 aprox)
  const headerH = Math.min(Math.max(height * 0.34, 240), 320);

  const logoSize = Math.min(width * 0.42, 170);
  const carouselH = Math.min(Math.max(height * 0.28, 220), 280);

  // ✅ Solo esto mueve el bloque superior (logo+título) SIN tocar lo demás
  const topBlockMargin = -headerH * -0.1;

  const slides: CarouselSlide[] = [
    {
      id: "1",
      image: require("../../../assets/images/shopeeasy1.png"),
      title: "Compra fácil",
      description: "Encuentra productos y servicios dentro de la comunidad SENA.",
    },
    {
      id: "2",
      image: require("../../../assets/images/ventasecure.png"),
      title: "Vende seguro",
      description: "Publica tus productos y llega a más personas.",
    },
    {
      id: "3",
      image: require("../../../assets/images/conecta.png"),
      title: "Conecta",
      description: "Comunícate y negocia con confianza.",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* ✅ HEADER VERDE como fondo absoluto (NO afecta layout) */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: headerH,
          backgroundColor: "#2DC75C",
          borderBottomLeftRadius: 90,
          borderBottomRightRadius: 90,
        }}
      />

      {/* ✅ CONTENIDO normal (sin marginTop global que mueva todo) */}
      <View className="flex-1 px-6">
        {/* ✅ SOLO este bloque se mueve */}
        <View className="items-center" style={{ marginTop: topBlockMargin }}>
          <View
            className="items-center justify-center"
            style={{ width: logoSize, height: logoSize }}
          >
            <Image
              source={require("../../../assets/images/logo.png")}
              style={{
                width: logoSize * 3,
                height: logoSize * 3,
              }}
              resizeMode="contain"
            />
          </View>

          <Text
            className="text-white font-Opensans-bold text-3xl mt-5 text-center"
            style={{ maxWidth: 420 }}
          >
            Tu Mercado SENA
          </Text>
        </View>

        {/* Carrusel (NO se mueve si ajustas topBlockMargin) */}
        <View className="mt-20">
          <WelcomeCarousel slides={slides} height={carouselH} autoplayMs={3000} />
        </View>

        {/* Botones abajo */}
        <View className="flex-1 justify-end pb-16">
          <View className="items-center">
            <CustomButton
              variant="contained"
              className="w-3/4 p-5 rounded-3xl shadow-lg"
              color="tertiary"
              FontText="text-2xl"
              onPress={() => router.push("/(stack)/login")}
            >
              Iniciar Sesión
            </CustomButton>

            <View className="h-4" />

            <CustomButton
              variant="contained"
              className="w-3/4 p-5 rounded-3xl shadow-lg border border-[#2DC75C]"
              color="sextary"
              FontText="text-2xl"
              onPress={() => router.push("/(stack)/register")}
            >
              Registrarme
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
