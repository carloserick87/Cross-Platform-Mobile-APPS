import { useState, useEffect } from "react";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import DrawerMenu from "../../components/DrawerMenu";

const StackLayout = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    console.log("🔍 [Drawer] Estado drawerVisible cambió a:", drawerVisible);
  }, [drawerVisible]);

  const openDrawer = () => {
    console.log("🔍 [Drawer] ===== BOTÓN PRESIONADO =====");
    Alert.alert("Debug", "Botón presionado! Abriendo drawer...");
    setDrawerVisible(true);
    setActiveIcon("grid");
    console.log("✅ [Drawer] setDrawerVisible(true) llamado");
  };

  const closeDrawer = () => {
    console.log("🔍 [Drawer] Cerrando drawer");
    setDrawerVisible(false);
    setActiveIcon(null);
  };

  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#f7f4f2", elevation: 0 },
          headerTintColor: "#fff",
        }}>
        <Stack.Screen
          name="home/index"
          options={{
            title: "",
            headerLeft: () => {
              console.log("🔍 [HeaderLeft] Renderizando botón");
              return (
                <TouchableOpacity
                  onPress={() => {
                    console.log("🔍 [HeaderLeft] ===== BOTÓN PRESIONADO =====");
                    Alert.alert("Debug", "Botón presionado! Estado actual: " + drawerVisible);
                    setDrawerVisible(true);
                    setActiveIcon("grid");
                    console.log("✅ [HeaderLeft] setDrawerVisible(true) ejecutado");
                  }}
                  style={{ marginLeft: 16, padding: 8 }}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name="grid-outline"
                    size={26}
                    color={activeIcon === "grid" ? "#00ffcc" : "black"}
                  />
                </TouchableOpacity>
              );
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  router.push("/(tabs)/profile");
                }}
                style={{ marginRight: 16 }}
              >
                <Image
                  source={{ uri: "https://i.pravatar.cc/150?img=32" }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="book/[id]/1"
          options={{ title: "Detalle del Libro" }}
        />
        <Stack.Screen
          name="book/[id]/2"
          options={{ title: "Detalle del Libro" }}
        />
        <Stack.Screen
          name="book/[id]/3"
          options={{ title: "Detalle del Libro" }}
        />
        <Stack.Screen
          name="book/[id]/4"
          options={{ title: "Detalle del Libro" }}
        />
      </Stack>
      {console.log("🔍 [StackLayout] Renderizando con drawerVisible:", drawerVisible)}
      {drawerVisible && console.log("🔍 [StackLayout] DrawerVisible es TRUE - Renderizando DrawerMenu")}
      <DrawerMenu
        visible={drawerVisible}
        onClose={closeDrawer}
      />
    </View>
  );
};

export default StackLayout;
