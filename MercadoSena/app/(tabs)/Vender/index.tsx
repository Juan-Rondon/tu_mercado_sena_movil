
import CustomButton from '@/components/buttons/CustomButton';
import CustomInput from '@/components/inputs/CustomInput';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const venderScreen = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]); // máximo 3

  const pickImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permiso requerido',
        'Necesito acceso a tu galería para seleccionar imágenes.'
      );
      return;
    }

    const remaining = 3 - images.length;
    if (remaining <= 0) {
      Alert.alert('Límite alcanzado', 'Máximo 3 imágenes.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: remaining,
      quality: 0.8,
    });

    if (result.canceled) return;

    const picked = result.assets.map(a => a.uri);
    setImages(prev => [...prev, ...picked].slice(0, 3));
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const ImageBox = ({ uri, index, height = 120 }: any) => (
    <View
      className={`w-[120px] h-[${height}px] rounded-xl border-2 border-dashed border-quinary-400 bg-white overflow-hidden`}
    >
      {uri ? (
        <>
          <Image
            source={{ uri }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
          <Pressable
            onPress={() => removeImage(index)}
            className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 items-center justify-center"
          >
            <Text className="text-white font-bold">×</Text>
          </Pressable>
        </>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-400 text-lg">+</Text>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView className="bg-white">
      
      <View className="bg-quinary-400 py-4 items-center">
        <View className="border border-white rounded-lg px-6 py-2">
          <Text className="text-white text-lg font-semibold">
            Publicar Nuevo Producto
          </Text>
        </View>
      </View>

      <View className="bg-white m-4 rounded-xl border border-quinary-400 p-4">

        <Text className="font-semibold mb-1">Nombre del Producto *</Text>
        <CustomInput />

        <Text className="font-semibold mb-1 mt-2">Descripción (minimo 185 caractares) *</Text>
        <TextInput
          style={styles.input}
          multiline
          maxLength={185}
          placeholder='Ingrese descripcion de producto'

        />


        <View className="flex-row justify-between mt-2">
          <View className="w-[48%]">
            <Text className="font-semibold mb-1">Precio (COP)*</Text>
            <CustomInput type="number" />
          </View>
          <View className="w-[48%]">
            <Text className="font-semibold mb-1">Cantidad Disponible *</Text>
            <CustomInput type="number" />
          </View>
        </View>

        <Text className="font-semibold mb-1 mt-3">Categoria *</Text>
        <CustomButton
          variant="desplegar"
          options={["Tecnologia", "Ropa", "Hogar", "Accesorios", "Coleccion", "Otros"]}
          placeholder="Seleccione una categoria"
        />

        <Text className="font-semibold mb-1 mt-3">Condición *</Text>
        <CustomButton
          variant="desplegar"
          options={[
            'Nuevo - alta calidad',
            'Usado - buen estado',
            'Reparado',
            'Reciclado',
          ]}
          placeholder="Seleccione una condición"
        />

        <Text className="font-semibold text-center mt-4">
          Imagen del producto
        </Text>
        <Text className="text-center text-gray-400 text-sm mb-3">
          Máximo 3
        </Text>

        <View className="items-center mb-4">
          <View className="flex-row gap-3">

            {/* CUADRO GRANDE */}
            <Pressable
              onPress={pickImages}
              className="w-[120px] h-[120px] rounded-xl border-2 border-dashed border-quinary-400 bg-white items-center justify-center"
            >
              <Text className="text-gray-400 text-xs text-center">
                Subir{'\n'}imagen
              </Text>
              <Text className="text-gray-300 text-xs mt-2">
                {images.length}/3
              </Text>
            </Pressable>

            {/* IMAGEN 1 */}
            <ImageBox uri={images[0]} index={0} />

            {/* IMAGEN 2 y 3 */}
            <View className="justify-between">
              <ImageBox uri={images[1]} index={1} height={56} />
              <View className="mt-2">
                <ImageBox uri={images[2]} index={2} height={56} />
              </View>
            </View>

          </View>
        </View>

        <CustomButton
          variant="contained"
          className="rounded-full py-3 bg-sextary-400"
        >
          <Text className="text-white text-lg font-semibold text-center">
            Publicar Producto
          </Text>
        </CustomButton>

        <CustomButton
          variant="contained"
          className="bg-red-600 rounded-full py-3 mt-3"
        >
          <Text className="text-white text-lg font-semibold text-center">
            Cancelar
          </Text>
        </CustomButton>

      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  input:{
    height: 100,
    backgroundColor: '#F5F5F7',
    borderRadius: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign:'auto',
    padding: 10,
    fontFamily: 'Opensans-Bold',
    fontSize: 15,
    textAlignVertical: 'top',
  }
});

export default venderScreen;
