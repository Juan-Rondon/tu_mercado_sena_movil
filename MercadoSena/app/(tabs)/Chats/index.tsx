import CustomButton from '@/components/buttons/CustomButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const chatScreen = () => {
  const router = useRouter()

  return (
    <View>
      <CustomButton
        variant="chat-card"
        onPress={() => router.push('/chatUser/chatID')}
        actionText="Ese balón sí está bueno"
      >
        Styward Sneaydher
      </CustomButton>

      <CustomButton
        variant="chat-card"
        onPress={() => router.push('/chatUser/chatID')}
        actionText="a como el pam de 1k"
      >
        Yhonaikerson Mejia
      </CustomButton>

      <CustomButton
        variant="chat-card"
        onPress={() => router.push('/chatUser/chatID')}
        actionText="el perro vien por separado?"
      >
        Gabriel buena Vista Mira Flores (el ciego)
      </CustomButton>

    </View>
  )
}

export default chatScreen