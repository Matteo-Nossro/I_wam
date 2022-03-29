import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import MyButton from "../components/MyButton";
import { hsc, wsc } from "../G";

export default function ConnexionScreen({route, navigation}) {
    return (
        <View style={styles.page}>
            <Image
                style={styles.image}
                source={require('../../assets/fond_connexion.png')}
            >
            </Image>
            <View style={styles.inputIdentity}>
                <TextInput
                    style={styles.inputTextIdentity}
                    placeholder="Email"
                    autoFocus={true}
                    keyboardType='email-address'
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputTextIdentity}
                    placeholder="Mot de passe"
                />
            </View>
            <View style={styles.boutons}>
                <MyButton
                    refNavigation={navigation}
                    screenNavigTo='CreationCompteScreen'
                    backgroundColor='#FFFFFF'
                    width={144}
                    height={48}
                    color='#3E3E3E'
                    fontSize={16}
                    content='Créer un compte'
                    marginRight={15}
                />
                <MyButton
                    refNavigation={navigation}
                    screenNavigTo='HomeScreen'
                    backgroundColor='#407BBC' 
                    width={144} 
                    height={48} 
                    color='#FCFCFC' 
                    fontSize={16}
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

    image: {
        width: wsc,
        height: 450
    },

    inputIdentity: {
        marginBottom: 50,
        alignItems: 'center',
        marginVertical: 60
    },

    inputTextIdentity: {
        paddingStart: 13,
        flex: 1,
        padding: 20,
        marginVertical: 15,
        backgroundColor: '#fff',
        color: '#000000',
        opacity: 50,
        borderRadius: 5,
        fontWeight: 'bold',
        width: wsc * 0.84,

    },

    boutons: {
        flexDirection: 'row',
        right: wsc * 0.08,
        marginBottom: 30,
        justifyContent: 'flex-end'
    }
})