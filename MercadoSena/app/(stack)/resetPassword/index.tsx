import logo from '@/assets/images/logo.png';
import CustomButton from '@/components/buttons/CustomButton';
import CustomInput from '@/components/inputs/CustomInput';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const resetPasswordScreen = () => {
  return (
    <LinearGradient
          colors={['#538392', '#B1CCD2']}
          start={{ x: 0, y: 0 }}          
          end={{ x: 1, y: 1 }}             
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
    
          <View style={{ position: 'relative', top: 80, left: 0, alignItems: 'flex-end' }}>
            <Text className="font-Opensans-bold text-4xl text-white mb-2">
              Tu Mercado SENA
            </Text>
          </View>

          <View className="w-3/4 mt-28">

        <CustomInput 
        placeholder="Correo Institucional"
        placeholderTextColor='#CDCDCD' 
        type="email" 
        />

        {/* Botón para iniciar sesión */}

        <View className="items-center mt-4">
          <CustomButton
            onPress={() => console.log('Iniciar sesión')}
            className="w-3/4"
            color="quinary"
            FontText='text-xl'
          >
            Enviar Correo
          </CustomButton>
        </View>

        {/* Navegador a la pantalla de registro */}

        <View className="items-center mt-20">

          <Text className='text-white text-2xl text-justify leading-6 px-4 mb-1 mt-10'>
          ¿No tienes una cuenta?
          </Text>

          <CustomButton 
          variant="text-only" 
          className="w-1/2" 
          color="quaternary"
          FontText='text-xl'
          onPress={() => router.push('/register')}
          >
            Registrarme
          </CustomButton>

        </View>

        <View className="items-center top-16">
          <CustomButton
            variant="contained"
            color="quinary"
            className="w-1/2 right-1"
            FontText='text-xl'
            onPress={() => router.push('/')}
            icon={<Ionicons name="arrow-back" size={20} color="#fff" />}
            iconPosition='left'
          >
            Volver
          </CustomButton>
        </View>

      </View>
    </LinearGradient>
  )
}

export default resetPasswordScreen