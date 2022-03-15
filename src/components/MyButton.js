import { Text, StyleSheet, Pressable } from "react-native";

export default function MyButton(props) {
    const moreStyleButton = {}
    const moreStyleText = {}
    if (props.backgroundColor) moreStyleButton.backgroundColor = props.backgroundColor;
    if (props.width) moreStyleButton.width = props.width;
    if (props.height) moreStyleButton.height = props.height;
    if (props.content === '+') {
        moreStyleButton.borderRadius = props.width;
        moreStyleText.fontWeight = 'bold';
    }

    if (props.marginTop) moreStyleButton.marginTop = props.marginTop;
    if (props.marginRight) moreStyleButton.marginRight = props.marginRight;
    if (props.marginBottom) moreStyleButton.marginBottom = props.marginBottom;
    if (props.marginLeft) moreStyleButton.marginLeft = props.marginLeft;

    if (props.color) moreStyleText.color = props.color;
    if (props.fontSize) moreStyleText.fontSize = props.fontSize;
    return (
        <Pressable style={[styles.button, moreStyleButton]} onPress={() => props.refNavigation.navigate(props.screenNavigTo)}>
            <Text style={[styles.buttonText, moreStyleText]}>{props.content}</Text>
        </Pressable>
    )
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