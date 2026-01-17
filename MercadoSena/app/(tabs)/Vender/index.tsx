import CustomButton from "@/components/buttons/CustomButton";
import CustomInput from "@/components/inputs/CustomInput";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const venderScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [images, setImages] = useState<string[]>([]);

  const pickImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso requerido", "Necesito acceso a tu galería.");
      return;
    }

    const remaining = 3 - images.length;
    if (remaining <= 0) {
      Alert.alert("Límite alcanzado", "Máximo 3 imágenes.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: remaining,
      quality: 0.8,
    });

    if (!result.canceled) {
      const picked = result.assets.map((a) => a.uri);
      setImages((prev) => [...prev, ...picked].slice(0, 3));
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const Box = ({ uri, index, isUpload }: any) => (
    <Pressable onPress={isUpload ? pickImages : undefined} style={styles.box}>
      {uri ? (
        <>
          <Image source={{ uri }} style={styles.image} resizeMode="cover" />
          <Pressable onPress={() => removeImage(index)} style={styles.removeBtn}>
            <Text style={styles.removeText}>×</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.placeholder}>
          {isUpload ? (
            <>
              <Text style={styles.uploadText}>Subir imagen</Text>
              <Text style={styles.counter}>{images.length}/3</Text>
            </>
          ) : (
            <Text style={styles.plus}>+</Text>
          )}
        </View>
      )}
    </Pressable>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={{ flex: 1 }}
          className="bg-white"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom: Math.max(insets.bottom, 12) + 90,
          }}
        >
          
          {/* HEADER */}
          <View
            className="bg-sextary-600 items-center"
            style={{ paddingTop: 12, paddingBottom: 12 }}
          >
            <Text className="text-white text-lg font-semibold">
              Publicar Nuevo Producto
            </Text>
          </View>

          {/* CARD FORM */}
          <View className="m-4 rounded-xl border border-sextary-600 p-4 bg-white">
            <Text className="font-semibold mb-1">Nombre del Producto *</Text>
            <CustomInput />

            <Text className="font-semibold mb-1 mt-2">
              Descripción (max 185 caracteres) *
            </Text>
            <TextInput
              style={styles.input}
              multiline
              maxLength={185}
              placeholder="Ingrese descripción"
              placeholderTextColor="#9CA3AF"
            />

            <View className="flex-row justify-between mt-3">
              <View style={{ width: "48%" }}>
                <Text className="font-semibold mb-1">Precio (COP)*</Text>
                <CustomInput type="number" />
              </View>
              <View style={{ width: "48%" }}>
                <Text className="font-semibold mb-1">Cantidad *</Text>
                <CustomInput type="number" />
              </View>
            </View>

            <Text className="font-semibold mb-1 mt-3">Categoría *</Text>
            <CustomButton
              variant="desplegar"
              options={["Tecnologia", "Ropa", "Hogar", "Accesorios", "Otros"]}
              placeholder="Seleccione una categoría"
            />

            <Text className="font-semibold mb-1 mt-3">Condición *</Text>
            <CustomButton
              variant="desplegar"
              options={["Nuevo", "Usado", "Reparado"]}
              placeholder="Seleccione una condición"
            />

            <Text className="font-semibold text-center mt-4">Imagen del producto</Text>
            <Text className="text-center text-gray-400 text-sm mb-3">Máximo 3</Text>

            {/* GRID 2x2 (responsivo por % + aspectRatio) */}
            <View style={styles.grid}>
              <Box isUpload />
              <Box uri={images[0]} index={0} />
              <Box uri={images[1]} index={1} />
              <Box uri={images[2]} index={2} />
            </View>

            <CustomButton variant="contained" className="rounded-full py-3 bg-sextary-600 mt-4">
              <Text className="text-white text-lg text-center">Publicar Producto</Text>
            </CustomButton>

            <CustomButton variant="contained" className="bg-red-600 rounded-full py-3 mt-3">
              <Text className="text-white text-lg text-center">Cancelar</Text>
            </CustomButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 110, // ✅ un pelín más estable en pantallas pequeñas
    backgroundColor: "#F5F5F7",
    borderRadius: 12,
    padding: 10,
    textAlignVertical: "top",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "48%",
    aspectRatio: 1,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#9CA3AF",
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  plus: {
    fontSize: 24,
    color: "#9CA3AF",
  },

  uploadText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
  },

  counter: {
    marginTop: 6,
    color: "#9CA3AF",
  },

  removeBtn: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },

  removeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default venderScreen;
