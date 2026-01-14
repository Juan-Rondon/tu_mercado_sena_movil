import CustomButton from '@/components/buttons/CustomButton';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  View
} from 'react-native';

const ChatID = () => {
  const router = useRouter();
  const [mensaje, setMensaje] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>

    {/* encabezado de chat */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#E5E5E5',
          backgroundColor: '#FFF',
        }}
      >
        {/* Volver */}
        <Pressable onPress={() => router.push('/(tabs)/Chats')}>
          <AntDesign name="arrow-left" size={24} color="#4C8392" />
        </Pressable>

        {/* Avatar */}
        <View
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            borderWidth: 2,
            borderColor: '#4C8392',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
          }}
        >
          <AntDesign name="user" size={22} color="#4C8392" />
        </View>

        {/* Nombre */}
        <Text
          style={{
            marginLeft: 10,
            fontSize: 16,
            fontWeight: '600',
            color: '#000',
          }}
        >
          Yhonaikerson Mejia
        </Text>
      </View>
      
      {/* MENSAJES */}
      <ScrollView
        contentContainerStyle={{
          padding: 12,
          paddingBottom: 80, // espacio para el input
        }}
      >
        <CustomButton variant="chat-bubble" isOwner={false}>
          Hola, como esta, me interesa en prduto
        </CustomButton>

        <CustomButton variant="chat-bubble" isOwner>
          Sisas bro
        </CustomButton>
      </ScrollView>

        <CustomButton
          variant="chat-input"
          onSendMessage={(msg) => {
            console.log('Mensaje:', msg);
          }}
        />
    </View>
  );
};

export default ChatID;
