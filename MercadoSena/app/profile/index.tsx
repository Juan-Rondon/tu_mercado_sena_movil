import CustomButton from '@/components/buttons/CustomButton';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const defaultProductImage = require("../../../MercadoSena/assets/images/imagedefault.png")

const ProfileScreen = () => {
  return (

    <ScrollView contentContainerStyle={{ padding: 16 }}>
    
    <View className="left-14 top-16">
          <CustomButton
            variant="text-only"
            color="secondary"
            className="w-1/2 right-28"
            FontText='text-xl'
            onPress={() => router.push('/(tabs)/Home')}
            icon={<Ionicons name="arrow-back" size={20} color="#1C65E3" />}
            iconPosition='left'
           >
            Volver
          </CustomButton>
        </View>

        <Text
        className='flex justify-center top-8 text-center'
        >
          TU PERFIL
        </Text>

    <View className='items-center'>
    <View
    className='bg-blue-300 flex justify-center h-[150px] w-[150px] mx-3 rounded-full items-center mt-20'
    >
      <Image
      source={require('../../assets/images/default_user.png')}
      style={{ width: 100, height: 100}}
      >
      </Image>
    </View>

    <Text
    className='font-Opensans-medium text-center w-full mt-5'
    >
        Freddy Reyes
    </Text>

    <View className='flex-row top-7 justify-between w-3/4'>

        <CustomButton
          variant="icon-only"
          color="quinary"
          onPress={() => router.push('/')}
          icon={<Ionicons name="share-social" size={20} color="#fff" />}
        >
        </CustomButton>


        <CustomButton
          variant="icon-only"
          color="quinary"
          onPress={() => router.push('/')}
          icon={<MaterialCommunityIcons name="account-edit" size={20} color="#fff" />}
        >
        </CustomButton>
        
        <CustomButton
          variant="icon-only"
          color="quinary"
          onPress={() => router.push('/')}
          icon={<Ionicons name="bag-outline" size={20} color="#fff" />}
        >
        </CustomButton>
        
        <CustomButton
          variant="icon-only"
          color="quinary"
          onPress={() => router.push('/')}
          icon={<Ionicons name="chatbox-outline" size={20} color="#fff" />}
        >
        </CustomButton>

      </View>

        <View className="w-3/4 mt-10">
        <Text className="text-center text-gray-600 leading-6 mt-5">
          Soy un usuario activo en MercadoSena. Participo en diferentes 
          secciones del mercado digital y gestiono mi información desde la app.
        </Text>
        </View>

    </View>

    <View className="w-90 h-[1px] bg-gray-300 my-9 mx-4" />

    <Text
    className='text-center font-Opensans-bold'
    >
      Mis productos
    </Text>

    <View className="flex-row flex-wrap">

        <View className="w-1/2 p-2">
          <CustomButton 
            variant="card"
            defaultImage={defaultProductImage}
            price="$9.99"
            onPress={() => router.push("/product/[id]")}
            onCartPress={() => router.push("/product/[id]?modal=true")}
            >
            Comprar ahora
          </CustomButton>
        </View>

        <View className="w-1/2 p-2">
          <CustomButton 
            variant="card"
            defaultImage={defaultProductImage}
            price="$9.99"
            onPress={() => router.push("/product/[id]")}
            onCartPress={() => router.push("/product/[id]?modal=true")}
            >
            Comprar ahora
          </CustomButton>
        </View>

        <View className="w-1/2 p-2">
          <CustomButton 
            variant="card"
            defaultImage={defaultProductImage}
            price="$9.99"
            onPress={() => router.push("/product/[id]")}
            onCartPress={() => router.push("/product/[id]?modal=true")}
            >
            Comprar ahora
          </CustomButton>
        </View>
        
        <View className="w-1/2 p-2">
          <CustomButton 
            variant="card"
            defaultImage={defaultProductImage}
            price="$9.99"
            onPress={() => router.push("/product/[id]")}
            onCartPress={() => router.push("/product/[id]?modal=true")}
            >
            Comprar ahora
          </CustomButton>
        </View>

        <View className="w-1/2 p-2">
          <CustomButton 
            variant="card"
            defaultImage={defaultProductImage}
            price="$9.99"
            onPress={() => router.push("/product/[id]")}
            onCartPress={() => router.push("/product/[id]?modal=true")}
            >
            Comprar ahora
          </CustomButton>
        </View>

        <View className="w-1/2 p-2">
          <CustomButton 
            variant="card"
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
  )
}

export default ProfileScreen

