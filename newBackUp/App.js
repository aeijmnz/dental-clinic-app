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

const NestedStack = createStackNavigator();
const NestedNavi  = ({ navigation, route }) => {

  // const { params } = route;

  // const [user, setUser] = useState(null);

  // const userInfo = route.params?.userData ? route.params.userData : null;

  return (
    <NestedStack.Navigator>
      <NestedStack.Screen name="Navigator" component={Navigator} options={{ header: () => null }}/>
      <NestedStack.Screen name="HomeTabs" component={HomeTabs} options={{ header: () => null }} />
    </NestedStack.Navigator>
  );
}


const App = () => {

  return (
    <NavigationContainer>
      <NestedNavi/>
      {/* <Navigator/>  */}
    </NavigationContainer>
  );
}
export default App;



///////////////
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



