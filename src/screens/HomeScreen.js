import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

import MonAnnonce from "../components/Annonces";
import MonEvenement from "../components/Evenements";
import { wsc } from "../G";

import { Header } from 'react-native-elements';
import {useEffect, useState} from "react";
import {Api} from "../services/API";
// import { LinearGradient } from "react-native-linear-gradient";

var desc = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque neque,dapibus ut sem sed,"'
desc += '"suscipit placerat dolor. Cras non nibh a lorem congue blandit. Cras nec placerat ligula. Morbi."'

var user = "User1 :"

export default function HomeScreen() {

    const [annonces, setAnnonces] = useState([]);
    const [avisUtilisateurs, setAvisUtilisateurs] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        Api.getAnnonces().then(annonces =>{
            setAnnonces(annonces);
        });
        Api.getEvents().then(events =>{
            setEvents(events);
        });
        Api.getAvisUtilisateurs().then(avisUtilisateurs =>{
            setAvisUtilisateurs(avisUtilisateurs);
        });

    },[]);

    return (
        <View style={styles.page}>
            <Header
            backgroundColor="#fff"
            leftComponent={
                <View>
                    <Image style={styles.logoHeader} source={require('../../assets/icons/logo.svg')}></Image>
                </View>
            }
            rightComponent={
                <View>
                    <Image style={styles.iconHeader} source={require('../../assets/messages.svg')}></Image>
                </View>
            }
            />      

            <ScrollView style={styles.scrollView}>
                {/* Les Avis */}
                <View>
                    <Text style={styles.textTitre}>Mes Avis</Text>
                    <View style={styles.tuiles} >
                        {avisUtilisateurs.map((avisUtilisateur) => (
                            <MonAnnonce
                                displayStar={true}
                                note={avisUtilisateur.acf.stars}
                                user={avisUtilisateur.acf.username}
                                description={avisUtilisateur.acf.usercomment}>
                            </MonAnnonce>
                        ))}
                    </View>
                </View>
                {/* Les Annonces */}
                <View>
                    <Text style={styles.textTitre}>Annonces</Text>
                    <View style={styles.tuiles}>
                        {annonces.map((annonce) => (
                            <MonAnnonce

                                displayStar={false }
                                user={annonce.acf.title}
                                description={annonce.acf.content}>
                            </MonAnnonce>
                        ))}

                    </View>
                </View>
                {/* Les Évènements */}
                <View>
                    <Text style={styles.textTitre}>Évènements</Text>
                    <View style={styles.tuiles}>
                    {events.map((event) => (
                        <MonEvenement
                        title={event.acf.title}
                        description={event.acf.description}
                        place={event.acf.place}
                        date={'Le ' +event.acf.date + ' à ' + event.acf.hours}
                        imgUrl={ event.acf.picture.url}>
                    </MonEvenement>
                        ))}

                    </View>
                </View>
            </ScrollView>
        </View>
            
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#BBCADA',
    },
    logoHeader: {
        width: 160,
        height: 45,
        marginLeft: wsc * 0.1
    },
    iconHeader: {
        width: 30,
        height: 30,
        marginRight: 4,
        marginTop: 5,
        marginRight: wsc * 0.1

    },
    textTitre: {
        color: '#000',
        fontSize: 20,
        marginLeft: wsc * 0.1,
        marginTop: 20,
        marginBottom: 10
    },
    tuiles: {
        height: '100%',
        alignItems: 'center'
    }
})