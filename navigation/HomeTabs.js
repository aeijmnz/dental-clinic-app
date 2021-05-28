import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import Icon from '@expo/vector-icons/AntDesign';

import AddAppointmentScreen from '../screens/AddAppointmentScreen';
import Home from '../screens/Home';
import UserAccountScreen from '../screens/UserAccountScreen';
import Messages from '../screens/Messages';
import Schedule from '../screens/Schedule';
import RescheduleScreen from '../screens/RescheduleScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screens/SignInScreen'
import About from '../screens/About';

import firebase from "firebase";


//stack
const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation, route }) => {

    const { params } = route;

    const [user, setUser] = useState(null);

    const userInfo = route.params?.userData ? route.params.userData : null;

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} initialParams={{ userData: userInfo }} options={{ header: () => null }} />
            <HomeStack.Screen name="Reschedule" component={RescheduleScreen} options={{ header: () => null }} />
        </HomeStack.Navigator>
    );
}

const UserAccountStack = createStackNavigator();
const UserAccountStackScreen= ({ navigation, route }) => {

    const { params } = route;

    const [user, setUser] = useState(null);

    const userInfo = route.params?.userData ? route.params.userData : null;
    return (
      <UserAccountStack.Navigator>
        <UserAccountStack.Screen name="Schedule" component={UserAccountScreen}  initialParams={{ userData: userInfo }} options={{ header: () => null }}/>
        <UserAccountStack.Screen name="About" component={About}  initialParams={{ userData: userInfo }} options={{ header: () => null }}/>
      </UserAccountStack.Navigator>
    );
  }

//tab
const Tab = createBottomTabNavigator();

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

const HomeTabs = ({ navigation, route }) => {


    const { params } = route;

    const [user, setUser] = useState(null);

    const userInfo = route.params?.userData ? route.params.userData : null;
    // const userInfo = route.params?.userData ? route.params.userData : null;
    
    console.log("user info", userInfo);
    useEffect(() => {
        if (params) {
            const { userData } = params;
            if (userData) {
                console.log("ano ba laman mo userdata hometabs-?", userData);
                setUser(userData);
            }
        }
    }, [])

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

                    //try shadow soon

                }
            }}>
            {/* <Tab.Screen name="Home" component={Home} initialParams={{userData: userInfo}} options={{
                tabBarIcon: ({ focused, }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon
                            name="home"
                            size={30}
                            color={focused ? '#27b2c9' : 'gray'}
                        />
                    </View>),
            }}
            /> */}

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
                        source={require('../assets/img_src/addApp.png')}
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



            <Tab.Screen name="UserAccountScreen" component={UserAccountStackScreen} initialParams={{ userData: userInfo }} options={{
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

    );
}

export default HomeTabs
