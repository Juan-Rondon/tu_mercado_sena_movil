import CustomButton from '@/components/buttons/CustomButton'
import SearchBar from '@/components/inputs/SearchBar'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

const homeScreen = () => {

  const [search, setSearch] = useState("")
  const router = useRouter()
  const defaultAvatar = require("../../../assets/images/default_user.png")
  const defaultProductImage = require("../../../assets/images/imagedefault.png")

  return (

    <View className="flex-1 bg-white">

      <View className="flex-row items-center p-4">

       <SearchBar
        value={search}
        onChangeText={setSearch}
        avatar={defaultAvatar}
        onAvatarPress={() => router.push("/profile")}
      />

      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        
        <View className="flex-row flex-wrap">
          
          <View className="w-1/2 p-2">
            <CustomButton 
              variant="card"
              isOwner={true}
              defaultImage={defaultProductImage}
              price="$9.99"
              onPress={() => router.push("/product/[id]")}
              onCartPress={() => router.push("/product/[id]?modal=true")}
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