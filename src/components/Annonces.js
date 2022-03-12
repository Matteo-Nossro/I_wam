import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import { wsc } from '../G';
import {Rating} from "react-native-elements";
import WATER_IMAGE3x from "../../assets/icons/android/3x/star_emptyxxhdpi.png";

export default function MonAnnonce(props) {
    const displayStar = () => {
        if (props.displayStar === false) {
            return false
        }
        else {
            return (
                <View style={styles.divStar}>
                    {/*<Image style={styles.star} source={require('../../assets/icons/android/4x/starxxxhdpi.png')}/>*/}
                    {/*/!*<Image style={styles.star} source={require('../../assets/icons/android/4x/star_middle_emptyxxxhdpi.png')}/>*!/*/}
                    {/*<Image style={styles.star} source={require('../../assets/icons/android/4x/star_emptyxxxhdpi.png')}/>*/}
                    {/*<Image style={styles.star} source={require('../../assets/icons/android/4x/star_emptyxxxhdpi.png')}/>*/}
                    {/*<Image style={styles.star} source={require('../../assets/icons/android/4x/star_emptyxxxhdpi.png')}/>*/}
                    {/*<Image style={styles.star} source={require('../../assets/icons/android/4x/star_emptyxxxhdpi.png')}/>*/}
                    {/*<Image style={styles.star} source={require('../../assets/icons/android/4x/star_emptyxxxhdpi.png')}/>*/}
                    {/*<Text>★★★★</Text>*/}
                    <Rating
                        type="custom"
                        fractions={1}
                        readonly
                        ratingColor="#3f7cbd"
                        ratingBackgroundColor="#FFFFFFFF"
                        ratingCount={5}
                        imageSize={16}
                        ratingImage={ require('../../assets/icons/android/3x/star_emptyxxhdpi.png')}
                        onFinishRating={props.note}
                        startingValue={props.note}
                        style={styles.star}                        // tintColor="#3498db"
                    />
                </View>
            )
        }
    }

    return (
        <Pressable style={styles.btnAnnonce} >
            <View style={styles.vueGlobalAnnonce}>
                {/* Notes -> étoiles */}
                {displayStar()}

                {/* Utilisateur */}
                <Text style={styles.title}>{props.user}</Text>

                {/* Description */}
                <Text style={styles.description}>{props.description}</Text>
            </View>
        </Pressable>
    )



}

const styles = StyleSheet.create({
    btnAnnonce: {
        width: wsc * 0.8,
        marginBottom: 20,
        color: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000'
    },

    vueGlobalAnnonce: {
        marginLeft: 10
    },  

    divStar: {
        display: 'flex',
        flexDirection: 'row',

    },

    star: {
        // width: 22,
        // height: 22,
        marginRight: 5,
        marginVertical: 6
    },

    title: {
        marginTop:15,
        fontSize: 15,
        marginVertical: 5,
        fontWeight: 'bold'
    },

    description: {
        fontSize: 13,
        marginTop: 2,
        marginBottom: 20
    }
})