import CustomButton from "@/components/buttons/CustomButton";
import { saveToken } from "@/src/lib/authToken";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

// const API_BASE_URL = "http://192.168.1.7:8000";
const API_BASE_URL = "http://10.32.17.143:8000";

export default function VerifyScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const params = useLocalSearchParams<{ email?: string }>();
  const email = useMemo(() => (params?.email ? String(params.email) : ""), [params]);

  // 4 dígitos
  const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
  const code = useMemo(() => digits.join(""), [digits]);

  // refs para auto-focus
  const inputsRef = useRef<Array<TextInput | null>>([]);

  // UI
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  // Modal tipo iOS
  const [infoVisible, setInfoVisible] = useState(true);

  useEffect(() => {
    // al entrar: foco primer input
    const t = setTimeout(() => inputsRef.current[0]?.focus(), 250);
    return () => clearTimeout(t);
  }, []);

  const setDigit = (value: string, index: number) => {
    // solo 0-9
    const v = value.replace(/\D/g, "");

    // si pegó 4 dígitos de una vez
    if (v.length > 1) {
      const arr = v.slice(0, 4).split("");
      const filled = ["", "", "", ""];
      for (let i = 0; i < 4; i++) filled[i] = arr[i] ?? "";
      setDigits(filled);
      if (arr.length >= 4) inputsRef.current[3]?.blur();
      else inputsRef.current[arr.length]?.focus();
      return;
    }

    const next = [...digits];
    next[index] = v;
    setDigits(next);

    if (v && index < 3) inputsRef.current[index + 1]?.focus();
    if (index === 3 && v) inputsRef.current[3]?.blur();
  };

  const handleBackspace = (index: number) => {
    if (digits[index]) {
      const next = [...digits];
      next[index] = "";
      setDigits(next);
      return;
    }
    if (index > 0) {
      inputsRef.current[index - 1]?.focus();
      const next = [...digits];
      next[index - 1] = "";
      setDigits(next);
    }
  };

  const canSubmit = code.length === 4 && digits.every((d) => d.length === 1);

  const handleVerify = async () => {
    if (!email) {
      Alert.alert("Error", "No llegó el correo a esta pantalla.");
      return;
    }
    if (!canSubmit) {
      Alert.alert("Código incompleto", "Ingresa los 4 dígitos.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/api/verify-email-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg =
          data?.message ||
          data?.errors?.code?.[0] ||
          data?.errors?.email?.[0] ||
          "No se pudo validar el código.";
        Alert.alert("Error", msg);
        return;
      }

      if (!data?.token) {
        Alert.alert("Error", "El servidor no devolvió token.");
        return;
      }

      // guarda token y entra a la app
      await saveToken(data.token);
      router.replace("/(tabs)/Home");
    } catch (e) {
      Alert.alert("Error", "No fue posible conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) return;

    try {
      setResending(true);

      const res = await fetch(`${API_BASE_URL}/api/resend-verification-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg =
          data?.message ||
          data?.errors?.email?.[0] ||
          "No se pudo reenviar el código.";
        Alert.alert("Error", msg);
        return;
      }

      Alert.alert("Listo", "Te reenviamos un nuevo código al correo.");
      setDigits(["", "", "", ""]);
      setTimeout(() => inputsRef.current[0]?.focus(), 200);
    } catch (e) {
      Alert.alert("Error", "No fue posible conectar con el servidor.");
    } finally {
      setResending(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* HEADER SIMPLE */}
        <View style={[styles.header, { paddingTop: Math.max(insets.top, 12) }]}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color="#2FBF2F" />
          </Pressable>

          <Text style={styles.headerTitle}>Verificación</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* CONTENIDO */}
        <View style={styles.container}>
          <Text style={styles.title}>Ingresa el código</Text>
          <Text style={styles.subtitle}>
            Enviamos un código de 4 dígitos a{"\n"}
            <Text style={{ fontWeight: "700" }}>{email || "tu correo"}</Text>
          </Text>

          {/* 4 INPUTS */}
          <View style={styles.codeRow}>
            {digits.map((d, i) => (
              <TextInput
                key={i}
                ref={(r) => {inputsRef.current[i] = r;}}
                value={d}
                onChangeText={(v) => setDigit(v, i)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") handleBackspace(i);
                }}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.codeInput}
                returnKeyType="done"
              />
            ))}
          </View>

          {/* BOTÓN VALIDAR */}
          <View style={{ marginTop: 24 }}>
            <CustomButton
              variant="contained"
              onPress={handleVerify}
              className="w-full p-5 rounded-r-full rounded-l-full border border-[#2DC75C]"
              FontText="text-2xl"
              color="sextary"
            >
              {loading ? "Validando..." : "Validar código"}
            </CustomButton>
          </View>

          {/* REENVIAR */}
          <View style={styles.resendRow}>
            <Text style={{ color: "#6B7280", fontSize: 14 }}>¿No te llegó?</Text>

            <Pressable onPress={handleResend} disabled={resending} style={{ padding: 8 }}>
              <Text style={{ color: "#2FBF2F", fontWeight: "700" }}>
                {resending ? "Reenviando..." : "Reenviar código"}
              </Text>
            </Pressable>
          </View>
        </View>

        {/* MODAL tipo iOS sheet */}
        <Modal
          visible={infoVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setInfoVisible(false)}
          presentationStyle={Platform.OS === "ios" ? "pageSheet" : "overFullScreen"}
        >
          {/* backdrop */}
          <Pressable style={styles.backdrop} onPress={() => setInfoVisible(false)} />

          {/* sheet */}
          <View style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 16) }]}>
            <View style={styles.sheetHandle} />

            <Text style={styles.sheetTitle}>Código enviado ✅</Text>

            <Text style={styles.sheetText}>
              Te enviamos un código de 4 dígitos al correo:
              {"\n"}
              <Text style={{ fontWeight: "700" }}>{email || "tu correo"}</Text>
              {"\n\n"}
              Ingresa el código y toca <Text style={{ fontWeight: "700" }}>“Validar código”</Text>.
            </Text>

            <View style={{ marginTop: 14 }}>
              <Pressable onPress={() => setInfoVisible(false)} style={styles.sheetBtn}>
                <Text style={{ color: "#fff", fontWeight: "700" }}>Entendido</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 14,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.06)",
    backgroundColor: "#fff",
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 10,
    color: "#6B7280",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 20,
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 22,
  },
  codeInput: {
    width: 54,
    height: 58,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
    backgroundColor: "#F5F5F7",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
  },
  resendRow: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  // modal sheet
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  sheet: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 16,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  sheetHandle: {
    alignSelf: "center",
    width: 52,
    height: 5,
    borderRadius: 999,
    backgroundColor: "rgba(0,0,0,0.15)",
    marginBottom: 10,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
  },
  sheetText: {
    marginTop: 10,
    color: "#374151",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  sheetBtn: {
    height: 48,
    borderRadius: 14,
    backgroundColor: "#2FBF2F",
    alignItems: "center",
    justifyContent: "center",
  },
});
