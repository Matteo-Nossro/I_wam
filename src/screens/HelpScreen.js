import { Text, View } from "react-native";

import MonAnnonce from "../components/Annonces";

export default function HelpScreen() {
    return (
        <View style= {{flex:1, backgroundColor:'#fff'}}>
            <MonAnnonce user="User1" description="Ceci est la description" ></MonAnnonce>
        </View>
    )
}