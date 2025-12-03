import logo from '@/assets/images/logo.png'
import CustomButton from '@/components/buttons/CustomButton'
import CustomInput from '@/components/inputs/CustomInput'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

const loginScreen = () => {
  return (

    <LinearGradient
      colors={['#538392', '#B1CCD2']}
      start={{ x: 0, y: 0 }}          
      end={{ x: 1.5, y: 1.5 }}             
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}
    >

      <Image source={logo} 
             style={{ 
              width: 210, 
              height: 210, 
              position: 'absolute',
              top: 100,
              left: 135,
              }} />

      <View style={{ position: 'relative', top: 150, left: 0, alignItems: 'flex-end' }}>
        <Text className="font-Opensans-bold text-4xl text-white mb-2">
          Tu Mercado SENA
        </Text>
      </View>

        {/* // Navegador a la pantalla de información. */}
        
        {/* <View style={{ position: 'relative', top: 160, right: 0, alignItems: 'flex-end' }}>
        <CustomButton
          variant="text-only"
          color="primary"
          onPress={() => router.push('/')}
        >
        <Text className='text-quinary-50 text-2xl font-Opensans-bold'> 
          ¿QUÉ ES?
        </Text>
        </CustomButton>
        </View> */}

        {/* Inputs de inicio de sesión */}

      <View className="w-3/4 mt-52">
        
        <CustomInput 
        placeholder="Correo Institucional"
        placeholderTextColor='#CDCDCD' 
        type="email"
        />

        <CustomInput 
        placeholder="Contraseña"
        placeholderTextColor='#CDCDCD' 
        type="password"
        />

        {/* Navegador a la pantalla de restablecimiento de contraseña */}

         <View className="items-center">

          <CustomButton 
          variant="text-only" 
          color="quaternary"
          FontText='text-xl'
          underline={true}
          onPress={() => router.push('/resetPassword')}
          >
            Olvidé mi contraseña
          </CustomButton>

        </View>

        
        {/* Botón para iniciar sesión */}

        <View className="items-center mt-4">
          
          <CustomButton
            onPress={() => router.push('/(tabs)/Home')}
            className="w-3/4"
            FontText='text-xl'
            color="quinary"
          >
            Iniciar Sesión
          </CustomButton>
        </View>

        {/* Navegador a la pantalla de registro */}

        <View className="items-center mt-20">

          <Text className='text-white text-2xl text-justify leading-6 px-4 mb-1 mt-10'>
          ¿No tienes una cuenta?
          </Text>

          <CustomButton 
          variant="text-only" 
          className="w-1/2 underline" 
          color="quaternary"
          FontText='text-xl'
          underline={true}
          onPress={() => router.push('/register')}
          >
            Registrarme
          </CustomButton>

        </View>

      </View>
    </LinearGradient>
  )
}

export default loginScreen