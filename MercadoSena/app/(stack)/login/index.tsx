import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";

import CustomButton from "@/components/buttons/CustomButton";
import CustomInput from "@/components/inputs/CustomInput";
import ResetPasswordSheet from "@/components/sheets/ResetPasswordSheet";

const RADIUS = 200;

const LoginScreen = () => {
  const router = useRouter();
  const [openReset, setOpenReset] = useState(false);

  return (
    <View className="flex-1 bg-white px-6 pt-1 pb-4">

      <View>
        <Text className="font-Opensans-bold text-4xl text-black mt-40">
          Iniciar Sesión
        </Text>

        <Text className="text-ml text-gray-400 mt-2">
          Por favor inicie sesión con una cuenta registrada
        </Text>
      </View>

      <View className="mt-16">
        <Text className="text-2xl font-Opensans-medium text-black mb-2">
          Correo Institucional
        </Text>

        <CustomInput
          className="p-1.5"
          placeholder="Ejemplo@sena.edu.co"
          placeholderTextColor="#CDCDCD"
          type="email"
          icon={
            <Ionicons
              name="mail-outline"
              size={20}
              color="#9CA3AF"
            />
          }
        />

        <Text className="text-2xl font-Opensans-medium text-black mt-6 mb-2">
          Contraseña
        </Text>

        <CustomInput
          className="p-1.5"
          placeholder="Ingrese su contraseña"
          placeholderTextColor="#CDCDCD"
          type="password"
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#9CA3AF"
            />
          }
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
      </View>

      <View className="items-center mt-8">
        <CustomButton
          variant="contained"
          onPress={() => router.push("/Home")}
          className="w-80 p-5 rounded-l-3xl rounded-r-3xl border border-[#2DC75C]"
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
          Registrarte
        </CustomButton>
      </View>

      <View className="flex-1 justify-end items-center">
        <Text className="text-xl text-gray-400 mb-10">
          Versión 0.0.1
        </Text>
      </View>

      <ResetPasswordSheet
        visible={openReset}
        onClose={() => setOpenReset(false)}
      >
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
          placeholderTextColor="#CDCDCD"
          type="email"
          icon={
            <Ionicons
              name="mail-outline"
              size={20}
              color="#9CA3AF"
            />
          }
        />

        <View className="items-center mt-6">
          <CustomButton
            variant="contained"
            className="w-80 p-5 rounded-l-3xl rounded-r-3xl border border-[#2DC75C]"
            FontText="text-2xl"
            color="sextary"
            icon={
              <Ionicons
                name="send"
                size={22}
                color="#000000"
                />
            }
            onPress={() => {
              // lógica de envío de código
              setOpenReset(false);
            }}
          >
            Enviar Código
          </CustomButton>
        </View>

      </ResetPasswordSheet>
    </View>
  );
};

// const styles = StyleSheet.create({
//   lightBg: {
//     position: "fixed",
//     top: -90,
//     left: 175,
//     right: 0,
//     height: "35%",
//     backgroundColor: "#2DC75C",
//     borderBottomLeftRadius: RADIUS,
//     borderBottomRightRadius: RADIUS,
//   },
//   content: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 90,
//     paddingHorizontal: 24,
//   },
//   logo: {
//     top: -510,
//     left: 120,
//     width: 350,
//     height: 350,
//     marginBottom: 16,
//   },
// })

export default LoginScreen;