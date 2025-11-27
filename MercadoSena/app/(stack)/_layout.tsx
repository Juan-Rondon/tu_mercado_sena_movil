import { Stack } from 'expo-router';
import React from 'react';


const stackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="login/index" options={{title: 'Iniciar Sesión'}} />
      <Stack.Screen name="register/index" options={{title: 'Registrarse'}} />
      <Stack.Screen name="resetPassword/index" options={{title: 'Restablecer Contraseña'}} />
    </Stack>
  )
}

export default stackLayout