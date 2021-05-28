import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

import { SocialIcon } from 'react-native-elements';
//import { firebaseConfig } from './firebaseConfig';

// import firebase from "firebase";
//import * as firebase from "firebase/app";
//import firebase from "firebase/app";
import firebase from "firebase";
import * as Facebook from 'expo-facebook';
import { retrieveAUser, saveAUser } from '../../firebase/firebaseHelper';
import { render } from 'react-dom';

const FacebookSignInScreen = ({ navigation }) => {

    const FacebookSignIn = () => {
        const [loading, setLoading] = useState(false);


        //

        const onFacebookSignInPress = async () => {
            setLoading(true);
            try {
                await Facebook.initializeAsync({
                    appId: '1422639254769454'
                }); // enter your Facebook App Id 
                const { type,
                    token,
                    expirationDate,
                    permissions,
                    declinedPermissions, } = await Facebook.logInWithReadPermissionsAsync({
                        permissions: ['public_profile', 'email'],
                    });
                if (type === 'success') {
                    // SENDING THE TOKEN TO FIREBASE TO HANDLE AUTHyarn

                    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                    const facebookData = await response.json();
                    Alert.alert('Logged in!', `Hi ${(facebookData).name}!`);
                    console.log("facebook", facebookData);

                    const credential = firebase.auth.FacebookAuthProvider.credential(token);
                    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                        .then(() => {
                            return firebase.auth().signInWithCredential(credential)
                                .then(user => {
                                    // All   the details about user are in here returned from firebase            
                                    // console.log("fb signin", user);   
                                    console.log("facebook login ", user, user.additionalUserInfo);
                                    let userData = {
                                        provider: user.additionalUserInfo.providerId,
                                        family_name: user.additionalUserInfo.profile.last_name,
                                        given_name: user.additionalUserInfo.profile.first_name,
                                        displayName: user.additionalUserInfo.profile.name,
                                        email: user.additionalUserInfo.profile.email,
                                        lastLoginAt: new Date().toString(),
                                        photoURL: user.additionalUserInfo.profile.picture.data.url,
                                        uid: user.user.uid,
                                        userType: 'Patient'

                                    }
                                    console.log("userdata", userData)

                                    saveAUser(userData);
                                    navigation.navigate("Home", { userData: userData });
                                    // onLoginSuccess(userData);
                                    
                                })
                                .catch((error) => {
                                    console.log('Error occurred ', error)
                                    setLoading(false);
                                });
                        });


                } else {
                    // type === 'cancel'
                    setLoading(false);
                }
            } catch ({ message }) {
                alert(`Facebook Login Error: ${message}`);
            }
        }
    return(
            onFacebookSignInPress({})
            );

        // return(
        //     FacebookSignIn(onFacebookSignInPress())
        //     );
        

        //onFacebookSignInPress())
        //     FacebookSignIn()
        //         <View styles={styles.container}>

        //             <SocialIcon
        //                 title='Sign In With Facebook'
        //                 button
        //                 type='facebook'
        //                 onPress={onFacebookSignInPress}
        //             />     
        //         </View>
        // )
    }
    return( 
        FacebookSignIn()
    );
    
    
};

const styles = StyleSheet.create({

    textinput: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
        marginTop: 100

    },
    button: {
        borderColor: 'red',
        borderWidth: 5,
    },
    // container: {
    //     flex: 1,
    //     flexDirection: 'row'
    // },
    // bannerContainer: {
    //     flex: 1,
    //     height: 30
    // },
    // banner: {
    //     flex: 1,
    //     width: '100%',
    //     height: 30
    // }

});

export default FacebookSignInScreen;