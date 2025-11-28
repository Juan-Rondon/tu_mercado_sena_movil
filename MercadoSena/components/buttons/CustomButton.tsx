import React from 'react';
import { Image, Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
  className?: string;
  variant?: 'contained' | 'text-only' | 'card';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'up' | 'down' | 'center';
  source?: {};
  price?: string;
  FontText?: string;
}

const CustomButton = React.forwardRef<View, Props>(
  (
    {
      children,
      color = 'primary',
      onPress,
      onLongPress,
      className,
      variant = 'contained',
      icon,
      iconPosition = 'left',
      source,
      price,
      FontText,
    },
    ref
  ) => {
    const textColor = {
      primary: 'text-primary-90',
      secondary: 'text-secondary-500',
      tertiary: 'text-tertiary-100',
      quaternary: 'text-quaternary-50',
      quinary: 'text-quinary-50',
    }[color];

    const btnColor = {
      primary: 'bg-primary-400',
      secondary: 'bg-secondary-950',
      tertiary: 'bg-tertiary-500',
      quaternary: 'bg-quaternary-700',
      quinary: 'bg-quinary-600',
    }[color];

    // 🔹 Estructura visual para texto + icono
    const Content = () => (
      variant === 'card' && price ?
      <>
      <View
        className={`flex-row items-center justify-center`}
      >
        <Text className={`text-center w-full ${textColor} ${FontText}`}>{children}</Text>
      </View>

      <View
        className={`flex-row items-center justify-center`}
      >
        <Text className={`text-center text-sm ${textColor} ${FontText}`}>{price}</Text>
      </View>
      </>

      :

      <View
        className={`flex-row items-center justify-center ${
          icon && iconPosition === 'right' ? 'flex-row-reverse' : ''
        }`}
      >
        {icon && <View className="mr-2">{icon}</View>}
        <Text className={`text-center ${textColor} ${ variant === 'text-only' ? 'underline' : ''} ${FontText}`}>{children}</Text>
      </View>
    );

    // 🔸 Mismo if que tú usabas
    if (variant === 'text-only') {
      return (
        <Pressable
          ref={ref}
          className={`p-3 ${className} ${textColor} active:opacity-70`}
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
        className={`p-3 rounded-md w-full ${btnColor} active:opacity-90 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Image
        style={{ width: '100%', height: 150, borderRadius: 8, marginBottom: 8 }} 
        source={source}
        />

        <Content />

      </Pressable>
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
