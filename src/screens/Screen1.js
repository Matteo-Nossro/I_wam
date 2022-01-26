import {Button, Text, View } from "react-native";
import {useEffect} from "react";

export default function Screen1({route, navigation}) {
    return (
        <View style= {{flex:1, backgroundColor:'#f0f'}}>
            <Text>Screen 1 </Text>

            <Button title = "go to screen 2 " onPress={() => {
                navigation.push("Screen1")
                navigation.navigate("Screen2")
            }}/>
            <Button title = "go to screen 3 " onPress={() => {
                navigation.navigate("Screen3")
            }}/>

        </View>
    )
}