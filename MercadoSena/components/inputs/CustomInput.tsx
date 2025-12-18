import React, { useMemo } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface Props extends Omit<TextInputProps, "onChangeText" | "value"> {
  type?: "text" | "password" | "email" | "number" | "string";
  className?: string;
  placeholder?: string;
  value?: string;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  icon?: React.ReactNode;
}

const CustomInput = ({
  type = "text",
  className,
  placeholder,
  value,
  placeholderTextColor = "#CDCDCD",
  onChangeText,
  icon,
  ...rest
}: Props) => {
  const isPassword = type === "password";
  const isNumber = type === "number";
  const isEmail = type === "email";

  const keyboardType = useMemo(() => {
    if (isNumber) return "numeric";
    if (isEmail) return "email-address";
    return "default";
  }, [isNumber, isEmail]);

  const autoCapitalize = isEmail ? "none" : rest.autoCapitalize ?? "sentences";

  return (
    <View className={`flex-row items-center rounded-full bg-[#F5F5F7] px-4 ${className ?? ""}`}>
      {icon && <View className="mr-2">{icon}</View>}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={isPassword}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={isEmail ? false : rest.autoCorrect}
        textContentType={isPassword ? "password" : isEmail ? "emailAddress" : rest.textContentType}
        autoComplete={isPassword ? "password" : isEmail ? "email" : rest.autoComplete}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1a202a",
    paddingVertical: 12,
  },
});

export default CustomInput;
