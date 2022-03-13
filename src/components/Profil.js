import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import { wsc } from '../G';
import {Rating} from "react-native-elements";

export default function MonProfil(props) {

    return (
        <Pressable style={styles.btnProfil} 
            onPress>
            <View style={styles.vueGlobalAnnonce}>
                <View style={{alignItems:'center'}}>
                    {/* Photo profil */}
                    <View>
                        <Image style={styles.imgProfil} source={{uri:props.imgProf}}/>
                    </View>
                    {/* Identité */}
                    <Text style={styles.itentity}>{props.identity}</Text>

                    {/* Âge */}
                    <Text style={styles.age}>{props.age}</Text>

                    {/* Études */}
                    <Text style={styles.etudes}>{props.etudes}</Text>
                </View>
                <View>
                    {/* Langues */}
                    <View style={styles.languesetnote}>
                        {/*TODO : faire le chemin des images*/}
                        {/*<View style={styles.langues}>*/}
                        {/*    {props.langues.map((langue) => (*/}
                        {/*        <Image style={styles.imgLangue} resizeMode='cover' source={require('../../assets/icons/'+langue+'.png')}/>*/}
                        {/*    ))};*/}
                        {/*</View>*/}


                        <View style={styles.note}>
                            <Text style={styles.textNote}>{props.note}</Text>
                            <Rating
                                type="custom"
                                fractions={1}
                                readonly
                                ratingColor="#3f7cbd"
                                ratingCount={1}
                                imageSize={16}
                                ratingImage={require('../../assets/icons/android/3x/star_emptyxxhdpi.png')}
                                onFinishRating={props.note/5}
                                startingValue={props.note/5}
                                style={{ marginLeft: 5 }}
                            />
                        </View>
                    </View>
                </View>                
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnProfil: {
        width: wsc * 0.35,
        height: 250,
        marginHorizontal: 15,
        marginBottom: 15,
        color: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000'
    },

    vueGlobalAnnonce: {
        padding: 10,
        flex: 1
    },

    imgProfil: {
        padding: 10,
        width : 71,
        height : 71,
        borderRadius:50,
    },

    identity: {
        fontSize: 30
    },

    age: {
    },

    etudes: {
    },

    languesetnote: {
        marginTop: 56,
        alignItems: 'flex-end'
    },

    langues: {
        alignContent: 'flex-start'
    },

    imgLangue:{
        height : 25,
        width : 25,
        borderRadius:50

    },

    note: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textNote: {
        fontSize: 18
    },

    starNote: {
        width: 19,
        height: 19,
        marginLeft: 5
    }
})