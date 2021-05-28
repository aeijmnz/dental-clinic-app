//From Sir Joy 

import firebase from "firebase";
import "firebase/firestore";
import { firebaseConfig } from './firebaseConfig';
import "firebase/auth";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export const auth = firebase.auth()
export const saveAUser = async (user) => {


    const returnData = {
        code: 404,
        message: 'Saving not successful',
        result: null

    }
    // const result = db.collection('users').add(user);
    const result = db.collection('users').doc(user.uid).set({user}, {merge: true});

    if (result) {
        returnData.code = 200;
        returnData.message = "Saving is successful"
        returnData.result = result;
    }

    return returnData;
}

export const retrieveAUser = async (user) => {
    const retrievedUser = {
        uid: null,
        family_name: null,
        given_name: null,
        // displayName: family_name + given_name,
    }

    await db.collection('users')
        .doc(user.id)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                retrievedUser.uid = documentSnapshot.id,
                    retrievedUser.family_name = documentSnapshot.data().family_name,
                    retrievedUser.given_name = documentSnapshot.data().given_name
            }
            
        })

    return retrievedUser;
}

export const saveAppoinment = async (appointment) => {


    const returnData = {
        code: 404,
        message: 'Saving not successful',
        result: null

    }
    // const result = db.collection('users').add(user);
    const result = db.collection('appointments').doc(appointment.patientInfo.uid).collection('patient_appointment').add(appointment)

    if (result) {
        returnData.code = 200;
        returnData.message = "Saving is successful"
        returnData.result = result;
    }

    return returnData;
}


// export const updateAppoinment = async (appointment) => {


//     const returnData = {
//         code: 404,
//         message: 'Saving not successful',
//         result: null

//     }
//     // const result = db.collection('users').add(user);
//     const result = db.collection('appointments').doc(appointment.patientInfo.uid).collection('patient_appointment').doc(patient_appointment).set(appointment)

//     if (result) {
//         returnData.code = 200;
//         returnData.message = "Saving is successful"
//         returnData.result = result;
//     }

//     return returnData;
// }
