// Book 3

import { View, Text, Image, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function BookDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-white">

      {/* Contenido */}
      <View className="flex-1 p-6 space-y-6">
        <Text className="text-2xl font-bold">
          Detalle del libro
        </Text>

        <Image
          source={{
            uri: "https://imagessl5.casadellibro.com/a/l/s5/05/9791370091705.webp",
          }}
          className="w-full h-80 rounded-2xl"
          resizeMode="contain"
        />

        <Text
          className="text-base text-gray-700"
          style={{ textAlign: "justify" }}
        >
          Randolph Carter sueña tres veces con una majestuosa ciudad que al atardecer resplandece
          con los destellos dorados de la luz de poniente. Entrevé murallas, templos, columnatas y
          puentes de veteado mármol, fuentes de tazas plateadas y surtidores que adornaban grandes
          plazas y perfumados jardines... Pero en cada ocasión es arrancado bruscamente del sueño 
          justo antes de adentrase en el interior de la brillante ciudad del sol poniente para conocer
          sus secretos.
        </Text>

        <View className="space-y-1">
          <Text className="text-xl font-semibold space-x-1">
            EN BUSCA DE LA CIUDAD DEL SOL PONIENTE 
            (EDICIÓN ILUSTRADA)
          </Text>

          <Text className="text-2xl font-bold text-green-600">
            $22.00
          </Text>
        </View>
      </View>

      
      <View className="p-6 border-t border-gray-200">
        <Pressable
          className="bg-black py-4 rounded-2xl items-center"
          onPress={() => console.log("Comprar libro", id)}
        >
          <Text className="text-white text-lg font-semibold">
            Comprar
          </Text>
        </Pressable>
      </View>

    </View>
  );
}
