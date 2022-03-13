import {Text, StyleSheet, Pressable, Image, View} from "react-native";

export default function Langue(props) {

    let link = '';
    if (props.type === 'es'){link = require('../../assets/icons/android/4x/esxxxhdpi.png')}
    if (props.type === 'al'){link = require('../../assets/icons/android/4x/alxxxhdpi.png')}
    if (props.type === 'fr'){link = require('../../assets/icons/android/4x/frxxxhdpi.png')}
    if (props.type === 'ar'){link = require('../../assets/icons/android/4x/arxxxhdpi.png')}
    if (props.type === 'jp'){link = require('../../assets/icons/android/4x/jpxxxhdpi.png')}
    if (props.type === 'ch'){link = require('../../assets/icons/android/4x/chxxxhdpi.png')}
    if (props.type === 'uk'){link = require('../../assets/icons/android/4x/ukxxxhdpi.png')}
    if (props.type === 'po'){link = require('../../assets/icons/android/4x/poxxxhdpi.png')}
    if (props.type === 'it'){link = require('../../assets/icons/android/4x/itxxxhdpi.png')}

    const moreStyleLangue = {}
    if(props.width) moreStyleLangue.width = props.width;
    if(props.height) moreStyleLangue.height = props.height;

    if(props.marginTop) moreStyleLangue.marginTop=props.marginTop;
    if(props.marginRight) moreStyleLangue.marginRight=props.marginRight;
    if(props.marginBottom) moreStyleLangue.marginBottom=props.marginBottom;
    if(props.marginLeft) moreStyleLangue.marginLeft=props.marginLeft;
    // console.log('props.langueSelected','../../assets/icons/android/4x/'+props.langueSelected+'xxxhdpi.png')
    return (
        <View>
            {/*<Image style={[styles.imageRound,moreStyleLangue]} source={require('../../assets/icons/android/4x/'+props.langueSelected+'xxxhdpi.png')} />*/}
            <Image style={[styles.imageRound,moreStyleLangue]} source={link} resizeMode='contain' />
        </View>
    )
}

const styles = StyleSheet.create({
    imageRound: {
        width: 53,
        height: 53,
        borderRadius: 50,
        borderWidth:1,
        borderColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

})