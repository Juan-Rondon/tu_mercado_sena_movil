import CustomButton from "@/components/buttons/CustomButton";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { Image, ScrollView, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const defaultProductImage = require("../../../MercadoSena/assets/images/imagedefault.png");

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  // Mantengo “tus medidas” pero hago que se adapten si la pantalla es muy pequeña
  const avatarBox = useMemo(() => {
    const size = Math.max(130, Math.min(150, width * 0.38)); // 150 aprox en phones normales
    const img = Math.max(90, Math.min(100, size * 0.68));    // 100 como tú lo tenías
    return { size, img };
  }, [width]);

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
        {/* VOLVER (sin posiciones fijas) */}
        <View style={{ marginBottom: 8, alignItems: "flex-start" }}>
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

        {/* TÍTULO (centrado real, sin top-8) */}
        <Text className="text-center font-Opensans-bold" style={{ fontSize: 18, marginTop: 6 }}>
          TU PERFIL
        </Text>

        {/* HEADER PERFIL */}
        <View className="items-center" style={{ marginTop: 22 }}>
          {/* Avatar */}
          <View
            style={{
              width: avatarBox.size,
              height: avatarBox.size,
              borderRadius: avatarBox.size / 2,
              backgroundColor: "#CDCDCD",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/default_user.png")}
              style={{ width: avatarBox.img, height: avatarBox.img }}
              resizeMode="contain"
            />
          </View>

          {/* Nombre */}
          <Text className="font-Opensans-medium text-center w-full" style={{ marginTop: 14, fontSize: 18 }}>
            Freddy Reyes
          </Text>

          {/* Acciones (sin top-7; espaciado estable) */}
          <View
            style={{
              flexDirection: "row",
              width: "75%",
              justifyContent: "space-between",
              marginTop: 14,
            }}
          >
            <CustomButton
              variant="icon-only"
              color="sextary"
              onPress={() => router.push("/")}
              icon={<Ionicons name="share-social" size={20} color="#fff" />}
            />

            <CustomButton
              variant="icon-only"
              color="sextary"
              onPress={() => router.push("/")}
              icon={<MaterialCommunityIcons name="account-edit" size={20} color="#fff" />}
            />

            <CustomButton
              variant="icon-only"
              color="sextary"
              onPress={() => router.push("/")}
              icon={<Ionicons name="bag-outline" size={20} color="#fff" />}
            />

            <CustomButton
              variant="icon-only"
              color="sextary"
              onPress={() => router.push("/")}
              icon={<Ionicons name="chatbox-outline" size={20} color="#fff" />}
            />
          </View>

          {/* Descripción */}
          <View style={{ width: "75%", marginTop: 18 }}>
            <Text className="text-center text-gray-600 leading-6">
              Soy un usuario activo en MercadoSena. Participo en diferentes
              secciones del mercado digital y gestiono mi información desde la app.
            </Text>
          </View>
        </View>

        {/* Divider (sin w-90) */}
        <View
          style={{
            height: 1,
            backgroundColor: "#d1d5db",
            marginVertical: 22,
            width: "100%",
          }}
        />

        {/* Mis productos */}
        <Text className="text-center font-Opensans-bold" style={{ fontSize: 16, marginBottom: 8 }}>
          Mis productos
        </Text>

        {/* Grid (mantengo w-1/2) */}
        <View className="flex-row flex-wrap" style={{ marginTop: 6 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <View key={i} className="w-1/2 p-2">
              <CustomButton
                variant="card"
                isOwner={true}
                defaultImage={defaultProductImage}
                price="$9.99"
                onPress={() => router.push("/product/[id]")}
                onCartPress={() => router.push("/product/[id]?modal=true")}
              >
                Comprar ahora
              </CustomButton>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
