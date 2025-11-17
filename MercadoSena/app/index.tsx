import logo from '@/assets/images/logo.png'
import CustomButton from '@/components/buttons/CustomButton'
import CustomInput from '@/components/inputs/CustomInput'
import { loginService } from '@/services/authService'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'

const App = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginService(email, password);

      const token = response.data.token;

      console.log("Login exitoso, token:", token);
      console.log("Usuario:", response.data.user);

      router.push('/(stack)/Home');
    } catch (error: any) {
      console.log("Error de login:", error.response?.data || error.message);
    }
  }


  return (

    <LinearGradient
      colors={['#538392', '#B1CCD2']}
      start={{ x: 0, y: 0 }}          
      end={{ x: 1, y: 1 }}             
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}
    >

      <Image source={logo} 
             style={{ 
              width: 150, 
              height: 150, 
              position: 'absolute',
              top: 120,
              left: 55,
              }} />

      <View style={{ position: 'relative', top: -20, right: -50, alignItems: 'flex-end' }}>
        <Text className="font-Opensans-bold text-2xl text-white mb-2">
          Tu mercado SENA
        </Text>

        {/* // Navegador a la pantalla de información. */}

        <CustomButton
          variant="text-only"
          color="primary"
          onPress={() => router.push('/info')}
        >
        <Text className='text-quinary-50 font-Opensans-bold underline'> 
          ¿QUÉ ES?
        </Text>
        </CustomButton>
      </View>

        {/* Inputs de inicio de sesión */}

      <View className="w-3/4 mt-5">

        <CustomInput 
        placeholder="Correo Institucional"
        placeholderTextColor='#CDCDCD' 
        type="email"
        value={email}
        onChangeText={setEmail} 
        />

        <CustomInput 
        placeholder="Contraseña"
        placeholderTextColor='#CDCDCD' 
        type="password"
        value={password}
        onChangeText={setPassword} 
        />

        
        {/* Botón para iniciar sesión */}

        <View className="items-center mt-4">
          <CustomButton
            onPress={handleLogin}
            className="w-1/2"
            color="quinary"
          >
            Iniciar Sesión
          </CustomButton>
        </View>

        {/* Navegador a la pantalla de restablecimiento de contraseña */}

         <View className="items-center mt-10">

          <CustomButton 
          variant="text-only" 
          color="primary"
          onPress={() => router.push('/resetPassword')}
          >
          <Text className='text-quinary-50 font-Opensans-bold underline'>
            Olvidé mi contraseña
          </Text>
          </CustomButton>

        </View>

        {/* Navegador a la pantalla de registro */}

        <View className="items-center mt-20">

          <Text className='text-black text-base text-justify leading-6 px-4 mb-1 mt-10 font-bold'>
          ¿No tienes una cuenta?
          </Text>

          <CustomButton 
          variant="text-only" 
          className="w-1/2" 
          color="primary"
          onPress={() => router.push('/register')}
          >
          <Text className='text-quinary-50 font-Opensans-bold underline'>
            Registrarme
          </Text>
          </CustomButton>

        </View>

      </View>
    </LinearGradient>
  )
}

export default App
