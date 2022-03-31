import {Text, View, StyleSheet, TextInput, Image, ScrollView,Picker,Pressable} from "react-native";
import {useEffect, useState} from "react";


//import composants
import MonHeader from "../components/Header";
import Centre_Interet from "../components/Centre_Interet";
import MyButton from "../components/MyButton";
import {Api} from "../services/API";
import EditInput from "../components/EditInput";
import Langue from "../components/Langue";
import {Avatar} from "react-native-elements";
import HomeScreen from "./HomeScreen";


export default function EventScreen({route, navigation}) {

    useEffect(() => {


    },[]);

    return (
        <View style={styles.page}>
            <MonHeader refNavigation={navigation}></MonHeader>

            <ScrollView style={styles.scrollingPage}>
                <View style={styles.header}>
                    <Pressable
                        style={styles.buttonRetour}
                        onPress={() => props.refNavigation.navigate(HomeScreen)}
                    >
                        <Image style={styles.imgCarre} source={require('../../assets/inferieur.png')} resizeMode='cover'/>
                    </Pressable>
                    <View style={styles.titleWithContent}>
                        <Text style={styles.title}>Concert de rentré</Text>
                        <Text style={styles.date}>03-12-2022</Text>
                    </View>

                </View>
                <Image style={styles.imgSingleEvent} resizeMode='contain' source={require('../../assets/evenement.jpg')}></Image>

                <View style={styles.titleWithContent}>
                    <Text style={styles.subtitle}>Lieu </Text>
                    <Text style={styles.content}>Place de la libération</Text>
                </View>

                <View style={styles.titleWithContent}>
                    <Text style={styles.subtitle}>Description</Text>
                    <Text style={styles.descriptionContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#77B5FE',
    },
    scrollingPage:{
        paddingVertical:31
    },
    header:{
        display:"flex",
        flexDirection:"row",
        alignContent:"center"
    },
    buttonRetour:{
        paddingLeft:30,
        paddingRight:10
    },
    imgCarre:{

    },
    title:{
        fontSize:30,
        fontWeight:"bold"
    },
    date:{
        fontSize:16 ,
        fontWeight:"bold"
    },
    imgSingleEvent:{
        width:'100%',
        maxHeight:280,
        overflow:"hidden"
    },

    titleWithContent:{
        display:"flex",
        flexDirection:"column",
        marginBottom:15,
        marginHorizontal:'5%'
    },
    subtitle:{
        opacity:.5,
        fontSize:16,
        marginBottom:3
    },
    content:{
        fontSize:16,
        lineHeight:22,
        textAlign:"justify"
    },
    descriptionContent:{
        marginBottom:50,
        lineHeight:22,
        fontSize:16
    }
})