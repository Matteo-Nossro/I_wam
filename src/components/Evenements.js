import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import { wsc } from '../G';

export default function MonEvenement(props) {
    return (
        <Pressable style={styles.btnEvent}
                   onPress={() => props.refNavigation.navigate(props.ScreenNavigateTo)}
        >
            <View style={styles.vueGlobalEvent}>
                <View style={styles.apercuDesc}>
                    {/* Titre */}
                    <Text style={styles.title}>{props.title}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{props.description}</Text>

                    {/* Lieu */}
                    <Text style={styles.place}>{props.place}</Text>

                    {/* Date */}
                    <Text style={styles.place}>{props.date}</Text>
                </View>
                <View style={styles.apercuEvent}>
                    <Image style={styles.imgEvent} resizeMode='cover' source={{uri: props.imgUrl}}></Image>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnEvent: {
        width: wsc * 0.8,
        marginBottom: 20,
        color: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000'
    },

    vueGlobalEvent: {
        display: 'flex',
        flexDirection: 'row'
    },

    title: {
        fontSize: 15,
        marginVertical: 5,
        fontWeight: 'bold'
    },

    description: {
        fontSize: 13,
        marginTop: 2,
        marginBottom: 20
    },

    place: {
        fontSize: 13,
        marginTop: 2,
        marginBottom: 20,
        fontWeight: 'bold'
    },

    apercuDesc: {
        flex: 1,
        marginLeft: 10
    },

    apercuEvent: {
        flex: 1,
        position:"relative"
    },

    imgEvent: {
        flex: 1,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    }
})