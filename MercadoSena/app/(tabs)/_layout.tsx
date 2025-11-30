import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React from 'react';

const tabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      
      <Tabs.Screen
        name="Home/index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Chats/index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color }) => (
            <Feather name="message-circle" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Vender/index"
        options={{
          title: 'Vender',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box-multiple" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favoritos/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Configuracion/index"
        options={{
          title: 'Configuracion',
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default tabsLayout