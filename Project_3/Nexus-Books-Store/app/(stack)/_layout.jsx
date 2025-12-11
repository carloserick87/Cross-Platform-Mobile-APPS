import { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign, Fontisto, Entypo } from "@expo/vector-icons";
import { View, Image, TouchableOpacity } from "react-native";

const StackLayout = () => {
  const [activeIcon, setActiveIcon] = useState(null);

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
            headerRight: () => (


              <View 
  style={{ 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  }}
>

  {/* Ícono izquierda */}
  <TouchableOpacity onPress={() => setActiveIcon("grid")}>
    <Ionicons
      name="grid-outline"
      size={26}
      color={activeIcon === "grid" ? "#00ffcc" : "black"}
    />
  </TouchableOpacity>

  {/* Avatar derecha */}
  <TouchableOpacity onPress={() => console.log("Avatar pressed")}>
    <Image
      source={{ uri: "https://i.pravatar.cc/150?img=32" }}
      style={{
        width: 40,
        height: 40,
        borderRadius: 999,
      }}
    />
  </TouchableOpacity>

</View>


            ),
          }}
        />
        <Stack.Screen  name="landing/[id]/index"  options={({ route }) => ({ title: `${route.params.id}`})}/>
      </Stack>
    </View>
  );
};

export default StackLayout;
