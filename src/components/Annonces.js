import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import { wsc } from '../G';

export default function MonAnnonce(props) {
    return (
        <Pressable style={styles.btnAnnonce}>
            {props.displayStar}

            <View style={styles.divStar}>
                {/* Notes -> étoiles */}
                <Image style={styles.star} source={require('../../assets/starFull.svg')}>{props.star1}</Image>
                <Image style={styles.star} source={require('../../assets/starFull.svg')}>{props.star2}</Image>
                <Image style={styles.star} source={require('../../assets/starFull.svg')}>{props.star3}</Image>
                <Image style={styles.star} source={require('../../assets/starFull.svg')}>{props.star4}</Image>
                <Image style={styles.star} source={require('../../assets/starFull.svg')}>{props.star5}</Image>
            </View>

            {/* Utilisateur */}
            <Text style={styles.title}>{props.user}</Text>

            {/* Description */}
            <Text style={styles.description}>{props.description}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnAnnonce: {
        width: wsc * 0.8,
        marginBottom: 20,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 8
    },

    divStar: {
        display: 'flex',
        flexDirection: 'row',
    },

    star: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    title: {
        fontSize: 15
    },

    description: {
        fontSize: 10
    }
})