import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


// import de composents
import HomeScreen from "./src/screens/HomeScreen";
import FAQScreen from "./src/screens/FAQScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import HomeNavigation from "./src/navigation/HomeNavigation";
import SearchScreen from "./src/screens/SearchScreen";
import HelpScreen from "./src/screens/HelpScreen";

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator 
        screenOptions = {{
          headerShown: false,
          tabBarShowLabel: false       
        }}
      >
        <TabNav.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('./assets/icons/home.svg')}></Image>
            </View>
          )
        }}          
        />
        <TabNav.Screen name="SearchScreen" component={SearchScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('./assets/icons/search.svg')}></Image>
            </View>
          )
        }}       
        />
        <TabNav.Screen name="HelpScreen" component={HelpScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('./assets/icons/info.svg')}></Image>
            </View>
          )
        }}       
        />
        <TabNav.Screen name="SettingsScreen" component={SettingsScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('./assets/icons/profil.svg')}></Image>
            </View>
          )
        }}       
        />
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

  iconTabBar: {
    width: 30,
    height: 30
  }
});
