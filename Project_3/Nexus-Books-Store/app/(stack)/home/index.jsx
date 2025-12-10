import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView} from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 bg-[#2c414f]">
      
      {/* HERO */}
      <View className="h-[420px]">
  <ImageBackground
    source={{ uri: "https://images.unsplash.com/photo-1512820790803-83ca734da794" }}
    resizeMode="cover"
    className="flex-1 justify-center items-center px-6"
  >
    {/* Capa oscura encima de la imagen */}
    <View className="absolute inset-0 bg-black/60" />

    <Text className="text-white text-4xl font-bold text-center">
      <Text className="text-white">Nexus </Text>
      <Text className="text-yellow-400">Books</Text>
    </Text>
    <Text className="text-gray-300 text-center mt-4 text-lg">
      Descubre mundos a través de los libros
    </Text>

    <TouchableOpacity className="bg-white px-8 py-3 rounded-full mt-6">
      <Text className="text-black font-semibold text-lg">
        Explorar libros
      </Text>
    </TouchableOpacity>
  </ImageBackground>
</View>

      {/* FEATURED BOOKS */}
      <View className="px-5 py-8">
        <Text className="text-white text-2xl font-bold mb-5">
          Libros destacados
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1,2,3].map((item) => (
            <View
              key={item}
              className="bg-[#1e293b] rounded-2xl p-4 mr-4 w-[180px]"
            >
              <Image
                source={{ uri: "https://picsum.photos/200/300" }}
                className="h-[200px] w-full rounded-xl"
              />
              <Text className="text-white font-semibold mt-3">
                Título del libro
              </Text>
              <Text className="text-gray-400 text-sm mt-1">
                $19.99
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* CATEGORIES */}
      <View className="px-5 py-8 bg-[#020617] rounded-t-3xl">
        <Text className="text-white text-2xl font-bold mb-4">
          Categoriass
        </Text>

        <View className="flex-row flex-wrap justify-between">
          {["Fiction", "Romance", "Business", "Technology"].map((cat) => (
            <View
              key={cat}
              className="bg-[#020617] border border-[#1e293b] rounded-xl px-4 py-3 w-[48%] mb-3"
            >
              <Text className="text-white text-center font-medium">
                {cat}
              </Text>
            </View>
          ))}
        </View>
      </View>

    </ScrollView>
  
  );
}

export default HomeScreen;
