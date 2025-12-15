import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  type?: "text" | "password" | "email" | "number" | "string";
  className?: string;
  placeholder?: string;
  value?: string;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  icon?: React.ReactNode;
}

const CustomInput = ({
  type,
  className,
  placeholder,
  value,
  placeholderTextColor,
  onChangeText,
  icon
}: Props) => {

  const isPassword = type === 'password';
  const isNumber = type === 'number';
  const isEmail = type === 'email';

  return (
    <View
      className={`flex-row items-center rounded-full bg-[#F5F5F7] px-4 mb-3 ${className ?? ''}`}
    >
      {icon && <View className="mr-2">{icon}</View>}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        keyboardType={
          isNumber ? 'numeric' : isEmail ? 'email-address' : 'default'
        }
        style={styles.input}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: 'Opensans-Bold',
    fontSize: 16,
    color: '#1a202a',
    paddingVertical: 10,
  },
});

export default CustomInput;
