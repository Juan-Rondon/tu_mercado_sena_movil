import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface Props {
    type: "text" | "password" | "email" | "number";
    className?: string;
    placeholder?: string;
    value?: string;
    placeholderTextColor?: string;
    onChangeText?: (text: string) => void;

}

const CustomInput = ({type, className, placeholder, value, placeholderTextColor, onChangeText}: Props) => {

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
    borderColor: 'white',
    borderRadius: 6,
    padding: 8,
  },
});

export default CustomInput