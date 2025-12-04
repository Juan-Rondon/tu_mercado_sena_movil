import CustomButton from '@/components/buttons/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const ProfileScreen = () => {
  return (

    <View className='items-center'>
    <View
    className='bg-blue-300 flex justify-center h-[150px] w-[150px] mx-3 rounded-full items-center mt-16'
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
          icon={<Ionicons name="create-outline" size={20} color="#fff" />}
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
  </View>
  )
}

export default ProfileScreen