import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

import MonAnnonce from "../components/Annonces";
import { wsc } from "../G";

import { Header } from 'react-native-elements';
// import { LinearGradient } from "react-native-linear-gradient";

var desc = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque neque,dapibus ut sem sed,"'
desc += '"suscipit placerat dolor. Cras non nibh a lorem congue blandit. Cras nec placerat ligula. Morbi."'

var user = "User1 :"

export default function HomeScreen() {
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
                    <View style={styles.tuiles}>
                        <MonAnnonce
                            displayStar={true}
                            // note='5'
                            user={user}
                            description={desc}> 
                        </MonAnnonce>
                        <MonAnnonce 
                            displayStar={true}
                            // note='5'
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
                            displayStar={false}
                            note='5'
                            user={user}
                            description={desc}> 
                        </MonAnnonce>
                        <MonAnnonce 
                            displayStar={false}
                            note='5'
                            user={user}
                            description={desc}>  
                        </MonAnnonce>
                        <MonAnnonce 
                            displayStar={false}
                            note='5'
                            user={user}
                            description={desc}> 
                        </MonAnnonce>
                        <MonAnnonce 
                            displayStar={false}
                            user={user}
                            description={desc}> 
                        </MonAnnonce>
                        <MonAnnonce 
                            displayStar={false}
                            user={user}
                            description={desc}>  
                        </MonAnnonce>
                        <MonAnnonce 
                            displayStar={false}
                            user={user}
                            description={desc}> 
                        </MonAnnonce>
                        <MonAnnonce 
                            displayStar={false}
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
                            displayStar={false}
                            user={user}
                            description={desc}>  
                        </MonAnnonce>
                        <MonAnnonce 
                            displayStar={false}
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