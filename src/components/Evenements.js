import {useState,  useEffect} from 'react';
import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import { wsc } from '../G';
import {Api} from "../services/API";

export default function MonEvenement(props) {
    return (
        <Pressable style={styles.btnAnnonce} >

            <View style={styles.vueGlobalAnnonce}>
                <View style={styles.apercuDesc}>
                    {/* Titre */}
                    <Text style={styles.title}>{props.title}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{props.description}</Text>

                    {/* Lieu */}
                    <Text style={styles.place}>{props.place}</Text>

                    {/* Date */}
                    <Text style={styles.place}>{props.date}</Text>
                </View>
                <View style={styles.apercuEvent}>
                    <Image style={styles.imgEvent} resizeMode='cover' source={props.imgUrl}></Image>
                </View>
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
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#000'
    },

    vueGlobalAnnonce: {
        display: 'flex',
        flexDirection: 'row'
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
    },

    place: {
        fontSize: 13,
        marginTop: 2,
        marginBottom: 20,
        fontWeight: 'bold'
    },

    apercuDesc: {
        width: wsc * 0.4,
        marginLeft: 10
    },

    apercuEvent: {
        width: wsc * 0.4
    },

    imgEvent: {
        width: wsc * 0.37,
        height: 150,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    }
})