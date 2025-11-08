import logo from '@/assets/images/logo.png'
import CustomButton from '@/components/buttons/CustomButton'
import CustomInput from '@/components/inputs/CustomInput'
import React from 'react'
import { Image, Text, View } from 'react-native'

const App = () => {
  return (
    
    <View className="flex-1 justify-center items-center bg-white">

      <Image source={logo} style={{ width: 100, height: 100 }} />

      <Text className="font-Opensans-bold mb-10 text-5xl text-primary-700 text-center">
        Tu mercado sena
      </Text>

      <View className="w-3/4">

        <CustomInput placeholder="Correo electrónico" type="email" required="true" />

        <CustomInput placeholder="Contraseña" type="password" />

        <View className="items-center">
          <CustomButton variant="text-only" className="w-1/2" color="secondary">
            Olvidé mi contraseña
          </CustomButton>
        </View>

        <View className="items-center mt-10">
          <CustomButton
            onPress={() => console.log('Iniciar sesión')}
            className="w-1/2"
            color="tertiary"
          >
            Iniciar Sesión
          </CustomButton>
        </View>

        <View className="items-center mt-4">
          <CustomButton variant="text-only" className="w-1/2" color="secondary">
            Registrarme
          </CustomButton>
        </View>
      </View>
    </View>
  )
}

export default App
