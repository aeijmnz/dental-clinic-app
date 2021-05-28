import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import Icon from '@expo/vector-icons/AntDesign';

import AddAppointmentScreen from '../screens/AddAppointmentScreen';
import Home from '../screens/Home';
import UserAccountScreen from '../screens/UserAccountScreen';
import Sample from '../screens/Sample';
import Schedule from '../screens/Schedule';

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

const HomeTabs = () => {
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
            <Tab.Screen name="Home" component={Home} options={{
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
             <Tab.Screen name="Schedule" component={Schedule} options={{
                tabBarIcon: ({ focused, }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon
                            name="calendar"
                            size={30}
                            color={focused ? '#27b2c9' : 'gray'}
                        />
                    </View>),
            }} />
            <Tab.Screen name="AddAppointmentScreen" component={AddAppointmentScreen} options={{
                tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/img_src/addApp.png')}
                            resizeMode= 'contain'
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
                    
            <Tab.Screen name="Sample" component={Sample} options={{
                tabBarIcon: ({ focused, }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon
                            name="home"
                            size={30}
                            color={focused ? '#27b2c9' : 'gray'}
                        />
                    </View>),
            }} />
    

           
            <Tab.Screen name="UserAccountScreen" component={UserAccountScreen} options={{
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
