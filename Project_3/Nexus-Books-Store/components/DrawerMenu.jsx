import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";

const DrawerMenu = ({ visible, onClose }) => {
  console.log("🔍 [DrawerMenu] ===== COMPONENTE RENDERIZADO =====");
  console.log("🔍 [DrawerMenu] visible prop:", visible);
  console.log("🔍 [DrawerMenu] Tipo de visible:", typeof visible);
  const menuItems = [
    {
      id: 1,
      title: "Inicio",
      icon: "home-outline",
      route: "/(stack)/home",
      color: "#000",
    },
    {
      id: 2,
      title: "Explorar Libros",
      icon: "library-outline",
      route: "/(stack)/home",
      color: "#000",
    },
    {
      id: 3,
      title: "Mi Perfil",
      icon: "person-outline",
      route: null,
      color: "#000",
      onPress: () => console.log("Perfil"),
    },
    {
      id: 4,
      title: "Favoritos",
      icon: "heart-outline",
      route: null,
      color: "#000",
      onPress: () => console.log("Favoritos"),
    },
    {
      id: 5,
      title: "Carrito",
      icon: "cart-outline",
      route: null,
      color: "#000",
      onPress: () => console.log("Carrito"),
    },
    {
      id: 6,
      title: "Configuración",
      icon: "settings-outline",
      route: null,
      color: "#000",
      onPress: () => console.log("Configuración"),
    },
    {
      id: 7,
      title: "Ayuda",
      icon: "help-circle-outline",
      route: null,
      color: "#000",
      onPress: () => console.log("Ayuda"),
    },
    {
      id: 8,
      title: "Cerrar Sesión",
      icon: "log-out-outline",
      route: null,
      color: "#ef4444",
      onPress: () => console.log("Cerrar Sesión"),
    },
  ];

  const handlePress = (item) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    if (item.onPress) {
      item.onPress();
    } else if (item.route) {
      router.push(item.route);
    }
    
    onClose();
  };

  console.log("🔍 [DrawerMenu] ===== RENDERIZANDO =====");
  console.log("🔍 [DrawerMenu] visible:", visible);
  console.log("🔍 [DrawerMenu] Tipo:", typeof visible);
  
  if (!visible) {
    console.log("🔍 [DrawerMenu] visible es false, no renderizando Modal");
    return null;
  }

  console.log("✅ [DrawerMenu] visible es true, renderizando Modal");

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
      statusBarTranslucent={true}
      onShow={() => console.log("✅ [DrawerMenu] Modal onShow llamado")}
      onDismiss={() => console.log("🔍 [DrawerMenu] Modal onDismiss llamado")}
    >
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onPress={onClose}
      >
        <View
          style={{
            width: "75%",
            height: "100%",
            backgroundColor: "#f7f4f2",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            shadowColor: "#000",
            shadowOffset: { width: -2, height: 0 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: 10,
          }}
          onStartShouldSetResponder={() => true}
        >
          {/* Header del Drawer */}
          <View
            style={{
              backgroundColor: "#ffffff",
              paddingHorizontal: 24,
              paddingVertical: 32,
              borderBottomWidth: 1,
              borderBottomColor: "#e5e7eb",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#000000",
                }}
              >
                Menú
              </Text>
              <TouchableOpacity
                onPress={onClose}
                style={{
                  padding: 8,
                  borderRadius: 999,
                  backgroundColor: "#f3f4f6",
                }}
              >
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 999,
                  backgroundColor: "#fbbf24",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Ionicons name="person" size={24} color="#000" />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  Usuario
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#6b7280",
                  }}
                >
                  usuario@nexusbooks.com
                </Text>
              </View>
            </View>
          </View>

          {/* Lista de Opciones */}
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handlePress(item)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: "#f3f4f6",
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 16,
                    backgroundColor: `${item.color}15`,
                  }}
                >
                  <Ionicons name={item.icon} size={22} color={item.color} />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    flex: 1,
                    color: item.color,
                  }}
                >
                  {item.title}
                </Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="#9ca3af"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Footer */}
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 16,
              borderTopWidth: 1,
              borderTopColor: "#e5e7eb",
              backgroundColor: "#ffffff",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#9ca3af",
                textAlign: "center",
              }}
            >
              Nexus Books Store v1.0.0
            </Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default DrawerMenu;

