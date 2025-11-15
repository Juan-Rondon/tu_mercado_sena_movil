import CustomButton from '@/components/buttons/CustomButton'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const Info = () => {
  const router = useRouter()

  return (
    <LinearGradient
      colors={['#538392', '#B1CCD2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, padding: 20 }}
    >

        <View className="items-center top-11">
          <CustomButton
            variant="text-only"
            color="primary"
            className="w-1/2 right-40"
            onPress={() => router.push('/')}
            icon={<Ionicons name="arrow-back" size={20} color="#00000" />}
            iconPosition='left'
          >
            Volver
          </CustomButton>
        </View>
    </LinearGradient>
  )
}

export default Info
