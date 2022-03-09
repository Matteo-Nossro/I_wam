import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import { wsc } from '../G';

export default function MonProfil(props) {
    // Gestion des langues parlées
    const mesLangues = () => {
        const tabLangues= []
        switch(props.langue1, props.langue2, props.langue3) {
            case 'Français':
                tabLangues += '../../assets/icon/francais.png'
                break;
            
            case 'Anglais':
                tabLangues += '../../assets/icon/anglais.png'
                break;
        
            case 'Allemand':
                tabLangues += '../../assets/icon/allemand.png'
                break;
        
            case 'Chinois':
                tabLangues += '../../assets/icon/chinois.png'
                break;
        
            default:
                tabLangues += '';
        }
        return tabLangues
    }

    return (
        <Pressable style={styles.btnProfil} >
            <View style={styles.vueGlobalAnnonce}>
                <View style={{alignItems:'center'}}>
                    {/* Photo profil */}
                    <View style={styles.imgProfil}>
                        <Image style={styles.imgEvent} source={require('../../assets/profil-user.png')}></Image>
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
                        <View style={styles.langues}>
                            <Image style={styles.langues} resizeMode='cover' source={mesLangues[1]}></Image>
                            <Image style={styles.langues} resizeMode='cover' source={mesLangues[2]}></Image>
                            <Image style={styles.langues} resizeMode='cover' source={mesLangues[3]}></Image>
                        </View>
                        <View style={styles.note}>
                            <Text style={styles.textNote}>{props.note}</Text>
                            <Image style={styles.starNote} resizeMode='cover' source={require('../../assets/icons/android/4x/star_emptyxxxhdpi.png')}></Image>
                        </View>
                    </View>
                </View>                
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnProfil: {
        width: wsc * 0.3,
        height: 250,
        marginBottom: 20,
        color: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000',
        marginHorizontal: 20
    },

    vueGlobalAnnonce: {
        padding: 10,
        flex: 1
    },

    imgProfil: {
        padding: 10
    },

    identity: {
        fontSize: 30
    },

    age: {
    },

    etudes: {
    },

    languesetnote: {
        marginTop: 58,
        alignItems: 'flex-end'
    },

    langues: {
        alignContent: 'flex-start'
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