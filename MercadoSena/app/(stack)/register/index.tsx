import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/buttons/CustomButton";
import Header from "@/components/headers/Header";
import CustomInput from "@/components/inputs/CustomInput";
import ResetPasswordSheet from "@/components/sheets/ResetPasswordSheet";
import { saveToken } from "@/src/lib/authToken";

const API_BASE_URL = "http://192.168.1.7:8000";

const RegisterScreen = () => {
  const router = useRouter();
  const [openReset, setOpenReset] = useState(false);
  const { height, width } = useWindowDimensions();

  // estados formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // loading
  const [loading, setLoading] = useState(false);

  // ALTURA VISUAL DEL HEADER
  const headerHeight = Math.min(220, Math.max(180, height * 0.25));

  // POSICIÓN FIJA DEL CONTENIDO
  const CONTENT_OFFSET = 260;

  const titleSize = width < 360 ? 34 : width < 420 ? 40 : 46;

  const handleRegister = async () => {
  if (!name.trim() || !email.trim() || !password.trim()) {
    Alert.alert("Faltan datos", "Por favor completa nombre, correo y contraseña.");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch(`${API_BASE_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      const msg =
        data?.message ||
        data?.errors?.email?.[0] ||
        data?.errors?.password?.[0] ||
        data?.errors?.name?.[0] ||
        "No se pudo registrar.";
      Alert.alert("Error", msg);
      return;
    }

    // Si el backend exige verificación, NO guardes token aún
    if (data?.requires_verification) {
      router.replace({
        pathname: "/verify",
        params: { email: email.trim() },
      });
      return;
    }

    // Si NO requiere verificación, debe venir token
    if (!data?.token) {
      Alert.alert("Error", "El servidor no devolvió token.");
      return;
    }

    await saveToken(data.token);
    router.replace("/(tabs)/Home");
  } catch (e) {
    Alert.alert("Error", "No fue posible conectar con el servidor.");
  } finally {
    setLoading(false);
  }
};

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safe}>
      <StatusBar style="light" translucent />

      <View style={styles.root}>
        {/* HEADER */}
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
              style={{
                marginTop: 5,
                fontSize: 40,
                textShadowColor: "rgba(0,0,0,0.35)",
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4,
              }}
            >
              Registrarse
            </Text>

            <Text
              className="text-white text-lg text-center mt-5 font-semibold"
              style={{ fontSize: 20 }}
            >
              Por favor registrese{"\n"}con su correo institucional
            </Text>
          </View>
        </Header>

        {/* ESPACIO FIJO */}
        <View style={{ height: CONTENT_OFFSET }} />

        {/* FORM */}
        <View style={styles.form}>
          <Text className="text-2xl font-Opensans-medium text-black mb-2">
            Nombre de Usuario
          </Text>

          <CustomInput
            className="p-1.5"
            placeholder="Nombre de Usuario"
            placeholderTextColor="#CDCDCD"
            type="text"
            icon={<Ionicons name="person-outline" size={20} color="#9CA3AF" />}
            value={name}
            onChangeText={setName}
          />

          <Text className="text-2xl font-Opensans-medium text-black mt-3 mb-2">
            Correo Institucional
          </Text>

          <CustomInput
            className="p-1.5"
            placeholder="Ejemplo@sena.edu.co"
            placeholderTextColor="#CDCDCD"
            type="email"
            icon={<Ionicons name="mail-outline" size={20} color="#9CA3AF" />}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <Text className="text-2xl font-Opensans-medium text-black mt-3 mb-2">
            Contraseña
          </Text>

          <CustomInput
            className="p-1.5"
            placeholder="Ingrese su contraseña"
            placeholderTextColor="#CDCDCD"
            type="password"
            icon={<Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />}
            value={password}
            onChangeText={setPassword}
          />

          <View className="items-center mt-8">
            <CustomButton
              variant="contained"
              onPress={handleRegister}
              className="w-full p-5 rounded-r-full rounded-l-full border border-[#2DC75C]"
              FontText="text-2xl"
              color="sextary"
            >
              {loading ? "Creando..." : "Registrar Cuenta"}
            </CustomButton>
          </View>

          <View className="mt-10 mb-6 border-t border-gray-300" />

          <View className="items-center">
            <Text className="text-xl text-gray-400 mb-1">
              ¿Ya tienes una cuenta?
            </Text>

            <CustomButton
              variant="text-only"
              color="secondary"
              FontText="text-xl"
              underline
              onPress={() => router.push("/(stack)/login")}
            >
              Iniciar Sesión
            </CustomButton>
          </View>
        </View>

        {/* FOOTER */}
        <View className="items-center pb-6">
          <Text className="text-xl text-gray-400">Versión 0.0.1</Text>
        </View>
      </View>

      <ResetPasswordSheet visible={openReset} onClose={() => setOpenReset(false)}>
        {/* igual que antes */}
      </ResetPasswordSheet>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ffffff" },
  root: { flex: 1, backgroundColor: "#ffffff" },
  form: { flex: 1, paddingHorizontal: 24 },

  headerShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 18,
  },
});
