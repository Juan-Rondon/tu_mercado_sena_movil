import CustomButton from '@/components/buttons/CustomButton';
import CustomInput from '@/components/inputs/CustomInput';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
// retornar a pagina principal
// mandar a base de datos
// retornar a productos propios


const venderScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View >
        <View>
          <Text className='mt-4 mg-4 text-center text-2xl font-semibold'> Publicar Producto </Text>
        </View>
        
        <View>
          <CustomInput
            type='text'
            placeholder='nombre producto'
          ></CustomInput>

          <CustomInput
            type='text'
            placeholder='Descripcion'
          ></CustomInput>

          <CustomInput
            type='number'
            placeholder='Precio(COP)'
          ></CustomInput>

          <CustomButton
            variant="desplegar"
            options={["Tecnología","Ropa","Hogar","Accesorios","Coleccionables","Otros"]}
            placeholder="Categoria"
            onSelect={(value)=>console.log("elegido:",value)}
          />

          <CustomButton
            variant="desplegar"
            options={["nuevo","usado","reparado","reciclado","Otros"]}
            placeholder="Condicion"
            onSelect={(value)=>console.log("elegido:",value)}
            className='mt-4'
          />

          <CustomInput
            placeholder='Condicion'
            className='mt-4'
          ></CustomInput>

          <CustomInput
            placeholder='imagen de producto '
          ></CustomInput>

        </View>

        <View>
          <CustomButton
            variant='contained'
            className='bg-[#538392]'
          >
            <Text className='text-white text-lg font-semibold'>
              publicar producto
            </Text>
          </CustomButton>
        </View>

        <View className='mt-2'>
          <CustomButton
            variant='contained'
            className='bg-[#538392]'
          >
            <Text className='text-black text-lg font-semibold'>
              cancelar
            </Text>
          </CustomButton>
        </View>

      </View>
    </ScrollView>
  )
}

export default venderScreen