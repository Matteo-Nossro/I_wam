import { Text, StyleSheet, Pressable, Image } from "react-native";

export default function MyButton_Image(props) {
    let content = '';
    let link = '';
    if (props.type === '1'){
        content = 'Transport';
        link = require('../../assets/icons/android/4x/transportxxxhdpi.png') // Lien picto Transport
    };
    if (props.type === '2'){
        content = 'FAQ';
        link = require('../../assets/icons/android/4x/helpsxxxhdpi.png') // Lien picto FAQ
    };
    if (props.type === '3'){
        content = 'Loisirs';
        link = require('../../assets/icons/android/4x/hoobiesxxxhdpi.png') // Lien picto Loisirs
    };
    if (props.type === '4'){
        content = 'Documents';
        link = require('../../assets/icons/android/4x/documentxxxhdpi.png') // Lien picto Documents
    };
    return (
        <Pressable 
            style={styles.button}
            onPress={() => props.refNavigation.navigate(content)}
        >
            <Image style={styles.imgCarre} source={link} resizeMode='contain'/>
            <Text style={styles.buttonText}>{content}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFF',
        width: 300,
        height: 90,
        borderRadius: 20,
        marginVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imgCarre: {
        width: 50,
        height: 50,
        marginLeft: 40,
        marginRight: 40
    },
    imgPortrait: {
        width: 40,
        height: 50,
        marginLeft: 45,
        marginRight: 45,
    },
    imgPaysage: {
        width: 60,
        height: 40,
        marginLeft: 35,
        marginRight: 35,
    },
    buttonText: {
        width: 'initial',
        fontFamily: '',
        fontWeight: 'bold',
        fontSize: 20
    }
})