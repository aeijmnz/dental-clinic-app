import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './navigation/Navigator';
import Messages from './screens/Messages';
import Schedule from './screens/Schedule';
import { render } from 'react-dom';
import Home from './screens/Home';
import HomeTabs from './navigation/HomeTabs';

  // const { params } = route;

  // const [user, setUser] = useState(null);

  // const userInfo = route.params?.userData ? route.params.userData : null


const App = () => {

  return (
    <NavigationContainer>
      {/* <NestedNavi/> */}
      <Navigator/> 
    </NavigationContainer>
  );
}
export default App;







import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './navigation/Navigator';
import HomeTabs from './navigation/HomeTabs';


import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Home from './screens/Home';
import Messages from './screens/Messages';
import Schedule from './screens/Schedule';
import AddAppointmentScreen from './screens/AddAppointmentScreen';
import RescheduleScreen from './screens/RescheduleScreen';
import UserAccountScreen from './screens/UserAccountScreen';



import { render } from 'react-dom';
import { AuthContext } from './components/Context';

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
  const { state } = React.useContext(AuthContext);
  console.log(state)
 
    <NavigationContainer>
      <AppStack.Navigator>
        {state.token === null ? (<>
          <AppStack.Screen name="Auth"
            component={AuthFlow}
            options={{ header: () => null }}
          />
        </>
        ) : (
        <AppStack.Screen name="Home"
          component={HomeFlow}
          options={{ header: () => null }}
        />
        )}
     </AppStack.Navigator>
    </NavigationContainer>
  );

  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
export default App;

