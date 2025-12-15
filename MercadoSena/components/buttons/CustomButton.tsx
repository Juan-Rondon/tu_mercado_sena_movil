import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'sextary';
  className?: string;
  variant?: 'contained' | 'text-only' | 'card' | 'icon-only' | 'desplegar';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'up' | 'down' | 'center';
  source?: {};
  price?: string;
  FontText?: string;
  defaultImage?: any;
  onCartPress?: () => void;
  actionText?: string;
  underline?: boolean;
  showFavorite?: boolean;
  isOwner?: boolean;
  options?: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
}

const CustomButton = React.forwardRef<View, Props>(
  (
    {
      children,
      color = 'gray',
      onCartPress,
      onPress,
      onLongPress,
      className,
      variant = 'contained',
      icon,
      iconPosition = 'left',
      source,
      price,
      FontText,
      defaultImage,
      actionText,
      underline,
      showFavorite,
      isOwner = false,
      // jeancito toco esto
      options = [],
      placeholder = "Selecciona...",
      onSelect,
    },
    ref
  ) => {

    const [isFavorite, setIsFavorite] = React.useState(false);
    // jeancito tambien toco aqui
    const [showOptions, setShowOptions] = useState(false);
    const [selected, setSelected] = useState("");

    const textColor = {
      primary: 'text-primary-90',
      secondary: 'text-secondary-500',
      tertiary: 'text-tertiary-900',
      quaternary: 'text-quaternary-50',
      quinary: 'text-quinary-50',
      sextary: 'text-sextary-900',
    }[color];

    const btnColor = {
      primary: 'bg-primary-400',
      secondary: 'bg-secondary-950',
      tertiary: 'bg-tertiary-50',
      quaternary: 'bg-quaternary-700',
      quinary: 'bg-quinary-600',
      sextary: 'bg-sextary-400',
      gray: 'bg-gray-100'
    }[color];

    const textOnlyColor = {
      primary: 'text-primary-90',
      secondary: 'text-secondary-500',
      tertiary: 'text-tertiary-900',
      quaternary: 'text-quaternary-600',
      quinary: 'text-quinary-600',
    }[color];

  // Estructura visual para texto + icono
    const Content = () => {
  // para el texto "normal" (no card)
    const effectiveTextColor = variant === 'text-only' ? textOnlyColor : textColor;

  if (variant === 'card' && price) {
    return (
      <>
        <View className="flex-row items-center justify-center">
          <Text className={`text-center w-full ${textColor} ${FontText}`}>
            {children}
          </Text>
        </View>

        <View className="flex-row items-center justify-center">
          <Text className={`text-center text-sm ${textColor} ${FontText}`}>
            {price}
          </Text>
        </View>
      </>
    );
  }

  return (
    <View
      className={`flex-row items-center justify-center ${
        icon && iconPosition === 'right' ? 'flex-row-reverse' : ''
      }`}
    >
      {icon && <View className="mr-2">{icon}</View>}
      <Text
        className={`text-center ${effectiveTextColor} ${
          underline ? 'underline' : ''
        } ${FontText}`}
      >
        {children}
      </Text>
    </View>
  );
};

    // Mismo if que tú usabas
    if (variant === 'text-only') {
      return (
        <Pressable
          ref={ref}
          className={`p-3 ${className} ${textOnlyColor} active:opacity-70`}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          <Content />
        </Pressable>
      );
    } else if (variant === 'card') {
      return (

        <Pressable
        ref={ref}
        className={`p-3 rounded-md w-full ${btnColor} active:opacity-90 ${className} border border-black`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Image
        style={{ width: '100%', height: 150, borderRadius: 8, marginBottom: 8 }} 
        source={source || defaultImage}
        />

        <Content />

          <View className={`flex-row ${isOwner === true ? 'justify-center' : 'justify-between' } items-center mt-3 px-2`}>

          <Pressable 
            onPress={onCartPress}
            className={`${isOwner === true ? 'w-9/12 h-10' : 'py-3 px-6' } justify-center items-center rounded-full border border-gray-800`}
            >
            <Text className="text-black font-medium">
              {actionText ?? "Detalle"}
            </Text>
          </Pressable>

          {!isOwner && (
            <Pressable 
            onPress={() => setIsFavorite(!isFavorite)}
            className="p-2 rounded-full border border-gray-800"
            >
              {isFavorite ? (
                <AntDesign name="heart" size={22} color="red" />
              ) : (
                <AntDesign name="heart" size={22} color="gray" />
              )}
            </Pressable>
          )}

        </View>

      </Pressable>
      );
    } else if (variant === 'icon-only') {
      return (
        <Pressable
          ref={ref}
          className={`p-3 ${className} ${textColor} active:opacity-70 rounded-full ${btnColor}`}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          <View
          className={`flex items-center justify-center`}
        >
        {icon}
      </View>
        </Pressable>
      );
    } else if (variant === 'desplegar'){
      // jeancito tambien t toco esto aqui
      return (
        <View className="w-full">
          <Pressable
            onPress={() =>setShowOptions(!showOptions)}
            className={`p-3 rounded-lg bg-white border border-black-500 ${className}`}
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-black text-lg font-semibold">
                {selected || placeholder}
              </Text>
              <AntDesign name={showOptions?"up":"down"}size={18}color="black"/>

            </View>
          </Pressable>


          {showOptions && (

            <View className="bg-gray mt-1 rounded-lg border border-[#538392] p-2">

              {options.map((item, index) => (


                <Pressable
                  key={index}

                  onPress={() => {
                    setSelected(item);
                    setShowOptions(false);
                    onSelect?.(item);

                  }}

                  className="p-2 rounded-lg active:bg-[#c7dfe6]"
                >
                  <Text className="text-black text-base">{item}</Text>

                </Pressable>

              ))}
            </View>
          )}
        </View>
      );
    }

    return (
      <Pressable
        ref={ref}
        className={`p-3 rounded-md flex-auto ${btnColor} active:opacity-90 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Content />
      </Pressable>
    );
  }
);

export default CustomButton;
