import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../../ApnaVayypaar/screens/HomeScreen';
import SettingsScreen from '../../ApnaVayypaar/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function TabLayout() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // Only one NavigationContainer should wrap your entire app
    <NavigationContainer>
      <TabLayout />
    </NavigationContainer>
  );
}
