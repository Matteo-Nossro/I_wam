import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import MyButton from "../components/MyButton";
import { hsc, wsc } from "../G";

export default function CreationCompteScreen({route, navigation}) {
    return (
        <View style={styles.page}>
            {/*<Image*/}
            {/*    style={styles.image}*/}
            {/*    source={require('../../assets/fond_connexion.png')}*/}
            {/*>*/}
            {/*</Image>*/}
            <View style={styles.inputIdentity}>
                <TextInput
                    style={styles.inputTextIdentity}
                    placeholder="Prénom"
                    autoFocus={true}
                />
                <TextInput
                    style={styles.inputTextIdentity}
                    placeholder="Nom"
                />
                <TextInput
                    style={styles.inputTextIdentity}
                    placeholder="Email"
                    keyboardType='email-address'

                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputTextIdentity}
                    placeholder="Mot de passe"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputTextIdentity}
                    placeholder="Confirmer votre mot de passe"
                />
                <TextInput
                    style={styles.inputTextIdentity}
                    placeholder="Études"
                />
                <TextInput
                    style={styles.inputTextIdentity}
                    placeholder="Ville"
                />
                <TextInput
                    style={styles.inputTextIdentity}
                    placeholder="Centres d'intérêts"
                />
                <TextInput
                    style={styles.inputTextIdentity}
                    placeholder="Langues parlées"
                />
            </View>
            <View style={styles.boutons}>
                <MyButton
                    refNavigation={navigation}
                    screenNavigTo={"ConnexionScreen"}
                    backgroundColor='#FFFFFF'
                    width={144}
                    height={48}
                    color='#3E3E3E'
                    fontSize='16'
                    content='Annuler'
                    marginRight={15}
                />
                <MyButton
                    refNavigation={navigation}
                    screenNavigTo={"ConnexionScreen"}
                    backgroundColor='#407BBC' 
                    width={144} 
                    height={48} 
                    color='#FCFCFC' 
                    fontSize='16' 
                    content='Valider'
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

    inputIdentity: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40
    },

    inputTextIdentity: {
        paddingStart: 13,
        flex: 1,
        padding: 15,
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