import { View, StyleSheet, ScrollView, RecyclerViewBackedScrollViewBase } from "react-native";

import MonProfil from "../components/Profil";
import MonHeader from "../components/Header";
import { wsc } from "../G";
import {useEffect, useState} from "react";
import {Api} from "../services/API";
import MonAnnonce from "../components/Annonces";

export default function SearchScreen({route, navigation}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        Api.getAllUsers().then(users =>{
            setUsers(users);
        });
    },[]);

    return (
        <View style={styles.page}>
            <MonHeader refNavigation={navigation}/>
            
            <View style={{alignItems:'center'}}>
                <ScrollView style={styles.scrollVue}>
                    <View style={styles.tuilesProfil}>
                        {users.map((user,key) => (
                            <MonProfil
                                key={key}
                                identity={user.acf.Prenom + ' ' + user.acf.nom}
                                age={user.acf.age}
                                etudes={user.acf.etude + ' / ' + user.acf.lieu}
                                langues={user.acf.Langues}
                                note={user.acf.FiveStar}
                                imgProf={user.acf.imageprofil}
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#77B5FE',
        maxWidth: wsc
    },

    scrollVue: {
        flex: 1
    },

    tuilesProfil: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        alignContent: 'center'
    }
})