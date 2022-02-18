import { View, StyleSheet } from "react-native";

import MonProfil from "../components/Profil";
import MonHeader from "../components/Header";
import { wsc } from "../G";

var sIdentity = "Mathias Genelot";
var sAge = "20";
var sEtudes = "Licence DDIM / IUT Dijon"
var sLangues = ""
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
                    langues={sLangues}
                    note={sNote}
                >
                </MonProfil>
                <MonProfil
                    identity={sIdentity}
                    age={sAge}
                    etudes={sEtudes}
                    langues={sLangues}
                    note={sNote}
                >
                </MonProfil>
                <MonProfil
                    identity={sIdentity}
                    age={sAge}
                    etudes={sEtudes}
                    langues={sLangues}
                    note={sNote}
                >
                </MonProfil>
                <MonProfil
                    identity={sIdentity}
                    age={sAge}
                    etudes={sEtudes}
                    langues={sLangues}
                    note={sNote}
                >
                </MonProfil>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flexWrap: 'wrap',
        flex: 1,
        backgroundColor: '#77B5FE',
        maxWidth: wsc
    },

    tuilesProfil: {
        flexWrap: 'wrap',
        flex:1,
        marginTop: 20,
        alignContent: 'space-around'        
    }
})