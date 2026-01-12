import CustomButton from "@/components/buttons/CustomButton";
import WelcomeCarousel, { CarouselSlide } from "@/components/carousel/WelcomeCarousel";
import { useRouter } from 'expo-router';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const RADIUS = 90;

const welcomeScreen = () => {

const router = useRouter();

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

    <View style={styles.container}>

      {/* <View style={styles.darkBg} /> */}
      <View style={styles.lightBg} />
      
      <View style={styles.content}>
        <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
        />
        <Text style={styles.title}>Tu Mercado SENA</Text>
      </View>

      <View style={{ marginTop: -240 }}>
        <WelcomeCarousel slides={slides} height={240} autoplayMs={3000} />
      </View>

      <View className="items-center top-44">

        <CustomButton
        variant="contained"
        className="w-3/4 p-5 rounded-r-3xl rounded-l-3xl shadow-lg"
        color="tertiary"
        FontText="text-2xl"
        onPress={() => router.push('/(stack)/login')}
        >
            Iniciar Sesión
        </CustomButton>

      </View>
      
      <View className="items-center mb-44">

        <CustomButton
        variant="contained"
        className="w-3/4 p-5 rounded-r-3xl rounded-l-3xl shadow-lg border border-[#2DC75C]"
        color="sextary"
        FontText="text-2xl"
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
  // darkBg: {
  //   position: "absolute",
  //   top: 80,
  //   left: 0,
  //   right: 0,
  //   bottom: 240,
  //   backgroundColor: "#32CD32",
  //   borderBottomLeftRadius: RADIUS,
  //   borderBottomRightRadius: RADIUS,
  // },
  lightBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "35%",
    backgroundColor: "#2DC75C",
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
    top: -160,
    width: 400,
    height: 400,
    marginBottom: 16,
  },
  title: {
    top: -280,
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
