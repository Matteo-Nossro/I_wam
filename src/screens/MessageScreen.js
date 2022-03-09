import { View, StyleSheet, ScrollView, Text } from "react-native";
import { wsc } from "../G";

export default function MessageScreen({ navigation }) {
    return (
        <View style={styles.page}>            
            <Text>Écran message</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        maxWidth: wsc 
    }
})