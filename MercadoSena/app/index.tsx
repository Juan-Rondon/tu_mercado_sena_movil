import logo from '@/assets/images/logo.png'
import CustomButton from '@/components/buttons/CustomButton'
import CustomInput from '@/components/inputs/CustomInput'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

const App = () => {
  const router = useRouter();


  return (

    <LinearGradient
      colors={['#000328', '#00458e']}
      start={{ x: 0, y: 0 }}          
      end={{ x: 1, y: 1 }}             
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}
    >

      <Image source={logo} 
             style={{ 
              width: 200, 
              height: 200, 
              position: 'absolute',
              top: 20,
              left:-5,
              }} />

      <View style={{ position: 'relative', top: -20, right: -50, alignItems: 'flex-end' }}>
        <Text className="font-Opensans-bold text-2xl text-white mb-2">
          Tu mercado SENA
        </Text>

        <CustomButton
          variant="text-only"
          color="primary"
          onPress={() => router.push('/info')}
        >
          ¿QUÉ ES?
        </CustomButton>
      </View>


      <View className="w-3/4 mt-5">
        <CustomInput placeholder="Correo electrónico" type="email" required="true" />
        <CustomInput placeholder="Contraseña" type="password" />

        <View className="items-center mt-1">
          <CustomButton variant="text-only" color="primary">
            Olvidé mi contraseña
          </CustomButton>
        </View>

        <View className="items-center mt-4">
          <CustomButton
            onPress={() => console.log('Iniciar sesión')}
            className="w-1/2"
            color="tertiary"
          >
            Iniciar Sesión
          </CustomButton>
        </View>

        <View className="items-center mt-20">
          <CustomButton variant="text-only" className="w-1/2" color="primary">
            Registrarme
          </CustomButton>
        </View>
      </View>
    </LinearGradient>
  )
}

export default App
