import CustomButton from "@/components/buttons/CustomButton";
import { useRouter } from 'expo-router';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const RADIUS = 90;

const welcomeScreen = () => {

const router = useRouter();

  return (

    <View style={styles.container}>

      <View style={styles.darkBg} />
      <View style={styles.lightBg} />
      
      <View style={styles.content}>
        <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
        />
        <Text style={styles.title}>Tu Mercado SENA</Text>
      </View>

        {/* <Text style={styles.subtitle}>
            La plataforma exclusiva para la comunidad SENA.
            Compra, vende y conecta de forma segura.
        </Text> */}

      <View className="items-center top-44">

        <CustomButton
        variant="contained"
        className="w-3/4 p-5 rounded-r-3xl rounded-l-3xl shadow-xl border border-[#538392]"
        color="tertiary"
        FontText="text-xl"
        onPress={() => router.push('/(stack)/login')}
        >
            Iniciar Sesión
        </CustomButton>

      </View>
      
      <View className="items-center mb-44">

        <CustomButton
        variant="contained"
        className="w-3/4 p-5 rounded-r-3xl rounded-l-3xl shadow-xl border border-[#8BACP5]"
        color="quinary"
        FontText="text-xl"
        onPress={() => router.push('/(stack)/register')}
        >
            Registrarme
        </CustomButton>

      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  darkBg: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    bottom: 240,
    backgroundColor: "#538392",
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
  },
  lightBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "35%",
    backgroundColor: "#8BACB5",
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 90,
    paddingHorizontal: 24,
  },
  logo: {
    top: -140,
    width: 400,
    height: 400,
    marginBottom: 16,
  },
  title: {
    top: -260,
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
    textAlign: "center",
  },
//   subtitle: {
//     top: -100,
//     fontSize: 20,
//     color: "black",
//     textAlign: "center",
//     lineHeight: 18,
//   },
});

export default welcomeScreen;
