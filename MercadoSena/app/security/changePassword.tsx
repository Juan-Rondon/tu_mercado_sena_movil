import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CambioContra() {
  const [actual, setActual] = useState("");
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const validarPassword = () => {
    if (!actual || !nueva || !confirmar) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (nueva.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (nueva !== confirmar) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    Alert.alert("Éxito", "Contraseña cambiada correctamente ");
  };

  return (
    <ScrollView
      className="flex-1 bg-blue-600 px-6 pt-10"
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      {/* HEADER */}
      <View className="flex-row items-center mb-8">
        <TouchableOpacity onPress={() => Alert.alert("Volver")}>
          <Ionicons name="arrow-back" size={26} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-xl font-bold ml-4">
          Cambio de Contraseña
        </Text>
      </View>

      {/* DESCRIPCIÓN */}
      <Text className="text-white text-base mb-6 leading-6">
        La contraseña debe tener al menos 6 caracteres e incluir una combinación
        de número, letras y caracteres especiales (!$@%)
      </Text>

    </ScrollView>
  );
}
