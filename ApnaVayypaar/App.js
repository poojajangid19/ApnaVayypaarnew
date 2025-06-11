// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from './screens/SplashScreen';
// import SelectStoneScreen from './screens/SelectStoneScreen';
// import FormScreen from './screens/Form'; // if you have it
// import SettingsScreen from './screens/Settings'; // optional

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="SelectStone" component={SelectStoneScreen} />
//         <Stack.Screen name="Form" component={FormScreen} />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React, { useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View, ActivityIndicator } from 'react-native';
// import AppNavigator from './AppNavigator'; // Your navigation setup
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import SelectStoneScreen from './screens/SelectStoneScreen';
import FormScreen from './screens/Form'; // if you have it
import SettingsScreen from './screens/Settings'; // optional
import AllSheetsScreen from './screens/AllSheetsScreen';
import SheetDetailScreen from './screens/SheetDetailScreen';
import SheetPage from './SheetPage';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    // Simulate loading
    const loadApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3 seconds wait
      setIsReady(true);
    };
    loadApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null; // Or use a loader
  }
  const Stack = createNativeStackNavigator();


    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home2" component={SelectStoneScreen} />
          <Stack.Screen name="Form" component={FormScreen} />
          <Stack.Screen name="SheetDetail" component={SheetDetailScreen}/>
          <Stack.Screen name='AllSheets' component={AllSheetsScreen}/>
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Sheet" component={SheetPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  
 
}
