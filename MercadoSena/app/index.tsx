import CustomButton from '@/components/buttons/CustomButton'
import CustomInput from '@/components/inputs/CustomInput'
import React from 'react'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <View>
      <Text className='font-Opensans-bold mt-16 mx-2.5 text-5xl text-primary-700 text-center'>Tu mercado sena</Text>

      <CustomButton variant='text-only' className='w-1/2' color='secondary'>Registrarme</CustomButton>

      <CustomButton onPress={() => {console.log('Quiero penevaginal')}} className='w-1/3' color='tertiary'>Iniciar Sesión</CustomButton>

      <CustomInput placeholder='Correo electronico' type="email" required='true' />

      <CustomInput type="password" placeholder='Contraseña'/>

    </View>
  )
}

export default App