import {Button, Text, View } from "react-native";

export default function Screen3({route, navigation}) {
    return (
        <View style= {{flex:1, backgroundColor:'#f0f'}}>
            <Text>Screen 3 </Text>

            <Button title = "go to screen 2 " onPress={() => {
                navigation.navigate("Screen2")
            }}/>
            <Button title = "go to screen 1 " onPress={() => {
                navigation.navigate("Screen1")
            }}/>

        </View>
    )
}