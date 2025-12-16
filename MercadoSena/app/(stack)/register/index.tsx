import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import CustomButton from "@/components/buttons/CustomButton";
import CustomInput from "@/components/inputs/CustomInput";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pt-16 pb-4">

      <View>
        <Text className="font-Opensans-bold text-4xl text-black mt-16">
          Registrarme
        </Text>

        <Text className="text-ml text-gray-400 mt-2">
          Por favor registrese con su correo institucional
        </Text>
      </View>

      <View className="mt-16">
  
        <Text className="text-2xl font-Opensans-medium text-black mb-2">
          Nombre de Usuario
        </Text>

        <CustomInput
          className="p-1.5"
          placeholder="Ingrese su nombre de usuario"
          placeholderTextColor="#CDCDCD"
          type="email"
          icon={<Ionicons 
            name="person"
            size={20}
            color="#9CA3AF"
            />
          }
        />
        
        <Text className="text-2xl font-Opensans-medium text-black mb-2">
          Correo Institucional
        </Text>

        <CustomInput
          className="p-1.5"
          placeholder="Ejemplo@sena.edu.co"
          placeholderTextColor="#CDCDCD"
          type="email"
          icon={<Ionicons 
            name="mail-outline"
            size={20}
            color="#9CA3AF"
            />
          }
        />

        <Text className="text-2xl font-Opensans-medium text-black mb-2">
          Contraseña
        </Text>

        <CustomInput
        className="p-1.5"
          placeholder="Ingrese su contraseña"
          placeholderTextColor="#CDCDCD"
          type="password"
          icon={<Ionicons
            name="lock-closed-outline"
            size={20}
            color="#9CA3AF"
            />
          }
        />
      </View>

      {/* Botón principal */}
      <View className="items-center mt-8">
        <CustomButton
          variant="contained"
          onPress={() => router.push("/Home")}
          className="w-80 p-5 rounded-l-3xl rounded-r-3xl border border-[#2DC75C]"
          FontText="text-2xl"
          color="sextary"
        >
          Registrar Cuenta
        </CustomButton>
      </View>

      {/* Separador */}
      <View className="mt-10 mb-6 border-t border-gray-300" />

      {/* Registro */}
      <View className="items-center">
        <Text className="text-xl text-gray-400 mb-1">
          ¿Ya tienes una cuenta?
        </Text>

        <CustomButton
          variant="text-only"
          color="secondary"
          FontText="text-xl"
          underline={true}
          onPress={() => router.push("/login")}
        >
          Iniciar Sesión
        </CustomButton>
      </View>

      {/* Versión abajo */}
      <View className="flex-1 justify-end items-center">
        <Text className="text-xl text-gray-400 mb-10">Versión 0.0.1</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
