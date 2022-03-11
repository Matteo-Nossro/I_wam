import { Text, View, StyleSheet } from "react-native";

import MonHeader from "../components/Header";
import Centre_Interet from "../components/Centre_Interet";

export default function SettingsScreen() {
    return (
        <View style={styles.page}>
            <MonHeader></MonHeader>
            <Centre_Interet type='1'></Centre_Interet>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#BBCADA',
    }
})  