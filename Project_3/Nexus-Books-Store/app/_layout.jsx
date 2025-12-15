import "../global.css";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "SpaceMono-Regular": require("../assets/fonts/Roboto_Condensed-Black.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    if (error) {
      console.warn("Error loading fonts:", error);
      SplashScreen.hideAsync(); // Ocultar splash incluso si hay error
    }
  }, [fontsLoaded, error]);

  // Ocultar splash después de un tiempo máximo si las fuentes no cargan
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000); // 3 segundos máximo
    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Slot />
    </Stack>
  );
};

export default RootLayout;
