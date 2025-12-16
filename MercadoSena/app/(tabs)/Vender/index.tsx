import CustomButton from '@/components/buttons/CustomButton';
import CustomInput from '@/components/inputs/CustomInput';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, Text, View } from 'react-native';

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

  return (
    <ScrollView className="bg-white">
      {/* HEADER */}
      <View className="bg-quinary-400 py-4 items-center">
        <View className="border border-white rounded-lg px-6 py-2">
          <Text className="text-white text-lg font-semibold">
            Publicar Nuevo Producto
          </Text>
        </View>
      </View>

      <View className="bg-white m-4 rounded-xl border border-quinary-400 p-4">

        
        
        <Text className="font-semibold mb-1">Nombre del Producto *</Text>
        <CustomInput placeholder="" />

        
        <Text className="font-semibold mb-1 mt-2">Descripcion *</Text>
        <CustomInput placeholder="" />

        
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
            'Nuevo - alta calidad, recién hecho o sin desempacar',
            'Usado - el producto esta en buena calidad pero ya ha sido usado o tiene algun tipo de desgaste',
            'Reparado - el producto puede tener fallas pero aun funciona',
            'Reciclado - el procto esta inutilizable, pero puede ser reutilizado, reparado o desarmado',
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

            
            <Pressable
              onPress={!images[0] ? pickImages : undefined}
              className="w-[120px] h-[120px] rounded-xl border-2 border-dashed border-quinary-400 bg-white items-center justify-center overflow-hidden"
            >
              {images[0] ? (
                <>
                  <Image
                    source={{ uri: images[0] }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                  <Pressable
                    onPress={() => removeImage(0)}
                    className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 items-center justify-center"
                  >
                    <Text className="text-white font-bold">×</Text>
                  </Pressable>
                </>
              ) : (
                <Text className="text-gray-400 text-xs text-center">
                  Subir{'\n'}imagen
                </Text>
              )}
            </Pressable>

            
            <Pressable
              onPress={!images[1] ? pickImages : undefined}
              className="w-[120px] h-[120px] rounded-xl border-2 border-dashed border-quinary-400 bg-white items-center justify-center overflow-hidden"
            >
              {images[1] ? (
                <>
                  <Image
                    source={{ uri: images[1] }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                  <Pressable
                    onPress={() => removeImage(1)}
                    className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 items-center justify-center"
                  >
                    <Text className="text-white font-bold">×</Text>
                  </Pressable>
                </>
              ) : (
                <Text className="text-gray-400 text-lg">+</Text>
              )}
            </Pressable>

            {/* COLUMNA DERECHA (2 CUADROS PEQUEÑOS) */}
            <View className="justify-between">
              <Pressable
                onPress={!images[2] ? pickImages : undefined}
                className="w-[120px] h-[56px] rounded-xl border-2 border-dashed border-quinary-400 bg-white items-center justify-center overflow-hidden"
              >
                <Text className="text-gray-400 text-lg">+</Text>
              </Pressable>

              <Pressable
                onPress={!images[2] ? pickImages : undefined}
                className="w-[120px] h-[56px] rounded-xl border-2 border-dashed border-quinary-400 bg-white items-center justify-center overflow-hidden mt-2"
              >
                <Text className="text-gray-400 text-lg">+</Text>
              </Pressable>
            </View>

          </View>

          <Pressable onPress={pickImages} className="mt-3">
            <Text className="text-quinary-400 font-semibold">
              Subir imágenes
            </Text>
          </Pressable>
        </View>

        {/* BOTONES */}
        <CustomButton
          variant="contained"
          className="bg-[#7CFF5B] rounded-full py-3"
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

export default venderScreen;
