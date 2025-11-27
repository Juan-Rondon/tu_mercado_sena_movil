import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const loginScreen = () => {
  return (
    <View>
      <Text>loginScreen</Text>

      <Pressable 
      onPress={() => router.push('/register')}
        >
        <Text>Registro</Text>
      </Pressable>

      <Pressable 
      onPress={() => router.push('/resetPassword')}
        >
        <Text>Olvide Contraseña</Text>
      </Pressable>

    </View>
  )
}

export default loginScreen