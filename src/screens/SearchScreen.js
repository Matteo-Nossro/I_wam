import { View, StyleSheet } from "react-native";

import MonProfil from "../components/Profil";
import MonHeader from "../components/Header";
import { wsc } from "../G";

var sIdentity = "Mathias Genelot";
var sAge = "20";
var sEtudes = "Licence DDIM / IUT Dijon"
var sLangue1 = "Français"
var sLangue2 = "Anglais"
var sLangue3 = "Allemand"
var sNote = "4.5"

export default function SearchScreen() {
    return (
        <View style={styles.page}>
            <MonHeader></MonHeader>

            <View style={styles.tuilesProfil}>
                <MonProfil
                    identity={sIdentity}
                    age={sAge}
                    etudes={sEtudes}
                    langue1={sLangue1}
                    langue2={sLangue2}
                    langue3={sLangue3}
                    note={sNote}
                >
                </MonProfil>
                <MonProfil
                    identity={sIdentity}
                    age={sAge}
                    etudes={sEtudes}
                    langue1={sLangue1}
                    langue2={sLangue2}
                    langue3={sLangue3}
                    note={sNote}
                >
                </MonProfil>
                <MonProfil
                    identity={sIdentity}
                    age={sAge}
                    etudes={sEtudes}
                    langue1={sLangue1}
                    langue2={sLangue2}
                    langue3={sLangue3}
                    note={sNote}
                >
                </MonProfil>
                <MonProfil
                    identity={sIdentity}
                    age={sAge}
                    etudes={sEtudes}
                    langue1={sLangue1}
                    langue2={sLangue2}
                    langue3={sLangue3}
                    note={sNote}
                >
                </MonProfil>
                <MonProfil
                    identity={sIdentity}
                    age={sAge}
                    etudes={sEtudes}
                    langue1={sLangue1}
                    langue2={sLangue2}
                    langue3={sLangue3}
                    note={sNote}
                >
                </MonProfil>
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

    tuilesProfil: {
        flex: 1,
        // flexDirection: 'row',
        flexWrap: 'wrap', 
        marginTop: 20,
        alignContent: 'space-around'        
    }
})