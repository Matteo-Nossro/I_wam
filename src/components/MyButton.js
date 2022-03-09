import { Text, StyleSheet, Pressable } from "react-native";

export default function MyButton(props) {
    const moreStyleButton = {}
    const moreStyleText = {}
    if(props.backgroundColor) moreStyleButton.backgroundColor = props.backgroundColor;
    if(props.width) moreStyleButton.width = props.width;
    if(props.height) moreStyleButton.height = props.height;
    if(props.content == '+'){
        moreStyleButton.borderRadius = props.width;
        moreStyleText.fontWeight = 'bold';
    }
    if(props.color) moreStyleText.color = props.color;
    if(props.fontSize) moreStyleText.fontSize = props.fontSize;
    return (
        <Pressable style={[styles.button, moreStyleButton]}>
            <Text style={[styles.buttonText, moreStyleText]}>{props.content}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
    }
})