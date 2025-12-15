import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

export default function ProfileTab() {
  const menuItems = [
    { id: 1, title: "Mis Pedidos", icon: "receipt-outline", action: () => console.log("Pedidos") },
    { id: 2, title: "Direcciones", icon: "location-outline", action: () => console.log("Direcciones") },
    { id: 3, title: "Métodos de Pago", icon: "card-outline", action: () => console.log("Pagos") },
    { id: 4, title: "Notificaciones", icon: "notifications-outline", action: () => console.log("Notificaciones") },
    { id: 5, title: "Configuración", icon: "settings-outline", action: () => console.log("Configuración") },
    { id: 6, title: "Ayuda y Soporte", icon: "help-circle-outline", action: () => console.log("Ayuda") },
    { id: 7, title: "Acerca de", icon: "information-circle-outline", action: () => console.log("Acerca de") },
  ];

  return (
    <ScrollView className="flex-1 bg-[#f7f4f2]">
      <View className="px-5 pt-14 pb-6">
        {/* Header del Perfil */}
        <View className="bg-white rounded-3xl p-6 mb-6 shadow-sm">
          <View className="items-center mb-4">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=32" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 999,
                marginBottom: 16,
              }}
            />
            <Text className="text-2xl font-bold text-black">Usuario</Text>
            <Text className="text-gray-500">usuario@nexusbooks.com</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              console.log("Editar perfil");
            }}
            className="bg-yellow-400 rounded-full py-3 px-6"
          >
            <Text className="text-center font-semibold text-black">
              Editar Perfil
            </Text>
          </TouchableOpacity>
        </View>

        {/* Estadísticas */}
        <View className="flex-row justify-between mb-6">
          <View className="bg-white rounded-2xl p-4 flex-1 mr-2 items-center shadow-sm">
            <Text className="text-2xl font-bold text-black">12</Text>
            <Text className="text-sm text-gray-500">Pedidos</Text>
          </View>
          <View className="bg-white rounded-2xl p-4 flex-1 mx-1 items-center shadow-sm">
            <Text className="text-2xl font-bold text-black">8</Text>
            <Text className="text-sm text-gray-500">Favoritos</Text>
          </View>
          <View className="bg-white rounded-2xl p-4 flex-1 ml-2 items-center shadow-sm">
            <Text className="text-2xl font-bold text-black">3</Text>
            <Text className="text-sm text-gray-500">Reseñas</Text>
          </View>
        </View>

        {/* Menú de Opciones */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-black mb-4">
            Mi Cuenta
          </Text>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                item.action();
              }}
              className="bg-white rounded-2xl p-4 mb-3 flex-row items-center shadow-sm"
            >
              <View
                className="w-10 h-10 rounded-full items-center justify-center mr-4"
                style={{ backgroundColor: "#f3f4f6" }}
              >
                <Ionicons name={item.icon} size={22} color="#000" />
              </View>
              <Text className="flex-1 text-base text-black">{item.title}</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Botón Cerrar Sesión */}
        <TouchableOpacity
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            console.log("Cerrar sesión");
          }}
          className="bg-red-50 rounded-2xl p-4 flex-row items-center justify-center border border-red-200"
        >
          <Ionicons name="log-out-outline" size={24} color="#ef4444" />
          <Text className="text-base font-semibold text-red-600 ml-2">
            Cerrar Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

