import logo from '@/assets/images/logo.png';
import CustomButton from '@/components/buttons/CustomButton';
import CustomInput from '@/components/inputs/CustomInput';
import { registerService } from '@/services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';

const App = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatarId, setAvatarId] = useState(1); // ID del avatar seleccionado

  const handleRegister = async () => {
  if (!name || !email || !password || !confirmPassword) {
    return Alert.alert('Error', 'Todos los campos son obligatorios');
  }

  if (password !== confirmPassword) {
    return Alert.alert('Error', 'Las contraseñas no coinciden');
  }

  if (!email.endsWith('@sena.edu.co')) {
    return Alert.alert('Error', 'Debe usar un correo institucional del SENA (@sena.edu.co)');
  }

  try {
    const payload = {
      nombre: name,
      correo_id: email,
      password: password,
      password_confirmation: confirmPassword,
      avatar: avatarId,
    };

    const response = await registerService(payload);

    console.log('Registro exitoso:', response.data);

    // Guardar token para mantener sesión
    await AsyncStorage.setItem('@token', response.data.data.token);

    Alert.alert('Éxito', 'Usuario registrado correctamente');
    router.push('/(stack)/Home');
  } catch (error: any) {
    console.log('Error de registro:', error.response?.data || error.message);
    Alert.alert('Error', error.response?.data?.message || 'Error al registrar usuario');
  }
};

  return (
    <LinearGradient
      colors={['#538392', '#B1CCD2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}
    >
      <Image
        source={logo}
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          top: 120,
          left: 55,
        }}
      />

      <View style={{ position: 'relative', top: -10, right: -50, alignItems: 'flex-end' }}>
        <Text className="font-Opensans-bold text-2xl text-white mb-2">Tu mercado SENA</Text>

        <CustomButton variant="text-only" color="primary" onPress={() => router.push('/info')}>
          <Text className="text-quinary-50 font-Opensans-bold underline">¿QUÉ ES?</Text>
        </CustomButton>
      </View>

      <View className="w-3/4 top-10">
        <CustomInput
          placeholder="Correo Institucional"
          placeholderTextColor="#CDCDCD"
          type="email"
          value={email}
          onChangeText={setEmail}
        />

        <CustomInput
          placeholder="Nombre"
          placeholderTextColor="#CDCDCD"
          type="text"
          value={name}
          onChangeText={setName}
        />

        <CustomInput
          placeholder="Contraseña"
          placeholderTextColor="#CDCDCD"
          type="password"
          value={password}
          onChangeText={setPassword}
        />

        <CustomInput
          placeholder="Confirmar Contraseña"
          placeholderTextColor="#CDCDCD"
          type="password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View className="items-center mt-4">
          <CustomButton onPress={handleRegister} className="w-1/2" color="quinary">
            Registrar Cuenta
          </CustomButton>
        </View>

        <View className="items-center mt-20">
          <Text className="text-black text-base text-justify leading-6 px-4 mb-1 mt-10 font-bold">
            ¿Ya tienes una cuenta?
          </Text>

          <CustomButton variant="text-only" className="w-1/2" color="primary" onPress={() => router.push('/')}>
            <Text className="text-quinary-50 font-Opensans-bold underline">Iniciar Sesión</Text>
          </CustomButton>
        </View>
      </View>
    </LinearGradient>
  );
};

export default App;
