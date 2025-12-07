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

          <CustomInput
            type='number'
            placeholder='Cantidad Disponible'
          ></CustomInput>

          <CustomInput
            placeholder='Categoria'
          ></CustomInput>

          <CustomInput
            placeholder='Condicion'
          ></CustomInput>

          <CustomInput
            placeholder='imagen de producto '
          ></CustomInput>

        </View>

        <View>
          <CustomButton
            variant='contained'
            className='bg-[#538392] mb-4'
          >
            <Text className='text-white text-lg font-semibold'>
              publicar producto
            </Text>
          </CustomButton>
        </View>
         
        <View>
          <CustomButton
            variant='contained'
            className='bg-[#B1CCD2] mb-4'
          >
            <Text className='text-white text-lg font-semibold'>
              cancelar
            </Text>
          </CustomButton>
        </View>

      </View>
    </ScrollView>
  )
}

export default venderScreen