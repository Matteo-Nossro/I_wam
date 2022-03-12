import { Text, View } from "react-native";
import {useEffect, useState} from "react";
import {Api} from "../services/API";
import MonAnnonce from "../components/Annonces";

export default function FAQScreen() {

    const [questions, setQuestions] = useState([]);


    useEffect(() => {
        Api.getQuestions().then(questions =>{
            setQuestions(questions);
        });
    },[]);

    return (
        <View style= {{flex:1}}>
            <Text>FAQScreen</Text>
            <View >
                {questions.map((question) => (
                    {/*Todo : mettre le composent qui va bien
                    <nom du composant
                    question = {questions.acf.question}
                    reponse = {questions.acf.reponse}
                    />
                    */}
                ))}

            </View>
        </View>
    )
}