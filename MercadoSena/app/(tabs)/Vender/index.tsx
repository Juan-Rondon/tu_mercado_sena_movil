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

          <Text className='mt-4 mg-4 text-center text-2xl font-semibold'> Publicar Productos</Text>

          <Text className='mt-4 mg-4 text-center text-2xl font-semibold'> Publicar Productos </Text>

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

          <View className="flex-row gap-6 justify-center">

            <CustomInput
              type='number'
              placeholder='Precio(COP)'
              className="w-[130%] ml-2"
            ></CustomInput>

            <CustomInput
              type='number'
              placeholder='Cantidad'
              className="w-[130%] ml-2"
            ></CustomInput>

          </View>

          <CustomButton
            variant="desplegar"
            options={["tecnologia","ropa","hogar","accesorios","coleccion","Otors"]}
            placeholder="Categoria"
            onSelect={(value)=>console.log("elegido:",value)}
          />

          <CustomButton
            variant="desplegar"
            options={["nuevo","usado","reparado","reciclado","Otros"]}
            placeholder="Condicion"
            onSelect={(value)=>console.log("elegido:",value)}
            className='mt-2'
          />


          <CustomInput
            placeholder='imagen de producto '
            className='mt-4'
          ></CustomInput>

        </View>

        <View>
          <CustomButton
            variant='contained'
            className='bg-quinary'
          >
            <Text className='text-white text-lg font-semibold'>
              publicar producto
            </Text>
          </CustomButton>
        </View>

        <View className='mt-2'>
          <CustomButton
            variant='contained'
            className='bg-red-600'
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