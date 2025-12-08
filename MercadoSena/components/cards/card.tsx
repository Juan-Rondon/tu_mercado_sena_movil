import React, { useState, forwardRef } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';

interface CardProps {
  imageSource: any;
  title: string;
  subtitle?: string;
  onCardPress: () => void;
  onFavouritePress?: (fav: boolean) => void;
  initialFavourite?: boolean;

  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'outlined' | 'elevated';
}

const Card = forwardRef<View, CardProps>(
  (
    {
      imageSource,
      title,
      subtitle,
      onCardPress,
      onFavouritePress,
      initialFavourite = false,
      className = '',
      color = 'primary',
      variant = 'contained',
    },
    ref
  ) => {
    const [favourite, setFavourite] = useState(initialFavourite);

    const handleFavourite = () => {
      const newFav = !favourite;
      setFavourite(newFav);
      if (onFavouritePress) onFavouritePress(newFav);
    };

    const cardColor = {
      primary: 'bg-primary-100',
      secondary: 'bg-secondary-100',
      tertiary: 'bg-tertiary-100',
    }[color];

    const variantStyle = {
      contained: `${cardColor} shadow-md`,
      outlined: 'border border-gray-300 bg-white',
      elevated: 'bg-white shadow-lg',
    }[variant];

    return (
      <Pressable
        ref={ref}
        className={`rounded-xl overflow-hidden ${variantStyle} ${className}`}
        onPress={onCardPress}
      >
        <Image
          source={imageSource}
          className="w-full h-32"
          resizeMode="cover"
        />

        <View className="p-3">
          <Text className="font-bold text-gray-900">{title}</Text>
          {subtitle && (
            <Text className="text-gray-600 mt-1">{subtitle}</Text>
          )}
        </View>

        <TouchableOpacity
          className="absolute top-3 right-3"
          onPress={handleFavourite}
        >
          <Text className="text-xl">{favourite ? '❤' : '🤍'}</Text>
        </TouchableOpacity>
      </Pressable>
    );
  });

export default Card;