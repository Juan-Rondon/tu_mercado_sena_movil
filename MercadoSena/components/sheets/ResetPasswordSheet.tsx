import React, { useEffect, useMemo, useRef } from "react";
import {
    Animated,
    Dimensions,
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    View,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode; // aquí se ingresa (texto, input, botón)
};

export default function ResetPasswordSheet({ visible, onClose, children }: Props) {
  const { height } = Dimensions.get("window");
  const sheetHeight = useMemo(() => Math.min(520, height * 0.65), [height]);

  // Arranca fuera de la pantalla (abajo)
  const translateY = useRef(new Animated.Value(sheetHeight)).current;
  const backdrop = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 260,
          useNativeDriver: true,
        }),
        Animated.timing(backdrop, {
          toValue: 1,
          duration: 260,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: sheetHeight,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.timing(backdrop, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, sheetHeight, translateY, backdrop]);

  // Cierre con animación (para no cortar de golpe)
  const closeAnimated = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: sheetHeight,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(backdrop, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  };

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={closeAnimated}>
      {/* Fondo oscuro */}
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.25)",
          opacity: backdrop,
        }}
      >
        {/* Tocar afuera cierra */}
        <Pressable style={{ flex: 1 }} onPress={closeAnimated} />
      </Animated.View>

      {/* Sheet */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Animated.View
          style={{
            height: sheetHeight,
            transform: [{ translateY }],
            backgroundColor: "white",
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            padding: 18,
          }}
        >
          {/* “manija” */}
          <View
            style={{
              alignSelf: "center",
              width: 60,
              height: 5,
              borderRadius: 999,
              backgroundColor: "#D1D5DB",
              marginBottom: 12,
            }}
          />
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
}