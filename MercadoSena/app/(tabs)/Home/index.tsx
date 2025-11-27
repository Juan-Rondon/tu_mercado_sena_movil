import CustomButton from '@/components/buttons/CustomButton'
import React from 'react'
import { ScrollView, View } from 'react-native'

const homeScreen = () => {
  return (
    <ScrollView>

    <View className="flex-row flex-wrap p-4">
      <View className="w-1/2 p-2">
        <CustomButton 
          variant="card"
          className="h-full" 
          source={require("../../../assets/images/icon.png")}
          price="$9.99"
          >
          Comprar ahora
        </CustomButton>
      </View>

      <View className="w-1/2 p-2">
        <CustomButton 
          variant="card"
          className="h-full"
          source={require("../../../assets/images/icon.png")}
          price="$9.99"
          >
          Comprar ahora
        </CustomButton>
      </View>
      
      <View className="w-1/2 p-2">
        <CustomButton 
          variant="card"
          className="h-full"
          source={require("../../../assets/images/icon.png")}
          price="$9.99"
        >
          Comprar ahora
        </CustomButton>
      </View>
      
      <View className="w-1/2 p-2">
        <CustomButton 
          variant="card"
          className="h-full"
          source={require("../../../assets/images/icon.png")}
          price="$9.99"
        >
          Comprar ahora
        </CustomButton>
      </View>
      
      <View className="w-1/2 p-2">
        <CustomButton 
          variant="card"
          className="h-full"
          source={require("../../../assets/images/icon.png")}
          price="$9.99"
        >
          Comprar ahora
        </CustomButton>
      </View>
      
      <View className="w-1/2 p-2">
        <CustomButton 
          variant="card"
          className="h-full"
          source={require("../../../assets/images/icon.png")}
          price="$9.99"
        >
          Comprar ahora
        </CustomButton>
      </View>

    </View>

  </ScrollView>
  )
}

export default homeScreen