import { ScrollView, StyleSheet, Text, View } from "react-native";

import MonAnnonce from "../components/Annonces";

var desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque neque,dapibus ut sem sed," 
desc += "suscipit placerat dolor. Cras non nibh a lorem congue blandit. Cras nec placerat ligula. Morbi."

var user = "User1"

export default function HomeScreen() {
    return (
        <View style={styles.page}>
            <ScrollView>
                {/* Les Avis */}
            <View>
                <Text style={styles.textTitre}>Les avis que l'on nous donne</Text>
                <View style={styles.tuiles}>
                    <MonAnnonce
                        // displayStar='true'
                        // note='5'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
                    <MonAnnonce 
                        note='5'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
                </View>
            </View>
            {/* Les Annonces */}
            <View>
                <Text style={styles.textTitre}>Annonces</Text>
                <View style={styles.tuiles}>
                    <MonAnnonce
                        // displayStar='false'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
                    <MonAnnonce 
                        note='5'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
                    <MonAnnonce 
                        note='5'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
                    <MonAnnonce 
                        note='5'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
                    <MonAnnonce 
                        note='5'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
                    <MonAnnonce 
                        note='5'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
                    <MonAnnonce 
                        note='5'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>

                </View>
            </View>
            {/* Les Évènements */}
            <View>
                <Text style={styles.textTitre}>Évènements</Text>
                <View style={styles.tuiles}>
                    <MonAnnonce
                        // displayStar='false'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
                    <MonAnnonce 
                        note='5'
                        user={user}
                        description={desc}> 
                    </MonAnnonce>
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
    textTitre: {
        color: '#fff',
        fontSize: 20
    },
    tuiles: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})