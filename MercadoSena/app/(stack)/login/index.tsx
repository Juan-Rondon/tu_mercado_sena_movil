import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/buttons/CustomButton";
import CustomInput from "@/components/inputs/CustomInput";
import ResetPasswordSheet from "@/components/sheets/ResetPasswordSheet";

const LoginScreen = () => {
  const router = useRouter();
  const [openReset, setOpenReset] = useState(false);
  const { width, height } = useWindowDimensions();

  const headerH = Math.min(Math.max(height * 0.26, 190), 230);
  const logoSize = Math.min(Math.max(width * 0.22, 86), 110);
  const overlap = Math.min(Math.max(headerH * 0.62, 135), 165);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* HEADER VERDE */}
        <View style={{ height: headerH, backgroundColor: "#2DC75C" }} />

        {/* CONTENEDOR SUPERPUESTO */}
        <View className="flex-1" style={{ marginTop: -overlap }}>
          {/* LOGO FLOTANTE */}
          <View className="items-center" style={{ zIndex: 10 }}>
            <View
              style={{
                width: logoSize,
                height: logoSize,
                borderRadius: logoSize / 2,
                backgroundColor: "#1DB32C",
                alignItems: "center",
                justifyContent: "center",
                shadowOpacity: 0.35,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: 8 },
                elevation: 8,
              }}
            >
              <Image
                source={require("../../../assets/images/logo.png")}
                style={{
                  width: logoSize * 1.7,
                  height: logoSize * 1.7,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>

          {/* TARJETA */}
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderTopLeftRadius: 46,
              borderTopRightRadius: 46,
              paddingTop: 78,
              paddingHorizontal: 18,
              paddingBottom: 18,
              marginTop: -(logoSize / 2),
            }}
          >
            {/* La magia para que no haya scroll: separar contenido arriba y abajo */}
            <View style={{ flex: 1, justifyContent: "space-between" }}>
              {/* ARRIBA: textos + inputs + botones */}
              <View>
                <Text className="font-Opensans-bold text-4xl text-black">
                  Iniciar Sesión
                </Text>

                <Text className="text-ml text-gray-400 mt-2">
                  Por favor inicie sesión con una cuenta registrada
                </Text>

                <View className="mt-10">
                  <Text className="text-2xl font-Opensans-medium text-black mb-2">
                    Correo Institucional
                  </Text>

                  <CustomInput
                    className="p-1.5"
                    placeholder="Ejemplo@sena.edu.co"
                    type="email"
                    icon={<Ionicons name="mail-outline" size={20} color="#9CA3AF" />}
                  />

                  <Text className="text-2xl font-Opensans-medium text-black mt-8 mb-2">
                    Contraseña
                  </Text>

                  <CustomInput
                    className="p-1.5"
                    placeholder="Ingrese su contraseña"
                    type="password"
                    icon={<Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />}
                  />

                  <View className="items-end mt-4">
                    <CustomButton
                      variant="text-only"
                      color="secondary"
                      FontText="text-xl"
                      underline
                      onPress={() => setOpenReset(true)}
                    >
                      Olvidaste tu contraseña?
                    </CustomButton>
                  </View>

                  <View className="items-center mt-8">
                    <CustomButton
                      variant="contained"
                      onPress={() => router.push("/Home")}
                      className="w-full max-w-[360px] self-center p-5 rounded-3xl border border-[#2DC75C]"
                      FontText="text-2xl"
                      color="sextary"
                    >
                      Iniciar Sesión
                    </CustomButton>
                  </View>
                </View>

              </View>
                {/* <View className="mt-10 border-t border-gray-200" /> */}

              {/* ABAJO: registro + versión */}
              <View className="items-center pt-8">
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
                  Registrarte
                </CustomButton>

                <View className="mt-4">
                  <Text className="text-xl text-gray-400">Versión 0.0.1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* SHEET */}
        <ResetPasswordSheet visible={openReset} onClose={() => setOpenReset(false)}>
          <Text className="font-Opensans-bold text-2xl text-black mt-10">
            Recuperar Contraseña
          </Text>

          <Text className="text-gray-400 mt-2 mb-4">
            Ingrese su Correo Institucional
          </Text>

          <Text className="text-2xl font-Opensans-medium text-black mb-2 mt-7">
            Correo Institucional
          </Text>

          <CustomInput
            className="p-1.5"
            placeholder="Ejemplo@sena.edu.co"
            type="email"
            icon={<Ionicons name="mail-outline" size={20} color="#9CA3AF" />}
          />

          <View className="items-center mt-6">
            <CustomButton
              variant="contained"
              className="w-full max-w-[360px] self-center p-5 rounded-3xl border border-[#2DC75C]"
              FontText="text-2xl"
              color="sextary"
              icon={<Ionicons name="send" size={22} color="#000000" />}
              onPress={() => setOpenReset(false)}
            >
              Enviar Código
            </CustomButton>
          </View>
        </ResetPasswordSheet>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
