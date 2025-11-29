import logo from '@/assets/images/logo.png';
import CustomButton from '@/components/buttons/CustomButton';
import CustomInput from '@/components/inputs/CustomInput';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const registerScreen = () => {
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
                  top: 60,
                  left: 135,
                  }} />
    
          <View style={{ position: 'relative', top: 50, left: 0, alignItems: 'flex-end' }}>
            <Text className="font-Opensans-bold text-4xl text-white mb-2">
              Tu Mercado SENA
            </Text>
          </View>

          <View className="w-3/4 top-20">
        <CustomInput
          placeholder="Correo Institucional"
          placeholderTextColor="#CDCDCD"
          type="email"
        />

        <CustomInput
          placeholder="Nombre"
          placeholderTextColor="#CDCDCD"
          type="text"
        />

        <CustomInput
          placeholder="Contraseña"
          placeholderTextColor="#CDCDCD"
          type="password"
        />

        <CustomInput
          placeholder="Confirmar Contraseña"
          placeholderTextColor="#CDCDCD"
          type="password"
        />

        <View className="items-center mt-4">

          <CustomButton 
          onPress={() => router.push('/(stack)/login')} 
          className="w-3/4"
          FontText='text-xl' 
          color="quinary"
          >
            Registrar Cuenta
          </CustomButton>

      </View>

        <View className="items-center mt-20">
          
          <Text className='text-white text-2xl text-justify leading-6 px-4 mb-1 mt-10'>
            ¿Ya tienes una cuenta?
          </Text>

          <CustomButton 
          variant="text-only" 
          className="w-1/2" 
          color="quaternary"
          FontText='text-xl'
          onPress={() => router.push('/')}
          >
            Iniciar Sesión  
          </CustomButton>

        </View>

      </View>
    </LinearGradient>
  )
}

export default registerScreen