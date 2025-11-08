import CustomButton from '@/components/buttons/CustomButton'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Info = () => {
  const router = useRouter()

  return (
    <LinearGradient
      colors={['#000328', '#00458e']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, padding: 20 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className="items-center mb-10">
          <Text className="font-Opensans-bold text-3xl text-white mb-4 text-center">
            ¿Qué es <Text className="text-tertiary-300">Tu Mercado SENA</Text>?
          </Text>

          <Text className="text-white text-base text-justify leading-6 px-4">
            Tu Mercado SENA es una aplicación creada para conectar a aprendices,
            instructores y emprendedores del SENA en un espacio de comercio digital.
            Aquí puedes ofrecer, buscar y adquirir productos o servicios elaborados
            dentro de la comunidad, fomentando la economía colaborativa y el aprendizaje
            práctico en entornos reales.
          </Text>
        </View>

        <View className="items-center">
          <CustomButton
            variant="text-only"
            color="secondary"
            className="w-1/2"
            onPress={() => router.push('/')}
          >
            Volver
          </CustomButton>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Info
