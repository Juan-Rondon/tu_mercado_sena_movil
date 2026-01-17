import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

type ChatItem = {
  id: string;
  name: string;
  lastMsg: string;
  time: string;
  unread?: number;
  avatar?: any; // luego vendrá de BD
};

const chatScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const data: ChatItem[] = useMemo(
    () => [
      {
        id: "1",
        name: "Styward Sneaydher",
        lastMsg: "Ese balon si esta bueno",
        time: "10:21",
        unread: 2,
      },
      {
        id: "2",
        name: "Yhonaikerson Mejia",
        lastMsg: "a como el pam de 1k",
        time: "Ayer",
        unread: 0,
      },
      {
        id: "3",
        name: "Gabriel buena Vista Mira Flores (el ciego)",
        lastMsg: "el perro vien por separado?",
        time: "Lun",
        unread: 5,
      },
    ],
    []
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top", "bottom"]}>
      {/* Header simple opcional */}
      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", color: "#111827" }}>
          Chats
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingBottom: 16 + insets.bottom + 90, // para tu tab bar flotante
        }}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "rgba(0,0,0,0.06)", marginLeft: 72 }} />
        )}
        renderItem={({ item }) => {
  const unread = (item.unread ?? 0) > 0;

  return (
    <Pressable
      onPress={() => router.push("/chatUser/chatID")}
      style={({ pressed }) => ({
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 14,
        backgroundColor: pressed ? "rgba(0,0,0,0.04)" : "transparent",
      })}
    >
      {/* ✅ ESTE CONTENEDOR FUERZA avatar a la izquierda */}
      <View style={{ flexDirection: "row", alignItems: "center", minHeight: 72 }}>
        {/* Avatar */}
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: 26,
            backgroundColor: "#E5E7EB",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
            overflow: "hidden",
          }}
        >
          {item.avatar ? (
            <Image source={item.avatar} style={{ width: 52, height: 52 }} />
          ) : (
            <Ionicons name="person" size={24} color="#6B7280" />
          )}
        </View>

        {/* Centro: nombre + mensaje */}
        <View style={{ flex: 1, minWidth: 0, justifyContent: "center" }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 16,
              fontWeight: unread ? "800" : "700",
              color: "#111827",
            }}
          >
            {item.name}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              marginTop: 3,
              fontSize: 13,
              color: unread ? "#111827" : "#6B7280",
              fontWeight: unread ? "600" : "400",
            }}
          >
            {item.lastMsg}
          </Text>
        </View>

        {/* Derecha: hora + badge */}
        <View style={{ alignItems: "flex-end", justifyContent: "center", marginLeft: 10 }}>
          <Text
            style={{
              fontSize: 12,
              color: unread ? "#2f9d48" : "#9CA3AF",
              fontWeight: unread ? "700" : "500",
              marginBottom: 6,
            }}
          >
            {item.time}
          </Text>

          {unread ? (
            <View
              style={{
                minWidth: 22,
                height: 22,
                paddingHorizontal: 7,
                borderRadius: 11,
                backgroundColor: "#2f9d48",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 12, fontWeight: "800" }}>
                {item.unread}
              </Text>
            </View>
          ) : (
            <View style={{ height: 22, minWidth: 22 }} />
          )}
        </View>
      </View>
    </Pressable>
  );
}}
      />
    </SafeAreaView>
  );
};

export default chatScreen;
