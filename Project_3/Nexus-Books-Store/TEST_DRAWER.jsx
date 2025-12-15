// Archivo de prueba para verificar que el drawer funciona
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const TestDrawer = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          console.log("TEST: Botón presionado!");
          setVisible(true);
        }}
        style={{
          backgroundColor: "#fbbf24",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Abrir Drawer TEST</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent={true} animationType="slide">
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
          onPress={() => setVisible(false)}
        >
          <View
            style={{
              width: "75%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                DRAWER TEST FUNCIONA!
              </Text>
              <TouchableOpacity
                onPress={() => setVisible(false)}
                style={{ marginTop: 20, padding: 10, backgroundColor: "red" }}
              >
                <Text style={{ color: "white" }}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

