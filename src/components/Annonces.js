import {useState,  useEffect} from 'react';
import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import { wsc } from '../G';
import {Api} from "../services/API";

export default function MonAnnonce(props) {


    const displayStar = () => {
        if (props.displayStar == false) {
            return false
        }
        else {
            return (
                <View style={styles.divStar}>
                    <Image style={styles.star} source={require('../../assets/starFull.svg')}></Image>
                    <Image style={styles.star} source={require('../../assets/starFull.svg')}></Image>
                    <Image style={styles.star} source={require('../../assets/starFull.svg')}></Image>
                    <Image style={styles.star} source={require('../../assets/starSemi.svg')}></Image>
                    <Image style={styles.star} source={require('../../assets/starNone.svg')}></Image>
                </View>
            )
        }
    }

    return (
        <Pressable style={styles.btnAnnonce} >

            <View style={styles.vueGlobalAnnonce}>
                {/* Notes -> étoiles */}
                    {displayStar()}

                    {/* Utilisateur */}
                    <Text style={styles.title}>{props.user}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{props.description}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnAnnonce: {
        width: wsc * 0.8,
        marginBottom: 20,
        color: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000'
    },

    vueGlobalAnnonce: {
        marginLeft: 10
    },  

    divStar: {
        display: 'flex',
        flexDirection: 'row',
    },

    star: {
        width: 22,
        height: 22,
        marginRight: 5,
        marginVertical: 6
    },

    title: {
        fontSize: 15,
        marginVertical: 5,
        fontWeight: 'bold'
    },

    description: {
        fontSize: 13,
        marginTop: 2,
        marginBottom: 20
    }
})