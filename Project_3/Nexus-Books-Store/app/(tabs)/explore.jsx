import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import { useBooks, useBooksByCategory } from "../../hooks/useBooks";

export default function ExploreTab() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { books: allBooks, loading: booksLoading, error: booksError } = useBooks();
  const { books: categoryBooks, loading: categoryLoading } = useBooksByCategory(selectedCategory);

  const categories = [
    { id: 1, name: "Ficción", icon: "book-outline", color: "#fbbf24", value: "Fiction" },
    { id: 2, name: "No Ficción", icon: "document-text-outline", color: "#f4a78a", value: "Non-Fiction" },
    { id: 3, name: "Ciencia", icon: "flask-outline", color: "#00ffcc", value: "Science" },
    { id: 4, name: "Historia", icon: "time-outline", color: "#a78bfa", value: "History" },
    { id: 5, name: "Biografías", icon: "person-outline", color: "#fb7185", value: "Biography" },
    { id: 6, name: "Tecnología", icon: "laptop-outline", color: "#60a5fa", value: "Technology" },
  ];

  // Libros destacados (primeros 4 de todos los libros o de la categoría seleccionada)
  const featuredBooks = (selectedCategory ? categoryBooks : allBooks).slice(0, 4);

  return (
    <ScrollView className="flex-1 bg-[#f7f4f2]">
      <View className="px-5 pt-14 pb-6">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-4xl font-bold text-black leading-tight">
            Explorar{"\n"}Libros
          </Text>
          <Text className="text-gray-500 mt-3">
            Descubre nuevos títulos y categorías
          </Text>
        </View>

        {/* Categorías */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-black mb-4">
            Categorías
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  setSelectedCategory(selectedCategory === category.value ? null : category.value);
                }}
                className={`w-[48%] rounded-2xl p-4 mb-4 items-center shadow-sm ${
                  selectedCategory === category.value ? "bg-yellow-100" : "bg-white"
                }`}
              >
                <View
                  className="w-16 h-16 rounded-full items-center justify-center mb-3"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <Ionicons
                    name={category.icon}
                    size={32}
                    color={category.color}
                  />
                </View>
                <Text className="text-base font-semibold text-black text-center">
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Libros Destacados */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-black mb-4">
            {selectedCategory ? `Libros de ${categories.find(c => c.value === selectedCategory)?.name}` : "Libros Destacados"}
          </Text>
          
          {(booksLoading || categoryLoading) ? (
            <View className="py-10 items-center">
              <ActivityIndicator size="large" color="#fbbf24" />
              <Text className="text-gray-500 mt-4">Cargando libros...</Text>
            </View>
          ) : booksError ? (
            <View className="py-10 items-center">
              <Ionicons name="alert-circle-outline" size={48} color="#ef4444" />
              <Text className="text-red-500 mt-4">Error al cargar los libros</Text>
            </View>
          ) : featuredBooks.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {featuredBooks.map((book, index) => (
                <TouchableOpacity
                  key={book.id || index}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    router.push(`/(stack)/book/[id]/${book.id || index + 1}`);
                  }}
                  className="bg-white rounded-3xl p-4 w-40 mr-4 shadow-sm"
                >
                  <Image
                    source={{ 
                      uri: book.image || `https://picsum.photos/200/300?random=${book.id || index + 10}` 
                    }}
                    className="w-full h-48 rounded-2xl mb-3"
                  />
                  <Text className="font-semibold text-black mb-1" numberOfLines={2}>
                    {book.title || `Libro ${index + 1}`}
                  </Text>
                  <Text className="text-sm text-gray-500 mb-2">
                    {book.author || "Autor"}
                  </Text>
                  <Text className="text-base font-bold text-black">
                    ${book.price || "24.99"}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <View className="py-10 items-center">
              <Ionicons name="library-outline" size={48} color="#9ca3af" />
              <Text className="text-gray-500 mt-4">No hay libros en esta categoría</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

