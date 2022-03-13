import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet } from "react-native";

// import composents
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import HelpNavigation from "./HelpNavigation";
import SettingsScreen from "../screens/SettingsScreen";

const TabNav = createBottomTabNavigator();

export default function BottomNavigation() {
    return(
      <TabNav.Navigator 
        screenOptions = {{
          headerShown: false,
          tabBarShowLabel: false       
        }}
      >
        <TabNav.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('../../assets/icons/android/4x/homexxxhdpi.png')}/>
            </View>
          )
        }}          
        />
        <TabNav.Screen name="SearchScreen" component={SearchScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('../../assets/icons/android/4x/searchxxxhdpi.png')}/>
            </View>
          )
        }}       
        />
        <TabNav.Screen name="HelpNavigation"  component={HelpNavigation} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('../../assets/icons/android/4x/helpsxxxhdpi.png')}/>
            </View>
          )
        }}
        />
        <TabNav.Screen name="SettingsScreen" component={SettingsScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image style={styles.iconTabBar} resizeMode='contain' source={require('../../assets/icons/android/4x/profilxxxhdpi.png')}/>
            </View>
          )
        }}       
        />
      </TabNav.Navigator>
    )
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
