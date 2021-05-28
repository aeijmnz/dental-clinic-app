






import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';

import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import color from 'color';
DropDownPicker.setListMode("SCROLLVIEW");


const AddAppointmentScreen = ({ navigation }) => {
    const [open, setOpen] = useState(false);

    const [serviceOpen, setServiceOpen] = useState(false);
    const [timeOpen, setTimeOpen] = useState(false);
    const [value, setValue] = useState([null]);


    const [items, setItems] = useState([
        { label: 'Oral Hygiene', value: 'Oral Hygiene' },
        { label: 'Dental Treatment', value: 'Dental Treatment' },
        { label: 'Dental Implants', value: 'Dental Implants' },
        { label: 'Dental Surgery', value: 'Dental Surgery' },
        { label: 'Orthodontics', value: 'Orthodontics' },
        { label: 'Cosmetics Dentistry', value: 'Cosmetics Dentistry' },
        { label: 'Consultaion', value: 'Consultaion' },
        { label: 'Online Consultaion', value: 'Online Consultaion' },
    ]);

    
    const onServiceOpen = useCallback(() => {
        setTimeOpen(false);
    }, []);

    const onTimeOpen = useCallback(() => {
        setServiceOpen(false);
    }, []);



    return (

        <View style={styles.container}>
            <LinearGradient colors={['#27b2c9', '#27b2c9', '#0e95c5',]} style={styles.linearGradient}>
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/img_src/exoldc-colored.png')}
                            style={styles.mainLogo} />
                        <Text style={styles.headertext}>EXO-LUCENT{"\n"}Dental Clinic</Text>
                    </View>

                </View>

                <Text style={styles.subtitle}>
                    New Appointment
                </Text>



                <View style={styles.bodyContainer}>
                    <Text style={styles.subtitle0}>
                        Select atleast one service:
                </Text>
                    <DropDownPicker
                        zIndex={5000}
                        zIndexInverse={5000}
                        open={serviceOpen}
                        onOpen={onServiceOpen}
                        isVisible={timeOpen: true}
                        style={{
                            borderColor: '#27b3c9',
                            elevation: 5,
                            marginTop: 15
                        }}
                        placeholder="Select a service"
                        placeholderStyle={styles.subtitle2}
                        labelStyle={styles.subtitle2}
                        selectedItemLabelStyle={[styles.subtitle2, { color: '#27b2c9' }]}
                        selectedItemContainerStyle={{
                            backgroundColor: "#dfdfdf"
                        }}
                        multipleText="{count} service(s) have been selected"
                        // open={open}
                        multiple={true}
                        min={0}
                        max={5}
                        value={value}
                        items={items}
                        setOpen={setServiceOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />

                    <Text numberOfLines={5} style={styles.subtitle1}>
                        {value}
                    </Text>

                    <DropDownPicker
                        zIndex={5000}
                        zIndexInverse={5000}
                        open={timeOpen}
                        onOpen={onTimeOpen}
                        style={{
                            borderColor: '#27b3c9',
                            elevation: 5,
                            marginTop: 15
                        }}
                        placeholder="Select a service"
                        placeholderStyle={styles.subtitle2}
                        labelStyle={styles.subtitle2}
                        selectedItemLabelStyle={[styles.subtitle2, { color: '#27b2c9' }]}
                        selectedItemContainerStyle={{
                            backgroundColor: "#dfdfdf"
                        }}
                        multipleText="{count} service(s) have been selected"
                        // open={open}
                        multiple={true}
                        min={0}
                        max={5}
                        value={value}
                        items={items}
                        setOpen={setTimeOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />


                </View>


            </LinearGradient>

        </View >
    )
}

export default AddAppointmentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }, linearGradient: {
        flex: 1,
    },//headerpart
    headerContainer: {
        flex: 0.2,
        width: '100%',
        height: 100,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    bodyContainer: {
        flex: 0.2,
        width: '100%',
        height: 100,
        paddingLeft: 15,
        paddingRight: 15,

    },
    mainLogo: {
        width: 90, height: 90, marginTop: 40, marginLeft: 25, alignItems: 'center',
        //flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    headertext: {
        color: '#27b2c9',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 60,
        marginRight: 30,
        fontFamily: 'couture-bld',
        alignItems: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        alignItems: 'flex-start',
        alignSelf: 'center',
        fontFamily: 'couture-bld',
        paddingVertical: 10,
        marginTop: 10

        //marginBottom: 20
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
    cardContainer: {
        padding: 5,
        paddingBottom: 5,
        borderColor: 'gray',
        borderWidth: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 15,
        marginTop: 20,
        elevation: 8,
        top: -70
    },
    cardBody: {
        padding: 15,
        backgroundColor: '#fff',
        // marginTop: 2,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardBodyTop: {
        flexDirection: 'row',
    },
    cardBodyBottom: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardGroupIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardBottomTitle: {
        fontSize: 14,
        marginTop: 4,
        color: '#1f7a8c'
    },
    cardLeftSide: {
        paddingHorizontal: 10,
        flex: 1,
    },
    cardName: {
        color: '#222',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardTime: {
        color: '#222',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
    },
    cardService: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 5,
    },
    cardAvatar: {
        height: 60,
        width: 60,
        backgroundColor: 'gray',
        borderRadius: 60,
    },
    margin: {
        height: 2,
        backgroundColor: '#0e95c5',
        // width: '100%',
        top: -45,
        marginHorizontal: 15,
    },
    iconMore: {
        position: 'absolute',
        bottom: 0,
        right: 10,
    },
});