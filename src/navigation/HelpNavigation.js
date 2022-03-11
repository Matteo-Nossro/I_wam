import CreateStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

// import composents
import TransportScreen from "../screens/TransportScreen";
import FAQScreen from "../screens/FAQScreen";
import LoisirsScreen from "../screens/LoisirsScreen";
import DocumentsScreen from "../screens/DocumentsScreen.js";
import HelpScreen from "../screens/HelpScreen";

const Stack = CreateStackNavigator();

export default function HelpNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HelpScreen" component={HelpScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Transport" component={TransportScreen}/>
            <Stack.Screen name="FAQ" component={FAQScreen}/>
            <Stack.Screen name="Loisirs" component={LoisirsScreen}/>
            <Stack.Screen name="Documents" component={DocumentsScreen}/>
        </Stack.Navigator>
    )
}