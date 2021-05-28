import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { SocialIcon } from 'react-native-elements';

import firebase from "firebase";
import { firebaseConfig } from '../firebase/firebaseConfig';
import { retrieveAUser, saveAUser } from '../firebase/firebaseHelper';
import { SafeAreaView } from 'react-native-safe-area-context';
import FacebookSignIn from './SignIn/FacebookSignIn';
import GoogleSignIn from './SignIn/GoogleSignIn';

const SignInScreen = ({ navigation }) => {

  const [fontLoaded, setfontLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({ password: '', secureTextEntry: true, });
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

  //under construction
  const onPressHandler = () => {
    navigation.navigate('Home')
  }

  const signIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password.password)
      console.log("email checking", user);
        .then(user => {
          console.log("email signin", user);
          let userData = {
            email: firebase.auth().currentUser.email,
            uid: firebase.auth().currentUser.uid,
            lastLoginAt: new Date().toString(),
            family_name: retrieveAUser().retrievedUser.family_name,
            given_name: firebase.auth().currentUser.givenName,
            userType: 'Patient'
          }
          console.log("userdata", userData)
          navigation.navigate("Home", { userData: userData });
        })
      navigation.navigate("Home");
      // console.log("userdata", userData)
    } catch (err) {
      setError(err.message);
    }
  }



  const onSignUpPressHandler = () => {
    navigation.navigate('SignUpScreen')
  }

  const onFacebookSignInPressHandler = () => {
    // <FacebookSignIn/>
    navigation.navigate('FacebookSignIn')
    // {FacebookSignIn}
  }



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.container}> */}
        <StatusBar backgroundColor='#27b2c9' barStyle="light-content" />

        <View style={styles.header}>
          <Image
            source={require('../assets/img_src/exoldc-og.png')}
            style={styles.mainLogo}
          />
          <Text style={styles.headertext}>EXO-LUCENT</Text>
          <Text style={styles.headersubtext}>Dental Clinic</Text>
          <Text style={styles.text}> Create an account not seen</Text>

          <View style={styles.borderStyle}>
            <Icon name="mail" color="#ffff" size={24} />
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#0e95c5"
              onChangeText={setEmail}
              //onChangeText={(email) => textInputChange(email)}
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

          <View>
            <TouchableOpacity>
              <Text style={[styles.subtext, { color: '#0e95c5', marginTop: 4 }]}> Forgot Password? </Text>
            </TouchableOpacity>
          </View>



          <TouchableOpacity
            onPress={signIn}>
            <View style={styles.borderSignIn}>
              <Text style={styles.signIn}> Sign In </Text>
            </View>
          </TouchableOpacity>

          <FacebookSignIn navigation={navigation} />
          
          <GoogleSignIn navigation={navigation} />
          
          <Button
            onPress={onPressHandler}
            title="Shortcut home"
            color="#27b2c9"
          />

          <TouchableOpacity
            onPress={onSignUpPressHandler}>
            <View style={ {marginVertical: 35, marginTop: 25 }}>
              <Text style={styles.signIn2}>Don't have an acount? SIGN UP</Text>
            </View>
          </TouchableOpacity>



        </View>

        {/* </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignInScreen

const loadFonts = async () => {
  return Font.loadAsync({
    'BEBAS___': require('../assets/fonts/BEBAS___.ttf'),
    'Barlow-Regular': require('../assets/fonts/Barlow-Regular.ttf'),
    'Barlow-Medium': require('../assets/fonts/Barlow-Medium.ttf'),
    'Barlow-Bold': require('../assets/fonts/Barlow-Bold.ttf'),
    'Berlin': require('../assets/fonts/Berlin.ttf'),
    'Berlin-Bold': require('../assets/fonts/Berlin-Bold.ttf'),
    'BerlinX-Bold': require('../assets/fonts/BerlinX-Bold.ttf'),
    'couture-bld': require('../assets/fonts/couture-bld.otf'),
    'BebasKai-Regular': require('../assets/fonts/BebasKai-Regular.otf'),
    'TitlingGothicFBExt-Med': require('../assets/fonts/TitlingGothicFBExt-Med.otf'),
    'Aviex_Sans': require('../assets/fonts/Aviex_Sans.ttf'),
    'Metropolis-Regular': require('../assets/fonts/Metropolis-Regular.otf'),
    'Metropolis-Medium': require('../assets/fonts/Metropolis-Medium.otf'),
    'Metropolis-SemiBold': require('../assets/fonts/Metropolis-SemiBold.otf'),
    'Metropolis-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
    'Taken-by-Vultures-Demo': require('../assets/fonts/Taken-by-Vultures-Demo.otf'),
    'Autography': require('../assets/fonts/Autography.otf'),
    
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27b2c9',
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mainLogo: {
    width: 200, height: 200, marginTop: 50, alignSelf: 'center'
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
    marginTop: 20,
    fontFamily: 'couture-bld'
  },
  headersubtext: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'couture-bld',
    // marginBottom: 20
  },
  subtext: {
    color: 'black',
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: 'normal',
  },
  text: {
    color: '#27b2c9',
    fontSize: 20,
    textAlign: 'center',
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
    marginHorizontal: 5,
    borderWidth: 2,
    marginTop: 15,
    paddingHorizontal: 1,
    borderColor: "#ffff",
    borderRadius: 15,
    paddingVertical: 4,
    backgroundColor: 'white',
    marginHorizontal: 35


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
    paddingVertical: 8,
    fontFamily: 'Metropolis-Bold',
  },
});