import CustomButton from '@/components/buttons/CustomButton';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Pressable,
    ScrollView,
    TextInput,
    View,
} from 'react-native';

const ChatID = () => {
  const router = useRouter();
  const [mensaje, setMensaje] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      
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

      {/* CAMPO DE ENTRADA */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderTopWidth: 1,
          borderColor: '#DDD',
          backgroundColor: '#FFF',
        }}
      >
        <TextInput
          placeholder="Escribe un mensaje..."
          value={mensaje}
          onChangeText={setMensaje}
          style={{
            flex: 1,
            backgroundColor: '#F0F0F0',
            borderRadius: 20,
            paddingHorizontal: 14,
            paddingVertical: 8,
            fontSize: 15,
          }}
        />

        <Pressable
          onPress={() => {
            if (!mensaje.trim()) return;
            console.log('Mensaje enviado:', mensaje);
            setMensaje('');
          }}
          style={{
            marginLeft: 8,
            backgroundColor: '#4C8392',
            padding: 10,
            borderRadius: 20,
          }}
        >
          <AntDesign name="arrow-up" size={18} color="#FFF" />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatID;
