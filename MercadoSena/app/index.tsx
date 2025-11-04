import CustomButton from '@/components/buttons/CustomButton'
import React from 'react'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <View>
      <Text className='font-Opensans-bold mt-16 mx-2.5 text-5xl text-primary-500'>App</Text>
      <CustomButton variant='text-only' className='w-1/2' color='secondary'>Click Me</CustomButton>
      <CustomButton onPress={() => {console.log('Quiero penevaginal')}} className='w-1/3' color='tertiary'>Click Me</CustomButton>
      <CustomButton className='w-1/4'>Click Me</CustomButton>
    </View>
  )
}

export default App