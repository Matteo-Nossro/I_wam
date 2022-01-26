import { Text, View } from "react-native";

// import components
import HomeNavigation from "../navigation/HomeNavigation";

export default function HomeScreen() {
    return (
        <View style= {{flex:1}}>
            <HomeNavigation/>
            <Text>HomeScreen</Text>
        </View>
    )
}