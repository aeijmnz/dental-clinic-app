import React, { useState } from 'react';
import { View, Text, Image, Button, StatusBar, Platform, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { ModalPicker } from '../components/ModalPicker';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/AntDesign';
import { Searchbar } from 'react-native-paper';




const Messages = ({ navigation }) => {

  const [search, setSearch] = useState('');
  const onChangeSearch = () => setSearch(search);

  return (
    <View style={styles.container}>
      <StatusBar
        // barStyle="dark-content"
        backgroundColor="#27b2c9"
      />
      <View style={styles.headerContainer}>
        <LinearGradient colors={['#27b2c9', '#27b2c9', '#0e95c5',]} style={styles.linearGradient}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Image
              source={require('../assets/img_src/exoldc-og.png')}
              style={styles.mainLogo} />
            <Text style={styles.headertext}>EXO-LUCENT{"\n"}Dental Clinic</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
            <Text style={styles.subtitle}>Messages</Text>
            
            <View style={{ marginLeft: 200}}>
              <Icon
            name="plus"
            size={30}
            color={'#27b2c9'}
            style={{ marginTop: 25}}
          />
          </View>
            
          </View>
        </LinearGradient>
      </View>
      <View style={styles.bodyContainer}>
      
          
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={search}
          style={{ borderRadius: 15, paddingRight: 100 }}
        />
      </View>






    </View >
  )
}
export default Messages


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  //headerpart
  headerContainer: {
    // flex: 0.25,
    width: '100%',
    height: 150,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
  },
  bodyContainer: {
    flex: 1,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'absolute',
    marginTop: 190
  },
  timeContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 15
  },
  mainLogo: {
    width: 90, height: 90, marginTop: 40, marginLeft: 25, alignItems: 'center',
    //flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
  },
  headertext: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 60,
    marginRight: 30,
    fontFamily: 'couture-bld',
    alignItems: 'center',
  },
  selectedContainer: {
    alignItems: 'center',
    textAlign: 'center',

  },
  selectDateContainer: {
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderColor: '#27b3c9',
    elevation: 8,
    paddingVertical: 12,
    borderRadius: 5
  },
  subtitle: {
    color: '#27b2c9',
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: 'couture-bld',
    paddingVertical: 2,
    paddingBottom: 10,
    marginTop: 30
  },
  subtitle0: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Berlin-Bold',
    marginTop: 10,
    textAlign: 'left'
  },
  subtitle1: {
    color: 'white',
    fontSize: 20,
    alignItems: 'flex-start',
    alignSelf: 'center',
    fontFamily: 'Berlin-Bold',
    paddingVertical: 10,
    marginTop: 10

    //marginBottom: 20
  },
  subtitle2: {
    color: 'gray',
    fontSize: 17,
    alignSelf: 'center',
    // fontFamily: 'couture-bld',
    fontFamily: 'Berlin-Bold',
    // paddingVertical: 10
    //marginBottom: 20
  },
  subtext: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    fontFamily: 'normal',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text: {
    color: '#27b2c9',
    fontSize: 20,
    textAlign: 'center',
  },

  //cards
  // cardContainer: {
  //   padding: 5,
  //   paddingBottom: 5,
  //   borderColor: 'gray',
  //   borderWidth: 0,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   marginHorizontal: 15,
  //   marginTop: 20,
  //   elevation: 8,
  //   top: -70
  // },
  // cardBody: {
  //   padding: 15,
  //   backgroundColor: '#fff',
  //   // marginTop: 2,
  //   borderRadius: 10,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 4,
  // },
  // cardBodyTop: {
  //   flexDirection: 'row',
  // },
  // cardBodyBottom: {
  //   marginTop: 8,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  // },
  // cardGroupIcon: {
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // cardBottomTitle: {
  //   fontSize: 14,
  //   marginTop: 4,
  //   color: '#1f7a8c'
  // },
  // cardLeftSide: {
  //   paddingHorizontal: 10,
  //   flex: 1,
  // },
  // cardName: {
  //   color: '#222',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  // cardTime: {
  //   color: '#222',
  //   fontSize: 16,
  //   fontWeight: '500',
  //   marginTop: 5,
  // },
  // cardService: {
  //   color: 'gray',
  //   fontSize: 15,
  //   fontWeight: '500',
  //   marginTop: 5,
  // },
  // cardAvatar: {
  //   height: 60,
  //   width: 60,
  //   backgroundColor: 'gray',
  //   borderRadius: 60,
  // },
  // margin: {
  //   height: 2,
  //   backgroundColor: '#0e95c5',
  //   // width: '100%',
  //   top: -45,
  //   marginHorizontal: 15,
  // },
  // iconMore: {
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 10,
  // },
});