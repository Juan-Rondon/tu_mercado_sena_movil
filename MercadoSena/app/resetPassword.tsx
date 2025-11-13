import logo from '@/assets/images/logo.png'
import CustomButton from '@/components/buttons/CustomButton'
import CustomInput from '@/components/inputs/CustomInput'
import { Ionicons } from '@expo/vector-icons'
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

      <View style={{ position: 'relative', top: -70, right: -50, alignItems: 'flex-end' }}>
        <Text className="font-Opensans-bold text-2xl text-white mt-16">
          Tu mercado SENA
        </Text>
      </View>

      <Text className="font-Opensans-medium text-white text-lg mb-6 mt-1">
        Recupera tu contraseña
        </Text>

        {/* Inputs de inicio de sesión */}

      <View className="w-3/4 mt-5">

        <CustomInput 
        placeholder="Correo electrónico" 
        type="email" 
        required="true" />

        {/* Botón para restablecer la contraseña */}

        <View className="items-center mt-1">

        </View>

        {/* Botón para iniciar sesión */}

        <View className="items-center mt-4">
          <CustomButton
            onPress={() => console.log('Enviar correo')}
            className="w-1/2"
            color="tertiary"
          >
            Enviar Correo
          </CustomButton>
        </View>

        {/* Navegador a la pantalla de registro */}

        <View className="items-center">
          <CustomButton
            variant="text-only"
            color="primary"
            className="w-1/2 mb-100 mt-20"
            onPress={() => router.push('/')}
            icon={<Ionicons name="arrow-back" size={20} color="#3B82F6" />}
            iconPosition='left'
          >
            Volver
          </CustomButton>
        </View>

      </View>
    </LinearGradient>
  )
}

export default App
