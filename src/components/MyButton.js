import { usePropsResolution } from "native-base";
import { Text, StyleSheet, Pressable, ToastAndroid, Alert } from "react-native";

var prop = null;
var bouton = null
export default function MyButton(props) {

    prop = props;
    
    const moreStyleButton = {}
    const moreStyleText = {}
    if (props.backgroundColor) moreStyleButton.backgroundColor = props.backgroundColor;
    if (props.width) moreStyleButton.width = props.width;
    if (props.height) moreStyleButton.height = props.height;
    if (props.content === '+') {
        moreStyleButton.borderRadius = props.borderRadius;
        moreStyleText.fontWeight = 'bold';
    }

    if (props.marginTop) moreStyleButton.marginTop = props.marginTop;
    if (props.marginRight) moreStyleButton.marginRight = props.marginRight;
    if (props.marginBottom) moreStyleButton.marginBottom = props.marginBottom;
    if (props.marginLeft) moreStyleButton.marginLeft = props.marginLeft;

    if (props.color) moreStyleText.color = props.color;
    if (props.fontSize) moreStyleText.fontSize = props.fontSize;

    return (
        // <Pressable style={[styles.button, moreStyleButton]} onPress={() =>  props.refNavigation.navigate(props.screenNavigTo)}>
        <Pressable style={[styles.button, moreStyleButton]} onPress={() => OnclickButton() }>
            <Text style={[styles.buttonText, moreStyleText]}>{props.content}</Text>
        </Pressable>
    )
}

function OnclickButton() {
    if (prop.name == 'Connexion') {
        prop.result.then((value) => {
            var obj = JSON.parse(value);
            var length = Object.keys(obj).length;
            console.log(length)
            if (length > 0) {
                prop.refNavigation.navigate(prop.screenNavigTo);
            }
            else {
                //ToastAndroid.show("L'adresse mail est incorrect !", ToastAndroid.SHORT);
                /* Pour afficher un toast sur ios et android :
                https://docs.expo.dev/ui-programming/react-native-toast */
                Alert.alert("Attention", "L'adresse mail est incorrect", [{text: 'OK'}]);
            }
        });
    }
    else {
        prop.refNavigation.navigate(prop.screenNavigTo);
    }   
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        justifyContent: 'center'
    },

    buttonText: {
        textAlign: 'center',
        fontWeight:"bold",
    }
})