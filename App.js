import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import des écrans
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import SearchScreen from "./src/screens/SearchScreen";
import HelpScreen from "./src/screens/HelpScreen";
import MessageScreen from './src/screens/MessageScreen';

import HelpNavigation from './src/navigation/HelpNavigation';

const TabNav = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('./assets/icons/android/4x/homexxxhdpi.png')}></Image>
            </View>
          )
        }}          
        />
        <TabNav.Screen name="SearchScreen" component={SearchScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('./assets/icons/android/4x/searchxxxhdpi.png')}></Image>
            </View>
          )
        }}       
        />
        <TabNav.Screen name="HelpNavigation"  component={HelpNavigation} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('./assets/icons/android/4x/helpsxxxhdpi.png')}></Image>
            </View>
          )
        }}
        />
        <TabNav.Screen name="SettingsScreen" component={SettingsScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('./assets/icons/android/4x/profilxxxhdpi.png')}></Image>
            </View>
          )
        }}       
        />
        {/* <TabNav.Screen name="MessageScreen" component={MessageScreen}/> */}
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
