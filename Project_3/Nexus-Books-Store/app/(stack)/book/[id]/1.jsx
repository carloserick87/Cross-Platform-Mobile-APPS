// Book 1

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
            uri: "https://imagessl5.casadellibro.com/a/l/s5/85/9788466244985.webp",
          }}
          className="w-full h-80 rounded-2xl"
          resizeMode="contain"
        />

        <Text
          className="text-base text-gray-700"
          style={{ textAlign: "justify" }}
        >
          Un librito para aprender a portarse muy bien y a no decir nunca
          mentiras de un modo muy gráfico. ¡Porque es un libro que crece!
          Al pasar las páginas, el troquel interior permite que la nariz de
          Pinocho se vaya asomando hasta sobresalir por completo al final
          del libro sin ningún peligro para los más pequeños, ya que están
          hechos de blanda goma Eva o foam.
        </Text>

        <View className="space-y-2">
          <Text className="text-xl font-semibold">
            Pinocho
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
