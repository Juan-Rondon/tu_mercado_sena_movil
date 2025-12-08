import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  avatar?: any;
  onAvatarPress?: () => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChangeText, avatar, onAvatarPress, placeholder }: Props) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={{ marginRight: 8 }} />

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder || "Buscar productos..."}
          placeholderTextColor="#666"
          style={styles.input}
        />
      </View>

      <TouchableOpacity onPress={onAvatarPress}>
        <Image source={avatar} style={styles.avatar} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 25,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});

export default SearchBar;
