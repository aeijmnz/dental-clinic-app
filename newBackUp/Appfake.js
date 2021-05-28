import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Navigator from './navigation/Navigator';
import HomeTabs from './navigation/HomeTabs';

import { ActivityIndicator, AsyncStorage } from "react-native";
import { AuthProvider } from "./components/AuthContext";


import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Home from './screens/Home';
import Messages from './screens/Messages';
import Schedule from './screens/Schedule';
import AddAppointmentScreen from './screens/AddAppointmentScreen';
import RescheduleScreen from './screens/RescheduleScreen';
import UserAccountScreen from './screens/UserAccountScreen';



// import { render } from 'react-dom';
// import { AuthContext } from './components/Context';
import { useAuth } from './components/AuthContext';

const AuthStack = createStackNavigator();
const AuthFlow = ({ navigation, route }) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn"
        component={SignInScreen}
        options={{ header: () => null }}
      />
      <AuthStack.Screen name="SignUp"
        component={SignUpScreen}
        options={{ header: () => null }}
      />
    </AuthStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator();
const HomeFlow = ({ navigation, route }) => {


  const CustomTabButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={{ alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}>

      <View style={{
        top: -15,
        width: 70,
        height: 70,
        borderRadius: 35,
        borderColor: 'white',
        elevation: 30,
        shadowColor: '#27b2c9',

      }}>
        {children}
      </View>

    </TouchableOpacity>
  );
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          position: 'absolute',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 60,
        }
      }}>

      <Tab.Screen name="Home" component={HomeStackScreen} initialParams={{ userData: userInfo }} options={{
        tabBarIcon: ({ focused, }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon
              name="home"
              size={30}
              color={focused ? '#27b2c9' : 'gray'}
            />
          </View>),
      }}
      />
      <Tab.Screen name="Schedule" component={Schedule} initialParams={{ userData: userInfo }} options={{
        tabBarIcon: ({ focused, }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon
              name="calendar"
              size={30}
              color={focused ? '#27b2c9' : 'gray'}
            />
          </View>),
      }} />
      <Tab.Screen name="AddAppointmentScreen" component={AddAppointmentScreen} initialParams={{ userData: userInfo }} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('./assets/img_src/addApp.png')}
            resizeMode='contain'
            style={{
              width: 60,
              height: 60,
            }}
          />
        ),
        tabBarButton: (props) => (
          <CustomTabButton {...props} />
        )
      }}
      />

      <Tab.Screen name="Messages" component={Messages} options={{
        tabBarIcon: ({ focused, }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon
              name="message1"
              size={30}
              color={focused ? '#27b2c9' : 'gray'}
            />
          </View>),
      }} />



      <Tab.Screen name="UserAccountScreen" component={UserAccountScreen} initialParams={{ userData: userInfo }} options={{
        tabBarIcon: ({ focused, }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon
              name="user"
              size={30}
              color={focused ? '#27b2c9' : 'gray'}
            />
          </View>),
      }} />
    </Tab.Navigator>

  )
}


const AppStack = createStackNavigator();
const App = () => {
  // const {login } = useAuth();
  const [loading, setLoading] = useState(true);


  // const { user, login } = useContext(AuthContext);

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
          // decode it
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
        <ActivityIndicator size="large" />
      
    );
  }
  return (
  <AuthProvider> 
    <NavigationContainer>
      <AppStack.Navigator>
        {state.token === null ? (
          <AppStack.Screen name="Auth"
            component={AuthFlow}
            options={{ header: () => null }}
          />
        ) : (
        <AppStack.Screen name="Home"
          component={HomeFlow}
          options={{ header: () => null }}
        />
        )}
     </AppStack.Navigator>
    </NavigationContainer>
    </AuthProvider> 
  )

  return (
    
      <App />
   
  )
}
export default App;

