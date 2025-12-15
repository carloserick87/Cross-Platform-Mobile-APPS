import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <Redirect href="/(tabs)/home" />
    </SafeAreaView>
  );
};

export default App;