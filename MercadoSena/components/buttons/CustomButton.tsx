import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  variant?: 'contained' | 'text-only';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
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
    },
    ref
  ) => {
    const textColor = {
      primary: 'text-primary-100',
      secondary: 'text-secondary-500',
      tertiary: 'text-tertiary-100',
    }[color];

    const btnColor = {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      tertiary: 'bg-tertiary-800',
    }[color];

    // 🔹 Estructura visual para texto + icono
    const Content = () => (
      <View
        className={`flex-row items-center justify-center ${
          icon && iconPosition === 'right' ? 'flex-row-reverse' : ''
        }`}
      >
        {icon && <View className="mr-2">{icon}</View>}
        <Text className={`text-center ${textColor}`}>{children}</Text>
      </View>
    );

    // 🔸 Mismo if que tú usabas
    if (variant === 'text-only') {
      return (
        <Pressable
          ref={ref}
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
        >
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
