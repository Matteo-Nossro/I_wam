import { Header } from 'react-native-elements';
import { StyleSheet, Image, View } from 'react-native';
import { wsc } from '../G';

export default function MonHeader() {
    return (
        <Header
            backgroundColor="#fff"
            leftComponent={
                <View>
                    <Image style={styles.logoHeader} source={require('../../assets/icons/android/4x/logoxxxhdpi.png')}></Image>
                </View>
            }
            rightComponent={
                <View>
                    <Image style={styles.iconHeader} source={require('../../assets/icons/android/4x/sendxxxhdpi.png')}></Image>
                </View>
            }
        /> 
    )
}

const styles = StyleSheet.create({
    logoHeader: {
        width: 160,
        height: 50,
        marginLeft: wsc * 0.1
    },
    iconHeader: {
        width: 30,
        height: 30,
        marginRight: 4,
        marginTop: 5,
        marginRight: wsc * 0.1
    }
})