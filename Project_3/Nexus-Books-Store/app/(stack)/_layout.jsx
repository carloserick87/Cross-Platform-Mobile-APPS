import { useState } from "react";
import { Stack } from "expo-router";
import { AntDesign, Fontisto, Entypo } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

const StackLayout = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#2c414f", elevation: 0 },
          headerTintColor: "#fff",
        }}>
        <Stack.Screen
          name="home/index"
          options={{
            title: "Inicio",
            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 15 }}>
                
                <TouchableOpacity onPress={() => setActiveIcon("bell")}>
                  <AntDesign name="bell" size={24} color={activeIcon === "bell" ? "#00ffcc" : "white"}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveIcon("settings")}>
                  <Fontisto
                    name="player-settings" size={24} color={activeIcon === "settings" ? "#00ffcc" : "white"}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveIcon("plus")}>
                  <Entypo name="plus" size={24} color={activeIcon === "plus" ? "#00ffcc" : "white"}/>
                </TouchableOpacity>

              </View>
            ),
          }}
        />
      </Stack>
    </View>
  );
};

export default StackLayout;
