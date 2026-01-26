import { getToken } from "@/src/lib/authToken";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function AuthGate() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const token = await getToken();

      if (token) {
        router.replace("/(tabs)/Home");
      } else {
        router.replace("/(stack)/welcome");
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
