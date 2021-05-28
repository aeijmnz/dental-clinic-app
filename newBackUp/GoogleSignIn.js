import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { GoogleLogin } from 'react-google-login';

import firebase from "firebase";
import 'firebase/auth';
import { firebaseConfig } from '../../firebase/firebaseConfig';

import { retrieveAUser, saveAUser } from '../../firebase/firebaseHelper';

import { SocialIcon } from 'react-native-elements';

//import * as Google from 'expo-google-app-auth';

import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';

const GoogleSignIn = ({ navigation }) => {

    
      const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
          clientId: '109948228490-6shm9d1fdfildfqjnb0k7tjq9gvbdtk7.apps.googleusercontent.com',
          },
      );
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { id_token } = response.params;
          
          const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
          firebase.auth().signInWithCredential(credential)
          .then(user => {
              console.log("successful google signin, who is user", user, user.additionalUserInfo);
              let userData = {
                provider: user.additionalUserInfo.providerId,
                family_name: user.additionalUserInfo.profile.family_name,
                given_name: user.additionalUserInfo.profile.given_name,
                displayName: user.additionalUserInfo.profile.name,
                email: user.additionalUserInfo.profile.email,
                photoURL: user.additionalUserInfo.profile.picture.url,
                lastLoginAt: new Date().toString(),
                uid: user.user.uid,           
                userType: 'Patient'

            }
            console.log("userdata", userData)
            saveAUser(userData);
            navigation.navigate("Home");
          });
        }
      }, [response]);





      return (
        <View styles={styles.container}>

            <SocialIcon
                title='Sign In With Google'
                button
                type='google'
                onPress={() => {promptAsync();}}
                style={{borderRadius: 15, marginHorizontal: 35, marginTop: -2, height:45}}
            />    

        </View>
    )




}
export default GoogleSignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //backgroundColor: '#27b2c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});




  // const [loading, setLoading] = useState(false);

    // const { type, accessToken, user } = await Google.logInAsync({
    //     iosClientId: `<YOUR_IOS_CLIENT_ID_FOR_EXPO>`,
    //     androidClientId: `<YOUR_ANDROID_CLIENT_ID_FOR_EXPO>`,
    //     iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
    //     androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
    //   });
      
    //   if (type === 'success') {
    //     /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
    //     console.log(user);
    //   }
