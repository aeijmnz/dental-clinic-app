import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, createSwitchNavigator } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './navigation/Navigator';
import Messages from './screens/Messages';
import Schedule from './screens/Schedule';
import { render } from 'react-dom';
import Home from './screens/Home';
import HomeTabs from './navigation/HomeTabs';

import { AuthProvider } from "./components/AuthContext";
import { LogBox } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

  
const App = () => {

  return (
    <AuthProvider> 
    <NavigationContainer>
      <Navigator/> 
    </NavigationContainer>
    </AuthProvider>
  );
}
export default App

