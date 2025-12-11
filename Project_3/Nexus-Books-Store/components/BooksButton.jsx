// Main Button

import { Pressable } from "react-native";
import { Text } from "react-native"; 
   
const BooksButton = ({color="bg-yellow-400", onPress, onLongPress, children}) => {

    return (
        <Pressable
            className={`mt-8  px-8 py-4 rounded-full ${color} active:opacity-90`}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Text className="text-white  text-center font-rasa-light text-xl">
                {children}
            </Text>
        </Pressable>
    );
}

export default BooksButton;