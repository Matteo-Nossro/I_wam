import {Text, View, StyleSheet, TextInput, Image, ScrollView,Picker} from "react-native";
import {useEffect, useState} from "react";


//import composants
import MonHeader from "../components/Header";
import Centre_Interet from "../components/Centre_Interet";
import MyButton from "../components/MyButton";
import {Api} from "../services/API";
import EditInput from "../components/EditInput";
import Langue from "../components/Langue";
import {Avatar} from "react-native-elements";


export default function SettingsScreen() {

    const [userInfos, setUserInfos] = useState([]);
    const [selectedValue, setSelectedValue] = useState();

    useEffect(() => {

        // Api.getUserById(id).then(userInfos =>{
        //     setUserInfos(userInfos);
        // });



    },[]);
    return (
        <View style={styles.page}>
            <MonHeader/>

            <ScrollView style={styles.scrollingPage}>

                <View style={styles.identity}>

                    <View style={styles.imageProfil}>
                        <Avatar
                            size={130}
                            rounded
                            source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
                            title="Bj"
                            containerStyle={{ backgroundColor: 'grey' }}
                        >
                            <Avatar.Accessory size={34} />
                        </Avatar>
                    </View>

                    <View style={styles.nomPrenom}>
                        <Text style={styles.subtitleIdentity}>Prénom</Text>

                        <View style={styles.inputIdentity}>
                            <Image style={styles.img} source={require('../../assets/icons/android/4x/editxxxhdpi.png')}/>
                            <TextInput
                                style={styles.inputTextIdentity}
                                underlineColorAndroid="transparent"
                                placeholder="Prénom"
                            />
                        </View>

                        <Text style={styles.subtitleIdentity}>Nom</Text>

                        <View style={styles.inputIdentity}>
                            <Image style={styles.img} source={require('../../assets/icons/android/4x/editxxxhdpi.png')}/>
                            <TextInput
                                style={styles.inputTextIdentity}
                                underlineColorAndroid="transparent"
                                placeholder="Nom"

                            />
                        </View>
                    </View>
                </View>

                <Text style={styles.subtitle}>Mail</Text>

                <View style={styles.input}>
                    <Image style={styles.img} source={require('../../assets/icons/android/4x/editxxxhdpi.png')}/>
                    <TextInput
                        keyboardType='email-address'
                        style={styles.inputText}
                        underlineColorAndroid="transparent"
                        placeholder="Mail"
                    />
                </View>


                <Text style={styles.subtitle}>Etudes / Lieu</Text>

                <View style={styles.input}>
                <Image style={styles.img} source={require('../../assets/icons/android/4x/editxxxhdpi.png')}/>
                <TextInput
                    style={styles.inputText}
                    underlineColorAndroid="transparent"
                    placeholder="Etude / lieu"
                />
                </View>
                <Text style={styles.subtitle}>Centres d'intérets</Text>

                <View style={styles.langueContainer}>

                    <Langue
                        type='fr'
                        height={49}
                        width={49}
                        marginRight={8}
                    />
                    <Langue
                        type='al'
                        height={49}
                        width={49}
                        marginRight={8}
                    />
                    <Langue
                        type='uk'
                        height={49}
                        width={49}
                        marginRight={8}
                    />
                </View>
                {/*TODO refaire cette merde de liste déroulante la je suis trop fatiguer*/}
                {/*<Text style={styles.subtitle}>Rôle</Text>*/}
                {/*<View >*/}
                {/*    /!*<Image style={styles.img} source={require('../../assets/icons/android/4x/editxxxhdpi.png')}/>*!/*/}
                {/*    <Picker*/}
                {/*        selectedValue='utilisateur'*/}
                {/*        style={styles.selectList}*/}
                {/*        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}*/}

                {/*    >*/}
                {/*        <Picker.Item label="ambassadeur" value="ambassadeur" />*/}
                {/*        <Picker.Item label="utilisateur" value="utilisateur" />*/}
                {/*        <Picker.Item label="Administrateur" value="Administrateur" />*/}

                {/*    </Picker>*/}
                {/*</View>*/}


                <Text style={styles.subtitle}>Centres d'intérets</Text>
                <View style={styles.centreInteret}>

                    <Centre_Interet type='1'/>
                    <Centre_Interet type='2'/>
                    <Centre_Interet type='3'/>
                    <Centre_Interet type='4'/>
                    <Centre_Interet type='5'/>
                    <Centre_Interet type='6'/>
                    <Centre_Interet type='7'/>
                    <Centre_Interet type='8'/>
                    <Centre_Interet type='9'/>
                    <Centre_Interet type='10'/>
                </View>

                <View style={styles.buttons}>
                    <MyButton
                        backgroundColor='#FFFFFF'
                        width = {144}
                        height = {48}
                        color = '#3E3E3E'
                        fontSize ='16'
                        content='Déconnexion'
                        marginRight={15}
                    />
                    <MyButton backgroundColor='#407BBC' width = {144} height = {48} color = '#FCFCFC' fontSize ='16' content='Enregistrer'/>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#77B5FE',
    },
    scrollingPage:{
        paddingVertical:31
    },

    centreInteret:{
        marginLeft: 15,
        marginRight: 15,
        marginTop:10,
        marginBottom:30,
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center"
    },

    subtitle:{
        fontSize:16,
        textAlign:"left",
        marginLeft:30,
        color:'#000'
    },
    subtitleIdentity:{
        fontSize:16,
        textAlign:"left",
        marginLeft:21,
        color:'#000'
    },
    buttons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        marginRight:24,
    },
    button:{
        marginHorizontal:10
    },
    input:{
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginLeft:30,
        marginRight:19,
        marginTop:5,
        height:46,
        // width:window.innerWidth - 49,
        // width:'87%',
        width:300,
        // borderStyle:"solid",
        borderWidth:1,
        // borderColor:'#707070',
        borderRadius:5,
    },
    img:{
        // padding: 10,
        width:20,
        height:20,
        marginRight:17
    },
    inputText:{
        display:"flex",
        paddingStart:13,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#000000',
        opacity:50,
        // borderStyle:"solid",
        borderRadius:5,
        fontWeight:"bold",

    },
    nomPrenom:{
        display:"flex",
        flexDirection:"column",

    },
    identity:{
        display:"flex",
        flexDirection:"row",

    },
    imageProfil:{
        height:130,
        width:130,
        borderRadius:50,
        marginLeft:30,
        justifyContent:"center"
    },
    inputIdentity:{
        // flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginLeft:21,
        marginRight:19,
        marginTop:5,
        height:46,
        // width:window.innerWidth/2 - 24,
        // width:202,
        // width:'60%',
        width:150,

        // borderStyle:"solid",
        borderWidth:1,
        borderColor:'#707070',
        borderRadius:5,

    },
    inputTextIdentity:{
        paddingStart:13,
        flex: 1,
        paddingTop: 11,
        paddingRight: 10,
        paddingBottom: 11,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#000000',
        opacity:50,
        // borderStyle:"solid",
        borderRadius:5,
        fontWeight:"bold",
        // width:'100%'
        width:100
    },
    langueContainer:{
        marginLeft:30,
        marginVertical:12,
        display:"flex",
        flexDirection:"row",
    },
    selectList:{
        display:"flex",
        paddingStart:13,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#000000',
        // opacity:50,
        // borderStyle:"solid",
        borderRadius:5,
        fontWeight:"bold",
        borderColor:'#000',
        borderWidth:1,
        width:300,
        height:46,
        marginLeft:30,
    }

})  