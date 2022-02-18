import { ScrollView, StyleSheet, Text, View } from "react-native";

import MonAnnonce from "../components/Annonces";
import MonEvenement from "../components/Evenements";
import { wsc } from "../G";

import {useEffect, useState} from "react";
import {Api} from "../services/API";
import MonHeader from "../components/Header";

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
            <MonHeader></MonHeader>     

            <ScrollView>
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
        backgroundColor: '#77B5FE',
    },
    logoHeader: {
        width: 160,
        height: 50,
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
        alignItems: 'center'
    }
})