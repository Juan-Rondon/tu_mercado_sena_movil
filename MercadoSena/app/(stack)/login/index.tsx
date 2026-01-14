import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/buttons/CustomButton";
import Header from "@/components/headers/Header";
import CustomInput from "@/components/inputs/CustomInput";
import ResetPasswordSheet from "@/components/sheets/ResetPasswordSheet";

const LoginScreen = () => {
  const router = useRouter();
  const [openReset, setOpenReset] = useState(false);
  const { height, width } = useWindowDimensions();

  // 🔹 1) ALTURA VISUAL DEL HEADER (puedes cambiarla libremente)
  const headerHeight = Math.min(220, Math.max(180, height * 0.25));

  // 🔹 2) POSICIÓN FIJA DEL CONTENIDO (NO CAMBIA)
  const CONTENT_OFFSET = 280;

  const titleSize =
    width < 360 ? 34 :
    width < 420 ? 40 :
    46;

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safe}>
      <StatusBar style="light" translucent />

      <View style={styles.root}>
        {/* HEADER (solo visual) */}
        <Header
          variant="normal"
          height={headerHeight}
          radius={70}
          color="sextary"
          titleSize={titleSize}
          showLogo={false}
          style={styles.headerShadow}
        >
          <View className="items-center px-6">
            
            <Text
              className="font-Opensans-bold text-white text-center"
              style={{ marginTop: 5, fontSize: 40, textShadowColor: "rgba(0,0,0,0.35)",
              textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4, }}
            >
              Iniciar Sesión
            </Text>
            
            <Text 
            className="text-white text-lg text-center mt-5 font-semibold"
            style={{ fontSize: 20 }}
            >
              Por favor inicie sesión{"\n"}con una cuenta registrada
            </Text>
          
          </View>
        </Header>

        {/* 🔒 ESPACIO FIJO DEL CONTENIDO (NO depende del header) */}
        <View style={{ height: CONTENT_OFFSET }} />

        {/* FORMULARIO (YA NO SE MUEVE) */}
        <View style={styles.form}>
          <Text className="text-2xl font-Opensans-medium text-black mb-2">
            Correo Institucional
          </Text>

          <CustomInput
            className="p-1.5"
            placeholder="Ejemplo@sena.edu.co"
            placeholderTextColor="#CDCDCD"
            type="email"
            icon={<Ionicons name="mail-outline" size={20} color="#9CA3AF" />}
          />

          <Text className="text-2xl font-Opensans-medium text-black mt-6 mb-2">
            Contraseña
          </Text>

          <CustomInput
            className="p-1.5"
            placeholder="Ingrese su contraseña"
            placeholderTextColor="#CDCDCD"
            type="password"
            icon={<Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />}
          />

          <View className="items-end mt-3">
            <CustomButton
              variant="text-only"
              color="secondary"
              FontText="text-xl"
              underline
              onPress={() => setOpenReset(true)}
            >
              ¿Olvidaste tu contraseña?
            </CustomButton>
          </View>

          <View className="items-center mt-8">
            <CustomButton
              variant="contained"
              onPress={() => router.push("/Home")}
              className="w-full p-5 rounded-r-full rounded-l-full border border-[#2DC75C]"
              FontText="text-2xl"
              color="sextary"
            >
              Iniciar Sesión
            </CustomButton>
          </View>

          <View className="mt-10 mb-6 border-t border-gray-300" />

          <View className="items-center">
            <Text className="text-xl text-gray-400 mb-1">
              ¿No tienes una cuenta?
            </Text>

            <CustomButton
              variant="text-only"
              color="secondary"
              FontText="text-xl"
              underline
              onPress={() => router.push("/register")}
            >
              Registrarse
            </CustomButton>
          </View>
        </View>

        {/* FOOTER */}
        <View className="items-center pb-6">
          <Text className="text-xl text-gray-400">
            Versión 0.0.1
          </Text>
        </View>
      </View>

      <ResetPasswordSheet
        visible={openReset}
        onClose={() => setOpenReset(false)}
      >
        {/* igual que antes */}
      </ResetPasswordSheet>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ffffff" },
  root: { flex: 1, backgroundColor: "#ffffff" },
  form: { flex: 1, paddingHorizontal: 24 }, 

  headerShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 18, // Android
  },
});
