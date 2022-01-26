import {Button, Text, View } from "react-native";

export default function Screen2({route, navigation}) {
    return (
        <View style= {{flex:1, backgroundColor:'#f0f'}}>
            <Text>Screen 2 </Text>

            <Button title = "go to screen 1 " onPress={() => {
                navigation.navigate("Screen1")
            }}/>
            <Button title = "go to screen 3 " onPress={() => {
                navigation.navigate("Screen3")
            }}/>
        </View>
    )
}