import CustomButton from '@/components/buttons/CustomButton'
import CustomInput from '@/components/inputs/CustomInput'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

const homeScreen = () => {

  const [search, setSearch] = useState("")

  return (
    
    <View className="flex-1 bg-white">

      <View className="p-4">
        <CustomInput
          placeholder="Buscar productos..."
          value={search}
          onChangeText={setSearch}
          className="bg-gray-200 rounded-xl"
        />
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        
        <View className="flex-row flex-wrap">
          
          <View className="w-1/2 p-2">
            <CustomButton 
              variant="card"
              source={require("../../../assets/images/frank.jpg")}
              price="$9.99"
            >
              Comprar ahora
            </CustomButton>
          </View>

          <View className="w-1/2 p-2">
            <CustomButton 
              variant="card"
              source={require("../../../assets/images/frank.jpg")}
              price="$9.99"
            >
              Comprar ahora
            </CustomButton>
          </View>
          
          <View className="w-1/2 p-2">
            <CustomButton 
              variant="card"
              source={require("../../../assets/images/frank.jpg")}
              price="$9.99"
            >
              Comprar ahora
            </CustomButton>
          </View>
          
          <View className="w-1/2 p-2">
            <CustomButton 
              variant="card"
              source={require("../../../assets/images/frank.jpg")}
              price="$9.99"
            >
              Comprar ahora
            </CustomButton>
          </View>

          </View>

      </ScrollView>
    </View>
    
  )
}

export default homeScreen