import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import { wsc } from '../G';

export default function MonProfil(props) {
    return (
        <Pressable style={styles.btnProfil} >
            <View style={styles.vueGlobalAnnonce}>
                <View style={{alignItems:'center'}}>
                    {/* Photo profil */}
                    <View style={styles.imgProfil}>
                        <Image style={styles.imgEvent} resizeMode='cover' source={require('../../assets/profil-user.png')}></Image>
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
                            <Image style={styles.langue} resizeMode='cover' source={{uri: props.imgUrl}}></Image>
                            <Image style={styles.langue} resizeMode='cover' source={{uri: props.imgUrl}}></Image>
                            <Image style={styles.langue} resizeMode='cover' source={{uri: props.imgUrl}}></Image>
                        </View>
                        <View style={styles.note}>
                            <Text></Text>
                            <Image style={styles.langue} resizeMode='cover' source={{uri: props.imgUrl}}></Image>
                        </View>
                    </View>
                </View>                
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnProfil: {
        width: wsc * 0.45,
        height: 250,
        marginBottom: 20,
        color: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000'
    },

    vueGlobalAnnonce: {
    },

    imgProfil: {
        marginTop: 15
    },

    identity: {
        fontSize: 30
    },

    age: {
    },

    etudes: {
    },

    languesetnote: {
    },

    langues: {
    },

    note: {
    }
})