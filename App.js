import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import des écrans
import ConnexionScreen from './src/screens/ConnexionScreen';
import MessageScreen from './src/screens/MessageScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigation/BottomNavigation';
import CreationCompteScreen from './src/screens/CreationCompteScreen';
import EventScreen from "./src/screens/EventScreen";
import ProfilDescriptionScreen from "./src/screens/ProfilDescriptionScreen"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ConnexionScreen" component={ConnexionScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CreationCompteScreen" component={CreationCompteScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={BottomNavigation} options={{headerShown: false}}/>
        <Stack.Screen name="MessageScreen" component={MessageScreen}/>
        <Stack.Screen name="EventScreen" component={EventScreen}/>
        <Stack.Screen name="ProfilDescriptionScreen" component={ProfilDescriptionScreen}/>
        <Stack.Screen name="Messages" component={MessageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}