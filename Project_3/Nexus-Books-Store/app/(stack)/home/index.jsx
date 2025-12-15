import { useState } from "react";
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Pressable, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BooksButton from "../../../components/BooksButton";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { useBooks, useSearchBooks } from "../../../hooks/useBooks";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { books: allBooks, loading: booksLoading, error: booksError } = useBooks();
  const { books: searchResults, loading: searchLoading } = useSearchBooks(searchQuery);

  // Debug logs
  console.log("🏠 [HomeScreen] Renderizando...");
  console.log("🏠 [HomeScreen] Books loading:", booksLoading);
  console.log("🏠 [HomeScreen] Books error:", booksError);
  console.log("🏠 [HomeScreen] Total libros:", allBooks.length);
  console.log("🏠 [HomeScreen] Libros:", allBooks);

  // Obtener libros populares (primeros 3)
  const popularBooks = allBooks.slice(0, 3);
  
  // Obtener más vendidos (siguientes 3)
  const bestsellers = allBooks.slice(3, 6);

  // Libros a mostrar (búsqueda o por defecto)
  const displayBooks = searchQuery ? searchResults : popularBooks;
  const displayBestsellers = searchQuery ? [] : bestsellers;

  return (
    <ScrollView className="flex-1 bg-[#f7f4f2] px-5 pt-14">
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
          placeholder="Buscar un libro"
          placeholderTextColor="#999"
          className="flex-1 ml-2 text-black"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity className="bg-[#f4a78a] p-3 rounded-xl">
          <Ionicons name="options-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Loading State */}
      {(booksLoading || searchLoading) && (
        <View className="py-10 items-center">
          <ActivityIndicator size="large" color="#fbbf24" />
          <Text className="text-gray-500 mt-4">Cargando libros...</Text>
        </View>
      )}

      {/* Error State */}
      {booksError && !booksLoading && (
        <View className="py-10 items-center">
          <Ionicons name="alert-circle-outline" size={48} color="#ef4444" />
          <Text className="text-red-500 mt-4 text-center">
            Error al cargar los libros
          </Text>
          <Text className="text-gray-500 text-sm mt-2">{booksError}</Text>
        </View>
      )}

      {/* POPULAR NOW / SEARCH RESULTS */}
      {!booksLoading && !booksError && (
        <>
          <View className="mb-6 flex-row justify-between items-center">
            <Text className="text-xl font-bold text-black">
              {searchQuery ? "Resultados de búsqueda" : "Popular ahora"}
            </Text>
            {!searchQuery && <Text className="text-gray-500">Ver todo</Text>}
          </View>

          {displayBooks.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-10">
              {displayBooks.map((book, index) => (
                <Pressable
                  key={book.id || index}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    router.push(`/(stack)/book/[id]/${book.id || index + 1}`);
                  }}
                  className="mr-4"
                >
                  <View className="bg-white rounded-3xl p-4 w-40 shadow-sm">
                    <Image
                      source={{ 
                        uri: book.image || `https://picsum.photos/200/300?random=${book.id || index}` 
                      }}
                      className="w-full h-48 rounded-2xl"
                    />
                    <Text className="font-semibold mt-3 text-black" numberOfLines={2}>
                      {book.title || "Título del libro"}
                    </Text>
                    <Text className="text-gray-500">
                      ${book.price || "22.00"}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          ) : searchQuery ? (
            <View className="py-10 items-center">
              <Ionicons name="search-outline" size={48} color="#9ca3af" />
              <Text className="text-gray-500 mt-4">No se encontraron resultados</Text>
            </View>
          ) : null}

          {/* BESTSELLERS */}
          {!searchQuery && displayBestsellers.length > 0 && (
            <>
              <View className="mb-6 flex-row justify-between items-center">
                <Text className="text-xl font-bold text-black">Los más vendidos</Text>
                <Text className="text-gray-500">Ver todo</Text>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-10">
                {displayBestsellers.map((book, index) => (
                  <Pressable
                    key={book.id || index + 4}
                    onPress={() => {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                      router.push(`/(stack)/book/[id]/${book.id || index + 4}`);
                    }}
                    className="mr-4"
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.85 : 1,
                      transform: [{ scale: pressed ? 0.97 : 1 }],
                    })}
                  >
                    <View className="bg-white rounded-3xl p-4 w-40 shadow-sm">
                      <Image
                        source={{ 
                          uri: book.image || `https://picsum.photos/200/310?random=${book.id || index + 4}` 
                        }}
                        className="w-full h-48 rounded-2xl"
                      />
                      <Text className="font-semibold mt-3 text-black" numberOfLines={2}>
                        {book.title || "Book title"}
                      </Text>
                      <Text className="text-gray-500">
                        ${book.price || "19.99"}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </>
          )}
        </>
      )}

      {/* BUTTON EXPLORE BOOKS */}
      <BooksButton
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          router.push("/(tabs)/explore");
        }}
      >
        Explorar libros
      </BooksButton>

      <View className="h-10" />
    </ScrollView>
  );
};

export default HomeScreen;
