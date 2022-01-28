import { StyleSheet,     Text, View } from "react-native";

import MonAnnonce from "../components/Annonces";

// import components
// import HomeNavigation from "../navigation/HomeNavigation";

export default function HomeScreen() {
    return (
        <View style={styles.page}>
            {/* <HomeNavigation/> */}
            <Text>HomeScreen</Text>
            <View style={styles.tuiles}>
                <MonAnnonce user="User1" description="Ceci est la description" ></MonAnnonce>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#BBCADA'
    },
    tuiles: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})