import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../../ApnaVayypaar/screens/HomeScreen';
import SettingsScreen from '../../ApnaVayypaar/screens/SettingsScreen';
import SplashScreen from '../../ApnaVayypaar/screens/SplashScreen'
import SelectStoneScreen from '../../ApnaVayypaar/screens/SelectStoneScreen'
import { Stack } from 'expo-router';
import SheetScreen from '../../ApnaVayypaar/screens/SheetScreen'
import Form from '../../ApnaVayypaar/screens/Form';
import AllSheetsScreen from '../../ApnaVayypaar/screens/AllSheetsScreen';
import  SheetDeatilScreen from '../../ApnaVayypaar/screens/SheetScreen';
import SheetPage from '../../ApnaVayypaar/screens/SheetPage'
const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator>
     <Tab.Screen name="SelectStone" component={SplashScreen} />
      {/* <Tab.Screen name="Home1" component={HomeScreen} /> */}
      <Tab.Screen name="Home2" component={SelectStoneScreen} />
      <Tab.Screen name="Sheets" component={SheetScreen} />
      <Tab.Screen name="Form" component={Form} />
      <Tab.Screen name="SheetDetail" component={SheetDeatilScreen} />
      <Tab.Screen name='AllSheets' component={AllSheetsScreen}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Sheet" component={SheetPage} />
    </Tab.Navigator>
    
  );
}
// app/_layout.tsx


