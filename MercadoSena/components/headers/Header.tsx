import React from 'react';
import { Image, Text, View, ViewProps } from 'react-native';

interface HeaderProps extends ViewProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'sextary';
  className?: string;
  variant?: 'normal' | 'text-only' | 'icon-only';
  source?: {};
  txtColor?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'sextary';
  FontText?: string;
}

const Header = React.forwardRef<View, HeaderProps>(
  (
    {
      children,
      color = 'primary',
      className,
      variant = 'normal',
      source,
      txtColor = 'primary',
      FontText,
      ...rest
    },
    ref
  ) => {
    const textColor =
      {
        primary: 'text-primary-50',
        secondary: 'text-secondary-500',
        tertiary: 'text-tertiary-900',
        quaternary: 'text-quaternary-50',
        quinary: 'text-quinary-50',
        sextary: 'text-sextary-900',
      }[txtColor];

    const headerColor =
      {
        primary: 'bg-primary-400',
        secondary: 'bg-secondary-950',
        tertiary: 'bg-tertiary-50',
        quaternary: 'bg-quaternary-700',
        quinary: 'bg-quinary-600',
        sextary: 'bg-sextary-500',
      }[color];

    const Content = () => {

      if (variant === 'normal' && children) {
        return (
          <View className={`absolute items-center top-0 left-0 right-0 h-[280px] ${headerColor} rounded-b-[60px]`}>
            <Image
              className="w-44 h-44 mt-14"
              source={source}
              resizeMode="contain"
            />
            <Text className={`text-[100px] font-bold ${className} ${textColor} ${FontText} mb-3 text-center`}>{children}</Text>
          </View>
        );
      }

      if (variant === 'text-only' && children) {
        return (
          <View className={`absolute top-0 left-0 right-0 h-[280px] ${headerColor} rounded-b-[60px]`}>
            <Text className={`text-[100px] font-bold ${className} ${textColor} ${FontText} mb-3 text-center`}>{children}</Text>
          </View>
        );
      }

      if (variant === 'icon-only' && source) {
        return (
          <View className={className}>
            <Image
              source={source}
              resizeMode="contain"
            />
          </View>
        );
      }

      return null;
    };

    return (
      <View ref={ref} {...rest}>
        <Content />
      </View>
    );
  }
);

export default Header;
