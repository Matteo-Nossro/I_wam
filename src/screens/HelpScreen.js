import { Text, View, StyleSheet } from "react-native";

import MonHeader from "../components/Header";

export default function HelpScreen() {
    return (
        <View style={styles.page}>
            <MonHeader></MonHeader>
            <Text>Écran d'aide</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#77B5FE',
    }
})