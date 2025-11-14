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
        <Text className="font-Opensans-bold text-2xl text-white mt-28">
          Tu mercado SENA
        </Text>

      </View>

        {/* Inputs de inicio de sesión */}

      <View className="w-3/4 mt-20">

        <CustomInput 
        placeholder="Correo Institucional" 
        type="email" 
        required="true" />

        <CustomInput 
        placeholder="Nombre" 
        type="text" />
        
        <CustomInput 
        placeholder="Contraseña" 
        type="password" />
        
        <CustomInput 
        placeholder="Confirmar Contraseña" 
        type="password" />

        <View className="items-center mt-1">

        </View>

        {/* Botón para iniciar sesión */}

        <View className="items-center mt-4">
          <CustomButton
            onPress={() => console.log('Iniciar sesión')}
            className="w-1/2"
            color="tertiary"
          >
            Registrarme
          </CustomButton>
        </View>

        {/* Navegador a la pantalla de registro */}

        <View className="items-center mt-20">
          
          <Text 
          className='text-black text-base text-justify leading-6 px-4 mb-2'
          >
            Ya tengo una cuenta
          </Text>


          <CustomButton 
          variant="text-only" 
          className="w-1/2 underline" 
          color="primary"
          onPress={() => router.push('/')}>
            Iniciar Sesión
          </CustomButton>
        </View>
      </View>
    </LinearGradient>
  )
}

export default App
