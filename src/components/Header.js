import { Header } from 'react-native-elements';
import { StyleSheet, Image, View, Pressable } from 'react-native';
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
                    {/* Ouvre l'écran des messages */}
                    <Pressable onPress={''}>
                        <Image style={styles.iconHeader} source={require('../../assets/icons/android/4x/messagexxxhdpi.png')}></Image>
                    </Pressable>
                </View>
            }
        /> 
    )
}

const styles = StyleSheet.create({
    logoHeader: {
        width: 160,
        height: 50,
        marginTop: 10,
        marginLeft: wsc * 0.1
    },
    iconHeader: {
        width: 30,
        height: 30,
        marginTop: 25,
        marginRight: wsc * 0.1
    }
})