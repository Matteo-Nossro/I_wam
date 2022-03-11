import { Text, View, StyleSheet } from "react-native";

import MonHeader from "../components/Header";
import MyButton_Image from "../components/MyButton_Image";

export default function HelpScreen({route, navigation}) {
    return (
        <View style={styles.page}>
            <MonHeader refNavigation={navigation}></MonHeader>
            <View style={styles.vue}>
                <MyButton_Image type="1" refNavigation={navigation}></MyButton_Image>
                <MyButton_Image type="2" refNavigation={navigation}></MyButton_Image>
                <MyButton_Image type="3" refNavigation={navigation}></MyButton_Image>
                <MyButton_Image type="4" refNavigation={navigation}></MyButton_Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#77B5FE'
    },

    vue: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})