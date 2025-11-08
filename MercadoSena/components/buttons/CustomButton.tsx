import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps{
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    variant?: 'contained' | 'text-only';
}

const CustomButton = React.forwardRef(({
    children,
    color = 'primary',
    onPress,
    onLongPress,
    className,
    variant = 'contained',
}:Props, ref: React.Ref<View>
) => {
    const textColor = {
        primary: 'text-primary-100',
        secondary: 'text-secondary-500',
        tertiary: 'text-tertiary-100',
    }[color]
    
    const btnColor = {
        primary: 'bg-primary-500',
        secondary: 'bg-secondary-500',
        tertiary: 'bg-tertiary-500',
    }[color]

    if (variant === 'text-only') {
        return (
         <Pressable className = {`p-3 ${className}`} onPress={onPress} onLongPress={onLongPress}>
          <Text className = {`text-center ${textColor}`}>{children}</Text>
         </Pressable>
        )
    }

  return (
   <Pressable className = {`p-3 rounded-md flex-auto ${btnColor} active:opacity-90 ${className}`} onPress={onPress} onLongPress={onLongPress}>
    <Text className = {`text-center ${textColor}`}>{children}</Text>
   </Pressable>
  )
})

export default CustomButton