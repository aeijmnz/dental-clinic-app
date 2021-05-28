import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from "firebase";
import * as Facebook from 'expo-facebook';
// import firebase from "firebase/app";
import { firebaseConfig } from '../firebase/firebaseConfig';

import SignInScreen from '../screens/SignInScreen';
import FacebookSignIn from '../screens/SignIn/FacebookSignIn';
import SignUpScreen from '../screens/SignUpScreen';
import AddAppointmentScreen from '../screens/AddAppointmentScreen';
import HomeTabs from './HomeTabs';
import Home from '../screens/Home';
import UserAccountScreen from '../screens/UserAccountScreen';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const StackNavigator = ({navigation, route}) => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ header: () => null }}
      />
      
      {/* <Stack.Screen name="Home" component={HomeTabs} options={{
        header: () => null,
      }} />  */}
    </Stack.Navigator>
  );
}

const MainStack = createStackNavigator();
  const MainStackNavi  = ({navigation, route}) => {
      return (
        <MainStack.Navigator initialRouteName="Auth">
          <MainStack.Screen name="Auth" component={StackNavigator} options={{ header: () => null }}/>
          <MainStack.Screen name="Home" component={HomeTabs} options={{ header: () => null }}/>
        </MainStack.Navigator>
      );
    }
  


export default MainStackNavi