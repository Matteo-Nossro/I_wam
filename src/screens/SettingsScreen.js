import { Text, View, StyleSheet } from "react-native";

import MonHeader from "../components/Header";

export default function SettingsScreen() {
    return (
        <View style={styles.page}>
            <MonHeader></MonHeader>
            <Text>Profil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#77B5FE',
    }
})  