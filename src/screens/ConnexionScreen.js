import { Text, View, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
import { hsc, wsc } from "../G";

export default function ConnexionScreen({route, navigation}) {
    return (
        <View style={styles.page}>
            <Text style={styles.titre}>Identification</Text>
            <View style={styles.boutons}>
                <MyButton
                    backgroundColor='#FFFFFF'
                    width = {144}
                    height = {48}
                    color = '#3E3E3E'
                    fontSize ='16'
                    content='Créer un compte'
                    marginRight={15}
                />
                <MyButton
                    refNavigation={navigation}
                    backgroundColor='#407BBC' 
                    width = {144} 
                    height = {48} 
                    color = '#FCFCFC' 
                    fontSize ='16' 
                    content='Connexion'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#77B5FE',
    },

    titre: {
        flex: 1,
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 100,
        textAlign: 'center'
    },

    boutons: {
        flex: 1,
        width: wsc,
        flexDirection: 'row',
        right: 20,
        justifyContent: 'flex-end'
    }
})