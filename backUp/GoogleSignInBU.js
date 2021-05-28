import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import firebase from "firebase";
import 'firebase/auth';
import { firebaseConfig } from '../../firebase/firebaseConfig';

const auth = firebase.auth()

class GoogleLogIn extends Component {
// const GoogleSignIn = () => {
    onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        })
        .catch((error) => {
            console.log(error);
        })
    }
render () {
    return (

        <View style={styles.container}>
            <Text style={styles.default}>
                Google </Text>
        <Button
            onClick ={this.onSubmit}
            title="sgn out"
            color="blue"
          />
        </View>
    )
}}
export default GoogleLogIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //backgroundColor: '#27b2c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});