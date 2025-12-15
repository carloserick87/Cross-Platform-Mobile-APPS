import { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import { useBooks } from "../../hooks/useBooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FavoritesTab() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const { books: allBooks, loading: booksLoading, error: booksError } = useBooks();

  // Cargar favoritos desde AsyncStorage
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const stored = await AsyncStorage.getItem("favorites");
        if (stored) {
          setFavoriteIds(JSON.parse(stored));
        } else {
          // Por defecto, primeros 3 libros como favoritos
          const defaultFavorites = allBooks.slice(0, 3).map(b => b.id || b.title);
          setFavoriteIds(defaultFavorites);
          await AsyncStorage.setItem("favorites", JSON.stringify(defaultFavorites));
        }
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    };
    if (allBooks.length > 0) {
      loadFavorites();
    }
  }, [allBooks]);

  // Filtrar libros favoritos
  const favorites = allBooks.filter(book => 
    favoriteIds.includes(book.id) || favoriteIds.includes(book.title)
  );

  const removeFavorite = async (bookId) => {
    try {
      const newFavorites = favoriteIds.filter(id => id !== bookId);
      setFavoriteIds(newFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  return (
    <ScrollView className="flex-1 bg-[#f7f4f2]">
      <View className="px-5 pt-14 pb-6">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-4xl font-bold text-black leading-tight">
            Mis{"\n"}Favoritos
          </Text>
          <Text className="text-gray-500 mt-3">
            {favorites.length} libro{favorites.length !== 1 ? "s" : ""} guardado{favorites.length !== 1 ? "s" : ""}
          </Text>
        </View>

        {/* Loading State */}
        {booksLoading ? (
          <View className="items-center justify-center py-20">
            <ActivityIndicator size="large" color="#fbbf24" />
            <Text className="text-gray-500 mt-4">Cargando favoritos...</Text>
          </View>
        ) : booksError ? (
          <View className="items-center justify-center py-20">
            <Ionicons name="alert-circle-outline" size={64} color="#ef4444" />
            <Text className="text-red-500 mt-4">Error al cargar los favoritos</Text>
          </View>
        ) : favorites.length === 0 ? (
          <View className="items-center justify-center py-20">
            <Ionicons name="heart-outline" size={64} color="#9ca3af" />
            <Text className="text-xl font-semibold text-gray-500 mt-4">
              No tienes favoritos aún
            </Text>
            <Text className="text-gray-400 text-center mt-2">
              Agrega libros a tus favoritos para encontrarlos fácilmente
            </Text>
          </View>
        ) : (
          <View>
            {favorites.map((book, index) => (
              <TouchableOpacity
                key={book.id || index}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  router.push(`/(stack)/book/[id]/${book.id || index + 1}`);
                }}
                className="bg-white rounded-2xl p-4 mb-4 flex-row shadow-sm"
              >
                <Image
                  source={{ 
                    uri: book.image || `https://picsum.photos/200/300?random=${book.id || index + 20}` 
                  }}
                  className="w-24 h-32 rounded-xl"
                />
                <View className="flex-1 ml-4 justify-between">
                  <View>
                    <Text className="text-lg font-semibold text-black mb-1" numberOfLines={2}>
                      {book.title || `Libro Favorito ${index + 1}`}
                    </Text>
                    <Text className="text-sm text-gray-500">
                      {book.author || "Autor"}
                    </Text>
                  </View>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-lg font-bold text-black">
                      ${book.price || "22.99"}
                    </Text>
                    <TouchableOpacity
                      onPress={() => removeFavorite(book.id || book.title)}
                    >
                      <Ionicons name="heart" size={24} color="#ef4444" />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

