import {ScrollView, StyleSheet, Text, View, Modal, Pressable, TextInput} from "react-native";
import { useEffect, useState } from "react";
import { Api } from "../services/API";
import { wsc } from "../G";


// import composants
import MonAnnonce from "../components/Annonces";
import MonEvenement from "../components/Evenements";
import MyButton from "../components/MyButton";
import MonHeader from "../components/Header";

export default function HomeScreen({route, navigation}) {

    const [annonces, setAnnonces] = useState([]);
    const [avisUtilisateurs, setAvisUtilisateurs] = useState([]);
    const [events, setEvents] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

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

        test();

    },[]);

    return (
        <View style={styles.page}>
            <MonHeader refNavigation={navigation}/>

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
                                description={avisUtilisateur.acf.usercomment}
                                ScreenNavigateTo={'ProfilDescriptionScreen'}
                                refNavigation={navigation}

                            >
                            </MonAnnonce>
                        ))}
                    </View>
                </View>
                {/* Les Annonces */}
                <View>

                    <View style={styles.AnnonceTitleContainer}>
                        <Text style={styles.textTitre}>Annonces</Text>
                        {/*Todo : mettre un bon style au button*/}
                        <Pressable style={[styles.button, styles.buttonCancel]}
                           onPress={() => setModalVisible(true)}
                        >
                            <Text  >Créer une Annonce</Text>
                        </Pressable>
                    </View>
                    <View style={styles.tuiles}>
                        {annonces.map((annonce) => (
                            <MonAnnonce
                                displayStar={false}
                                user={annonce.acf.title}
                                description={annonce.acf.content}>
                            </MonAnnonce>
                        ))}
                    </View>
                </View>
                {/*pop up modal ajout annonce*/}
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={modalVisible}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Poster votre annonce</Text>
                            <TextInput
                                style={styles.inputTextTitle}
                                underlineColorAndroid="transparent"
                                placeholder="Titre"

                            />
                            <TextInput
                            style={styles.inputTextContent}
                            underlineColorAndroid="transparent"
                            placeholder="Contenue"
                            multiline
                            />
                            <View style={styles.buttonContainer}>
                                <Pressable
                                    style={[styles.button, styles.buttonCancel]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Annuler</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonValidate]}
                                    // Todo: mettre en place l'insertion dans l'api
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Poster l'annonce</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>


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
                        imgUrl={ event.acf.picture.url}
                        refNavigation={navigation}
                        ScreenNavigateTo={'EventScreen'}
                        >
                    </MonEvenement>
                        ))}

                    </View>
                </View>
            </ScrollView>
        </View>
            
    )
}
function test(){
    Api.getUserById(77).then(user =>{
        console.log('user',user);
        user.acf.Langues.push('Indien');
        Api.setUserById(user,77);

    });

}

Api.getAnnonces().then(annonces =>{
    setAnnonces(annonces);
});

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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        width:'80%',
        height:'auto',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonValidate: {
        backgroundColor: "#2196F3",

    },
    buttonCancel: {
        backgroundColor: "#FAFAFA",
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    inputTextTitle:{
      width:'80%'
    },
    inputTextContent:{
        width:'80%'
    },
    buttonContainer:{
        display:"flex",
        flexDirection:"row",
        marginTop:15,

    },
    AnnonceTitleContainer:{
      display:"flex",
      flexDirection:"row",
      alignContent:"center"
    },
})