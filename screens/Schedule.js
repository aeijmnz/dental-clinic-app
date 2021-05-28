import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
// import {Card, Avatar} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/AntDesign';


const Schedule = () => {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient colors={['#27b2c9', '#27b2c9', '#0e95c5',]} style={styles.linearGradient}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Image
              source={require('../assets/img_src/exoldc-og.png')}
              style={styles.mainLogo} />
            <Text style={styles.headertext}>EXO-LUCENT{"\n"}Dental Clinic</Text>
          </View>

          <View>
            <Text style={styles.subtitle}>Calendar</Text>


          </View>
        </LinearGradient>
      </View>
      <View style={{ marginTop: 180 }}>


        <View>

          <Calendar
          style={{height: 200}}
            theme={{
              monthTextColor: 'gray',
              textMonthFontFamily: 'Berlin-Bold',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 14,
              textMonthFontSize: 20,
            }}
            onDayPress={(day) => { console.log('selected day', day) }}
            onDayLongPress={(day) => { console.log('selected day', day) }}
            monthFormat={'MMMM'}
            onMonthChange={(month) => { console.log('month changed', month) }}
            hideExtraDays={false}
            disableMonthChange={false}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableAllTouchEventsForDisabledDays={true}
            enableSwipeMonths={true}
          />
        </View>
      </View>

    </View>
  )
}

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#27b2c9',
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: '#27b2c9',
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: 'couture-bld',
    paddingVertical: 2,
    paddingBottom: 10,
    marginTop: 23
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
});