import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import InwardsScreen from './screens/InwardsScreen';
import UpdateLocationScreen from './screens/UpdateLocationScreen';
import LogHistoryScreen from './screens/LogHistoryScreen';
import AuthScreen from './screens/AuthScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import DispatchScreen from './screens/DispatchScreen';
import SubscribeScreen from './screens/SubscribeScreen';
import Admindashboard from './screens/Admindashboard';
import AdminDashboardWeb from './screens/AdminDashboardWeb' ;

// Create a stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {/* Define all your screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InwardsScreen" component={InwardsScreen} />
        <Stack.Screen name="UpdateLocationScreen" component={UpdateLocationScreen} />
        <Stack.Screen name="LogHistoryScreen" component={LogHistoryScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="SubscribeScreen" component={SubscribeScreen} />
        <Stack.Screen name="DispatchScreen" component={DispatchScreen} />
        <Stack.Screen name="Admindashboard" component={Admindashboard} />
        <Stack.Screen name= "AdminDashboardWeb" component={AdminDashboardWeb} />
              </Stack.Navigator>
    </NavigationContainer>
  );
}
