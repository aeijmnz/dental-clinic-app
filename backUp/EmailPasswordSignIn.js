import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import firebase from "firebase/app";
import "firebase/firestore";



const EmailPasswordSignIn = (email, password) => {
    try {
        if (setPassword(password).length < 6) {
            alert("Enter atleast eight characters");
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore().collection('users').doc(auth().currentUser.uid)
                    .set({
                        email: email,
                        createdAt: firestore.Timestamp.fromDate(new Date()),
                        userImg: null,
                    })
    } catch (error) {
                console.log(error.toString())
            }
}

export default EmailPasswordSignIn