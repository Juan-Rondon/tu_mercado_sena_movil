import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface Props {
    type?: "text" | "password" | "email" | "number" | "string";
    className?: string;
    placeholder?: string;
    value?: string;
    placeholderTextColor?: string;
    onChangeText?: (text: string) => void;
    icon?: React.ReactNode;
}

const CustomInput = ({type, className, placeholder, value, placeholderTextColor, onChangeText, icon}: Props) => {

  const isPassword = type === 'password';
  const isNumber = type === 'number';
 
  return (
    <TextInput
     value={value}
     onChangeText={onChangeText}
     placeholder={placeholder}
     secureTextEntry={isPassword}
     keyboardType={isNumber ? 'numeric' : 'default'}
     style={styles.input}
     className={className}
     placeholderTextColor={placeholderTextColor}
     {...(icon ? { left: icon } : {})}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Opensans-Bold',
    marginBottom: 12,
    marginHorizontal: 15,
    fontSize: 18,
    color: '#1a202a',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 8,
    backgroundColor: 'white',
  },
});

export default CustomInput