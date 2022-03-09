import { Text, View, StyleSheet } from "react-native";

import MonHeader from "../components/Header";
import MyButton_Image from "../components/MyButton_Image";

export default function HelpScreen() {
    return (
        <View style={styles.page}>
            <MonHeader></MonHeader>
            <View style={styles.vue}>
                <MyButton_Image type="1"></MyButton_Image>
                <MyButton_Image type="2"></MyButton_Image>
                <MyButton_Image type="3"></MyButton_Image>
                <MyButton_Image type="4"></MyButton_Image>
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