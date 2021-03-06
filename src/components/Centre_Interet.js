import {View, StyleSheet, Image, TouchableHighlight} from "react-native";
import {useState} from "react";

export default function Centre_Interet(props) {
    let link = '';
    if (props.type === '1'){link = require('../../assets/icons/android/4x/ci-1xxxhdpi.png')}
    if (props.type === '2'){link = require('../../assets/icons/android/4x/ci-2xxxhdpi.png')}
    if (props.type === '3'){link = require('../../assets/icons/android/4x/ci-3xxxhdpi.png')}
    if (props.type === '4'){link = require('../../assets/icons/android/4x/ci-4xxxhdpi.png')}
    if (props.type === '5'){link = require('../../assets/icons/android/4x/ci-5xxxhdpi.png')}
    if (props.type === '6'){link = require('../../assets/icons/android/4x/ci-6xxxhdpi.png')}
    if (props.type === '7'){link = require('../../assets/icons/android/4x/ci-7xxxhdpi.png')}
    if (props.type === '8'){link = require('../../assets/icons/android/4x/ci-8xxxhdpi.png')}
    if (props.type === '9'){link = require('../../assets/icons/android/4x/ci-9xxxhdpi.png')}
    if (props.type === '10'){link = require('../../assets/icons/android/4x/ci-10xxxhdpi.png')}



    return (
        <View style={styles.container}>
                <Image style={styles.img} source={link} resizeMode='contain'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#707070',
        padding: 15,
        margin:5
    },
    img: {
        width: 34,
        height: 34
    }
})