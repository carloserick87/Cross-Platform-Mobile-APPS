import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BooksButton from "../../../components/BooksButton";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 bg-[#f7f4f2] px-5 pt-14">

      <View>
       
      </View>

      {/* TITLE */}
      <View className="mb-6">
        <Text className="text-4xl font-bold text-black leading-tight">
          Descubre tus{"\n"}mejores libros ahora
        </Text>
        <Text className="text-gray-500 mt-3">
          Encuentra el libro de tus sueños según tus preferencias
        </Text>
      </View>

      {/* SEARCH BAR */}
      <View className="flex-row items-center bg-white rounded-2xl p-4 mb-10 shadow-sm">
        <Ionicons name="search-outline" size={22} color="#999" />
        <TextInput
          placeholder="Search for a book"
          placeholderTextColor="#999"
          className="flex-1 ml-2 text-black"
        />
        <TouchableOpacity className="bg-[#f4a78a] p-3 rounded-xl">
          <Ionicons name="options-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* POPULAR NOW */}
      <View className="mb-6 flex-row justify-between items-center">
        <Text className="text-xl font-bold text-black">Popular ahora</Text>
        <Text className="text-gray-500">Ver todo</Text>
      </View>

     <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-10">
     {[1, 2, 3].map((i) => (
     <Pressable key={i} onPress={() => { console.log("Libro presionado:", i);}}
      className="mr-4">
      <View className="bg-white rounded-3xl p-4 w-40 shadow-sm">
        <Image
          source={{ uri: "https://picsum.photos/200/300?random=" + i }}
          className="w-full h-48 rounded-2xl"
        />
        <Text className="font-semibold mt-3 text-black">
          Título del libro
        </Text>
        <Text className="text-gray-500">$22.00</Text>
      </View>
    </Pressable>
  ))}
</ScrollView>

      {/* BESTSELLERS */}
      <View className="mb-6 flex-row justify-between items-center">
        <Text className="text-xl font-bold text-black">Los más vendidos</Text>
        <Text className="text-gray-500">Ver todo</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-10">
  {[1, 2, 3].map((i) => (
    <Pressable
      key={i}
      onPress={() => {
        console.log("Pressed book:", i);
      }}
      className="mr-4"
      style={({ pressed }) => ({
        opacity: pressed ? 0.85 : 1,
        transform: [{ scale: pressed ? 0.97 : 1 }],
      })}
    >
      <View className="bg-white rounded-3xl p-4 w-40 shadow-sm">
        <Image
          source={{ uri: "https://picsum.photos/200/310?random=" + i }}
          className="w-full h-48 rounded-2xl"
        />
        <Text className="font-semibold mt-3 text-black">
          Book title
        </Text>
        <Text className="text-gray-500">$19.99</Text>
      </View>
    </Pressable>
  ))}
</ScrollView>

      {/* BUTTON EXPLORE BOOKS */}
      <BooksButton
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          router.push("../landing/[id]/index.jsx");
        }}
      >
        Explorar libros
      </BooksButton>

      <View className="h-10" />
    </ScrollView>
  );
};

export default HomeScreen;
