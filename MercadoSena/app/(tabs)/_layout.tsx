import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const tabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      
      <Tabs.Screen
        name="Home/index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color = '#538392' }) => (
            <Ionicons name="home-outline" size={28} color={'#000000'} />
          ),
        }}
      />

      <Tabs.Screen
        name="Chats/index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color }) => (
            <Feather name="message-circle" size={28} color={'#000000'} />
          ),
        }}
      />

      <Tabs.Screen
        name="Vender/index"
        options={{
          title: 'Vender',
          tabBarButton: ( props ) =>
            <FloatButtom 
            {...props}
            />
        }}
      />

      <Tabs.Screen
        name="Favoritos/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={26} color={'#000000'} />
          ),
        }}
      />

      <Tabs.Screen
        name="Configuracion/index"
        options={{
          title: 'Configuracion',
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={26} color={'#000000'} />
          ),
        }}
      />
    </Tabs>
  )
}

function FloatButtom({ onPress }) {
  return(
    <TouchableOpacity
    onPress={onPress}
    style={{ 
      width: 70, 
      height: 70, 
      borderRadius: 40, 
      backgroundColor: '#2f9d48',
      justifyContent: 'center', 
      alignItems: 'center',
      top: -25,
      right: -5, 
      shadowColor: '#000', 
      shadowOpacity: 0.3, 
      shadowRadius: 8, 
      elevation: 6,
      marginBottom: 20,
    }}
    >
      <Image
      source={require('../../assets/images/logo.png')}
      style={{ width: 80, height: 130, top: -3 }} 
      />
    </TouchableOpacity>
  )
}

export default tabsLayout

