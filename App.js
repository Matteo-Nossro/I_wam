import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


// import de composents
import HomeScreen from "./src/screens/HomeScreen";
import FAQScreen from "./src/screens/FAQScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import HomeNavigation from "./src/navigation/HomeNavigation";

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <TabNav.Navigator screenOptions = {{headerShown: false}}>

          <TabNav.Screen name="Home" component={HomeScreen}/>
          <TabNav.Screen name="FAQScreen" component={FAQScreen}/>
          <TabNav.Screen name="SettingsScreen" component={SettingsScreen}/>
        </TabNav.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
