import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

  export default function Configuracion() {
    const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-[#D1D5DB]">

      {/* CONTENIDO */}
      <View className="px-4 mt-5">

        {/*CUENTA*/}
        <Text 
        className="text-lg font-bold mb-2">Cuenta</Text>

        <SettingItem
          icon="person-outline"
          title="Cuenta"
          onPress={() => router.push('/profile')}
        />

        <SettingItem
          icon="information-circle-outline"
          title="Información personal"
        />

        {/*SEGURIDAD*/}
        <Text className="text-lg font-bold mt-6 mb-2">Seguridad</Text>

        <SettingItem
          icon="lock-closed-outline"
          title="Cambiar contraseña"
          onPress={() => router.push('/Seguridad/pandebono')}
        />

        <SettingItem
          icon="eye-outline"
          title="Privacidad"
          subtitle="Quién puede ver tu perfil, actividad en línea"
        />

        <SettingItem
          icon="remove-circle-outline"
          title="Bloqueo de Usuarios"
          subtitle="Gestión de usuarios"
        />

        {/*PREFERENCIAS*/}
        <Text className="text-lg font-bold mt-6 mb-2">Preferencias</Text>

        <SettingItem
          icon="notifications-outline"
          title="Notificaciones"
          subtitle="Sonido, vibración, recordatorios"
        />

        <SettingItem
          icon="remove-circle-outline"
          title="Bloqueo de Usuarios"
          subtitle="Gestión de usuarios"
        />

        {/*INFORMACIÓN*/}
        <Text className="text-lg font-bold mt-6 mb-2">Información</Text>

        <SettingItem
          icon="information-circle-outline"
          title="Sobre nosotros"
        />

        <SettingItem
          icon="help-circle-outline"
          title="Acerca de nosotros"
        />

        <SettingItem
          icon="document-text-outline"
          title="Términos y condiciones"
        />

        <SettingItem
          icon="log-out-outline"
          title="Cerrar cesion"
        />
      </View>

    </ScrollView>
  );
}

/*COMPONENTE REUTILIZABLE*/
function SettingItem({ icon, title, subtitle, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-xl p-4 mb-3 flex-row items-center justify-between shadow"
    >
      <View className="flex-row items-center gap-3">
        <Ionicons name={icon} size={24} color="black" />
        <View>
          <Text className="text-base font-semibold">{title}</Text>
          {subtitle && (
            <Text className="text-gray-500 text-sm">{subtitle}</Text>
          )}
        </View>
      </View>

      <Ionicons name="chevron-forward" size={22} color="black" />
    </TouchableOpacity>
  );
}
