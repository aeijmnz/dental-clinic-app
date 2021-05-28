import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Button, Platform, Modal, Text, TouchableOpacity, Dimensions } from 'react-native';


const OPTIONS =['Select Time', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;
const HEIGHT = Dimensions.get('screen').height;

const ModalPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }

const option = OPTIONS.map((item, index) => {
    return (
        <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}
        >
            <Text style={styles.subtitle2}> 
            {item}
            </Text>

        </TouchableOpacity>
    )

})
    return (

        <TouchableOpacity onPress={() => props.changeModalVisibility(false)}
        style={styles.container}>
        

        <View style={[styles.modal, {width: WIDTH - 40 ,height: HEIGHT/5}]}>
            <ScrollView>
                {option}
            </ScrollView>

        </View>
        </TouchableOpacity>
    )
}

export {ModalPicker}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 200,
  
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10,

    },
    subtitle2: {
        color: 'gray',
        fontSize: 16,
        alignSelf: 'center',
        margin: 20,
        // fontFamily: 'couture-bld',
        fontFamily: 'Berlin-Bold',
        // paddingVertical: 10
        //marginBottom: 20
      },
      option: {
          alignItems: 'flex-start',
      }
});