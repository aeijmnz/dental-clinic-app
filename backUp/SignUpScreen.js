import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FormInput from '../components/FormInput';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import EmailPasswordSignIn from '../components/EmailPasswordSignIn';

const SignUpScreen = ({ navigation }) => {
  const [fontLoaded, setfontLoaded] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={() => console.log("ERROR")}
        onFinish={() => { setfontLoaded(true); }}
      />
    );
  }

  const onPressHandler = () => { (navigation.navigate('Home')) }


  // const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      
        <Image
          source={require('../assets/img_src/exoldc-og.png')}
          style={styles.mainLogo}
        />

        {/* <Text style={styles.headertext}>EXO-LUCENT</Text>
        <Text style={styles.headersubtext}>Dental Clinic</Text> */}
        <Text style={styles.headersubtext}>Create an account</Text>
      
      <View>

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View>
        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />
      </View>
      <View>
        <FormInput
          labelValue={confirmPassword}
          onChangeText={(userPassword) => setConfirmPassword(userPassword)}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />
      </View>


    
    {/* /* <FormButton
      //   buttonTitle="Sign Up"
      //   onPress={() => register(email, password)}
      // /> */} 

<TouchableOpacity
  onPress={(onPressHandler)}>
  <View style={[styles.signUpContainer, { marginTop: 25 }]}>
    <Text style={styles.signUp}> Sign Up </Text>
  </View>
</TouchableOpacity>

{/* <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View> */}

    </View >
  );
};

export default SignUpScreen;

const loadFonts = async () => {
  return Font.loadAsync({
    'BEBAS___': require('../assets/fonts/BEBAS___.ttf'),
    'couture-bldit': require('../assets/fonts/couture-bldit.otf'),
    'couture-bld': require('../assets/fonts/couture-bld.otf'),
    'BebasKai-Regular': require('../assets/fonts/BebasKai-Regular.otf'),
    'TitlingGothicFBExt-Med': require('../assets/fonts/TitlingGothicFBExt-Med.otf'),
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27b2c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderStyle: {
    flexDirection: "row",
    //alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 2,
    marginTop: 15,
    paddingHorizontal: 10,
    borderBottomColor: "#ffff",
    borderTopColor: "#27b2c9",
    borderLeftColor: "#27b2c9",
    borderRightColor: "#27b2c9",
    //borderRadius: 15,
    paddingVertical: 3,
    borderBottomWidth: 2,
    //backgroundColor: 'white',
  },
  mainLogo: {
    width: 250, height: 250, alignSelf: 'center'
  },
  headertext: {
    color: '#fff',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'couture-bld'
  },
  headersubtext: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'couture-bld',
    marginBottom: 20
  },

  text: {
    fontSize: 28,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  header: {
    flex: 1,
    backgroundColor: '#27b2c9',
    //justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  headertext: {
    color: '#fff',
    fontSize: 45,
    textAlign: 'center',
    //marginTop: 10,
    fontFamily: 'couture-bld'
  },
  headersubtext: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'couture-bld',
    marginBottom: 20
  },

  signUp: {
    textAlign: 'center',
    color: '#27b2c9',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: 'couture-bld',
  },
  signUpContainer: {
    //flexDirection: "row",
    marginHorizontal: 5,
    borderWidth: 2,
    marginTop: 15,
    paddingHorizontal: 1,
    borderColor: "#ffff",
    borderRadius: 15,
    paddingVertical: 3,
    backgroundColor: 'white',


  },
});


const signUp = async () => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email,password.password)
      .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password.password)
          .then(user => {
            //console.log("facebook login ", user, user.additionalUserInfo);
            let userData = {
              email: email,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              lastLoginAt: new Date().toString(),
              family_name: familyName,
              given_name: givenName,
              uid: user.user.uid,
              userType: 'Patient'
              //photoURL: user.additionalUserInfo.profile.picture.data.url,
            }
            console.log("userdata", userData)

            saveAUser(userData);
            navigation.navigate("Home", { userData: userData });
          })
          .catch((error) => {
            console.log('Error occurred ', error)
            setLoading(false);
          });
      });
    //navigation.navigate('Home');
  } catch (err) {
    setError(err.message);
  }

}



//
const signUp = async () => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email,password.password)
      .then(user => {
        let userData = {
          email: email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastLoginAt: new Date().toString(),
          family_name: familyName,
          given_name: givenName,
          uid: user.user.uid,
          userType: 'Patient'
          //photoURL: user.additionalUserInfo.profile.picture.data.url,
        }
      
        console.log("userdata", userData)
        saveAUser(userData)
      })
        .then(() => {
          return firebase.auth().signInWithEmailAndPassword(email, password.password)
          .then(user => { (userData) = (retrieveAUser(userData))
            console.log("userdata", userData)
        navigation.navigate("Home", { userData: userData })
      })
      
    })
    .catch((error) => {
            console.log('Error occurred ', error)
            setLoading(false);
          });
    
    //navigation.navigate('Home');
  } catch (err) {
    setError(err.message);
  }

}





///////////////////////////////////////////
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { SocialIcon } from 'react-native-elements';

import firebase from "firebase";
import { firebaseConfig } from '../firebase/firebaseConfig';
import { retrieveAUser, saveAUser } from '../firebase/firebaseHelper';

import {useAuth} from '../components/AuthContext';

const SignUpScreen = ({ navigation }) => {

  //font
  const [fontLoaded, setfontLoaded] = useState(false);
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({password: '',
  secureTextEntry: true,}
  );
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');

  const [error, setError] = useState('');

  

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={() => console.log("ERROR")}
        onFinish={() => { setfontLoaded(true); }}
      />
    );
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handlePasswordInput = (password) => {
    setPassword({
      password: password,
      secureTextEntry: true,
    });
  }

  const updateSecureTextEntry = () => {
    setPassword({
      ...password,
      secureTextEntry: !password.secureTextEntry
    });
  }

  const onSignInPressHandler = () => {
    navigation.navigate('SignIn')
  }



  const signUpPress = async () => {
    try {
      const response = await signup(email,password.password)
        .then(() => {
          return login(email, password.password)
            .then(user => {
              //console.log("facebook login ", user, user.additionalUserInfo);
              let userData = {
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLoginAt: new Date().toString(),
                family_name: familyName,
                given_name: givenName,
                uid: user.user.uid,
                userType: 'Patient'
                //photoURL: user.additionalUserInfo.profile.picture.data.url,
              }
              console.log("userdata", userData)
  
              saveAUser(userData);
              navigation.navigate("Home", { userData: userData });
            })
            .catch((error) => {
              console.log('Error occurred ', error)
              setLoading(false);
            });
        });
      //navigation.navigate('Home');
    } catch (err) {
      setError(err.message);
    }
  
  }


  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >
        <ScrollView showsVerticalScrollIndicator={false}>
      {/* <View style={styles.container}> */}
        <StatusBar backgroundColor='#27b2c9' barStyle="light-content" />

        <View style={styles.mainContainer}>
          <Image
            source={require('../assets/img_src/exoldc-og.png')}
            style={styles.mainLogo}
          />

          <Text style={styles.headertext}>EXO-LUCENT</Text>
          <Text style={styles.headersubtext}>Dental Clinic</Text>
          <Text style={styles.text}> Create an account</Text>

          <View style={styles.borderStyle}>
            <Icon name="user" color="#ffff" size={24} />
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#0e95c5"
              keyboardType='email-address'
              onChangeText={setGivenName}
              style={styles.subtext} />
          </View>
          <View style={styles.borderStyle}>
            <Icon name="mail" color="#27b2c9" size={24} />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#0e95c5"
              keyboardType='email-address'
              onChangeText={setFamilyName}
              style={styles.subtext} />
          </View>


          <View style={styles.borderStyle}>
            <Icon name="mail" color="#ffff" size={24} />
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#0e95c5"
              keyboardType='email-address'
              onChangeText={setEmail}

              style={styles.subtext} />
          </View>
          <View>
            {error ?
              <Text style={{ color: 'red' }}>{error}</Text>
              : null}
          </View>

          <View style={styles.borderStyle}>
            <Icon name="lock" color="#ffff" size={24} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#0e95c5"
              secureTextEntry={password.secureTextEntry ? true : false}
              //onChangeText={(password) => setPassword(password)}
              onChangeText={(password) => handlePasswordInput(password)}
              style={styles.subtext} />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              {password.secureTextEntry ?
                <Feather
                  name="eye-off"
                  color="#ffff"
                  size={15}

                />
                :
                <Feather
                  name="eye"
                  color="#ffff"
                  //color="#0e95c5"
                  size={15}
                />
              }
            </TouchableOpacity>
          </View>


          <TouchableOpacity
            onPress={signUpPress}>
            <View style={[styles.borderSignIn, { marginTop: 25 }]}>
              <Text style={styles.signIn}> Sign Up </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onSignInPressHandler}>
            <View style={ {marginVertical: 35, marginTop: 15, }}>
              <Text style={styles.signIn2}>SIGN IN</Text>
            </View>
          </TouchableOpacity>




        </View>
      {/* </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpScreen

const loadFonts = async () => {
  return Font.loadAsync({
    'BEBAS___': require('../assets/fonts/BEBAS___.ttf'),
    'couture-bldit': require('../assets/fonts/couture-bldit.otf'),
    'couture-bld': require('../assets/fonts/couture-bld.otf'),
    'BebasKai-Regular': require('../assets/fonts/BebasKai-Regular.otf'),
    'TitlingGothicFBExt-Med': require('../assets/fonts/TitlingGothicFBExt-Med.otf'),
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27b2c9',
    paddingHorizontal: 20
  },

  mainLogo: {
    width: 200, height: 200, marginTop: 50, alignSelf: 'center'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#27b2c9',
    //justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  headertext: {
    color: '#fff',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'couture-bld'
  },
  headersubtext: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'couture-bld',
    marginBottom: 20
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'couture-bld',
    marginBottom: 20
  },
  subtext: {
    color: 'black',
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: 'normal',
  },
  borderStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 2,
    marginTop: 15,
    paddingHorizontal: 10,
    borderBottomColor: "#ffff",
    borderTopColor: "#27b2c9",
    borderLeftColor: "#27b2c9",
    borderRightColor: "#27b2c9",
    //borderRadius: 15,
    paddingVertical: 3,
    borderBottomWidth: 2,
    //backgroundColor: 'white',
  },
  borderSignIn: {
    //flexDirection: "row",
    marginHorizontal: 35,
    borderWidth: 2,
    marginTop: 15,
    paddingHorizontal: 1,
    borderColor: "#ffff",
    borderRadius: 15,
    paddingVertical: 3,
    backgroundColor: 'white',

  },
  signIn: {
    textAlign: 'center',
    color: '#27b2c9',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: 'couture-bld',
  },
  signIn2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: 'Metropolis-Bold',
    paddingVertical: 4,
  },
});