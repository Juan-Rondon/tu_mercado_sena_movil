// components/sheets/ResetPasswordSheet.tsx
import React, { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  PanResponder,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ResetPasswordSheet({ visible, onClose, children }: Props) {
  const { height } = Dimensions.get("window");
  const sheetHeight = useMemo(() => Math.min(520, height * 0.65), [height]);

  const translateY = useRef(new Animated.Value(sheetHeight)).current;
  const backdrop = useRef(new Animated.Value(0)).current;

  const open = () => {
    translateY.setValue(sheetHeight);
    backdrop.setValue(0);

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
  };

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
    ]).start(() => {
      onClose(); // <- aquí apagas visible en Login
    });
  };

  useEffect(() => {
    if (visible) open();
  }, [visible]);

  // Gesture SOLO en el handle (barrita)
  const panResponder = useRef(
  PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, g) => g.dy > 2 && Math.abs(g.dx) < 15,
    onPanResponderMove: (_, g) => {
      const nextY = Math.max(0, Math.min(sheetHeight, g.dy));
      translateY.setValue(nextY);
      backdrop.setValue(1 - nextY / sheetHeight);
    },
    onPanResponderRelease: (_, g) => {
      const shouldClose = g.dy > 90 || g.vy > 1.0; // un poco más sensible
      if (shouldClose) closeAnimated();
      else {
        Animated.parallel([
          Animated.spring(translateY, { toValue: 0, useNativeDriver: true }),
          Animated.timing(backdrop, { toValue: 1, duration: 120, useNativeDriver: true }),
        ]).start();
      }
    },
  })
).current;

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={closeAnimated}>
      <View style={styles.root}>
        {/* Backdrop clickeable */}
        <Animated.View style={[styles.backdrop, { opacity: backdrop }]}>
          <Pressable style={StyleSheet.absoluteFill} onPress={closeAnimated} />
        </Animated.View>

        {/* Sheet */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.sheetWrap}
        >
          <Animated.View
            style={[
              styles.sheet,
              {
                height: sheetHeight,
                transform: [{ translateY }],
              },
            ]}
          >
            {/* Handle (aquí sí se arrastra) */}
            <View
  {...panResponder.panHandlers}
  style={{
    paddingVertical: 18,        // 👈 más alto = más fácil agarrarlo
    alignItems: "center",
    backgroundColor: "transparent",
  }}
>
  <View
    style={{
      width: 60,
      height: 5,
      borderRadius: 999,
      backgroundColor: "#D1D5DB",
    }}
  />
</View>

            {/* Contenido */}
            <View style={{ paddingHorizontal: 18, paddingBottom: 18 }}>
              {children}
            </View>
          </Animated.View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  sheetWrap: {
    width: "100%",
  },
  sheet: {
    backgroundColor: "white",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: "hidden",
  },
  handleArea: {
    paddingVertical: 12,
    alignItems: "center",
  },
  handle: {
    width: 60,
    height: 5,
    borderRadius: 999,
    backgroundColor: "#D1D5DB",
  },
});
