import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Avatar, Image, StatusBar, Alert, SafeAreaView, ScrollView, Touchable } from 'react-native';
import { Button } from 'react-native-elements'
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';


import DateTimePicker from '@react-native-community/datetimepicker';
import { ModalPicker } from '../components/ModalPicker';




import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import color from 'color';
import { List } from 'react-native-paper';
import { event } from 'react-native-reanimated';

DropDownPicker.setListMode("SCROLLVIEW");


const AddAppointmentScreen = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [valueTwo, setValueTwo] = useState(null);
    const [service, setService] = useState([
        { label: 'Oral Hygiene', value: 'Oral Hygiene' },
        { label: 'Dental Treatment', value: 'Dental Treatment' },
        { label: 'Dental Implants', value: 'Dental Implants' },
        { label: 'Dental Surgery', value: 'Dental Surgery' },
        { label: 'Orthodontics', value: 'Orthodontics' },
        { label: 'Cosmetics Dentistry', value: 'Cosmetics Dentistry' },
        { label: 'Consultaion', value: 'Consultaion' },
        { label: 'Online Consultaion', value: 'Online Consultaion' },
    ]);
    const [time, setTime] = useState([
        { label: '10:00', value: '10:00' },
        { label: '11:00', value: '11:00' },
        { label: '13:00', value: '13:00' },
        { label: '14:00', value: '14:00' },
        { label: '15:00', value: '15:00' },
        { label: '16:00', value: '16:00' },
    ]);

    const [valuePay, setValuePay] = React.useState('first');

    // const [cash, setCash] = useState(false);
    const [itemValue, setItemValue] = useState();
    const [selectedDocotor, setSelectedDoctor] = useState('Select Dentist');




    const list = () => {
        return value.map((value, index) => {
            return (
                <View key={index} style={{ marginTop: -3 }}>
                    <Text style={styles.subtitle0}>{value}</Text>
                </View>
            );
        });
    };


    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        return (
            <View>
                <Text style={styles.subtitle0}>Date selected: {selectedDate} </Text>
            </View>
        );
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };

    const [chooseTime, setChooseTime] = useState('Select Time:');

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleA, setIsModalVisibleA] = useState(false);

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    }

    const setData = (option) => {
        setChooseTime(option)
    }

//try for backend :<
    let appointmentDetails = {
        dentist: selectedDocotor,
        bookedService: service,
        appoinmentDate: date,
        appointmentTime: chooseTime,
        paymentMode: valuePay,
    }

    const [appointment, setAppointment] = useState([{
        dentist: '' ,
        bookedService: '' ,
        appoinmentDate: '',
        appointmentTime: '',
        paymentMode: '',
    }])
   
    const final = (appointment) => {
        setAppointment(appointmentDetails)
    }
//end try

  
    return (

        <View style={styles.container}>
            <StatusBar
                // barStyle="dark-content"
                backgroundColor="white"
            />
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


                <View style={{ flex: 1, width: '100%', height: 100 }}>
                    <View style={[styles.bodyContainer, { marginTop: -10 }]}>

                        <Text style={[styles.subtitle0, { marginTop: 20 }]}>
                            Select Dentist:
                        </Text>

                        <View style={styles.selectDocContainer}>
                            <Picker
                                selectedValue={selectedDocotor}
                                style={{ height: 60, width: '100%' }}
                                itemStyle={{ fontWeight: '500' }}
                                onValueChange={(itemValue, itemIndex) => setSelectedDoctor(itemValue)}
                            >
                                <Picker.Item label="Dr. Oh Sehun" value="osh" color="gray" fontFamily='Berlin-Bold' />
                                <Picker.Item label="Dr. Do Kyungsoo Baekhyun" value="bbh" color="gray" fontWeight='bold' />
                                <Picker.Item label="Dr. Park Chanyeol" value="pcy" color="gray" fontWeight='bold' />
                            </Picker>
                        </View>
                    </View>


                    <View style={[styles.bodyContainer, { marginTop: 5 }]}>

                        <Text style={[styles.subtitle0, { marginTop: 0 }]}>
                            Select atleast one service:
                        </Text>
                        <DropDownPicker
                            // zIndex={5000}
                            dropDownMaxHeight={100}
                            open={open}
                            // onOpen={onServiceOpen}
                            setOpen={setOpen}
                            style={{
                                borderColor: '#27b3c9',
                                elevation: 3,
                                marginTop: 5,
                                zIndex: 2000,
                                paddingVertical: 5
                            }}
                            dropDownStyle={{
                                borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
                            }}
                            placeholder="Select a service"
                            placeholderStyle={styles.subtitle2}
                            labelStyle={styles.subtitle2}
                            listParentLabelStyle={styles.subtitle2}
                            selectedItemLabelStyle={[styles.subtitle2, { color: '#27b2c9' }]}
                            selectedItemContainerStyle={{
                                backgroundColor: "#dfdfdf"
                            }}
                            multipleText="{count} service(s) have been selected"
                            multipleTextPlaceholder="{count} service(s) have been selected"
                            multiple={true}
                            max={5}
                            value={value}
                            items={service}
                            setValue={setValue}
                            setItems={setService}
                        />

                        <Text style={[styles.subtitle0]}>
                            Date and Time:
                         </Text>
                    </View>



                    {/* //layer */}
                    <View style={[{ zIndex: 300, marginTop: -50 }]}>
                        <TouchableOpacity onPress={showDatepicker}>
                            <View style={styles.selectDateContainer}>
                                <Text style={styles.subtitle2}> Select Date</Text>
                            </View>
                        </TouchableOpacity>
                        {/* </View> */}
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>

                    <View style={{ marginTop: -60 }}>
                        <TouchableOpacity onPress={() => changeModalVisibility(true)} style={styles.selectDateContainer}>
                            <Text style={styles.subtitle2}> {chooseTime} </Text>
                        </TouchableOpacity>
                        <Modal
                            transparent={true}
                            animationType='fade'
                            visible={isModalVisible}
                            nRequestClose={() => changeModalVisibility(false)}
                        >
                            <ModalPicker
                                changeModalVisibility={changeModalVisibility}
                                setData={setData}
                            />

                        </Modal>
                    </View>

                    <View style={[styles.bodyContainer, { marginTop: 2 }]}>
                        <Text style={styles.subtitle0}>
                            Mode of Payment:
                         </Text>

                        <RadioButton.Group onValueChange={value => setValuePay(value)} value={valuePay} color={"white"} >
                            <RadioButton.Item label="Cash" value="first" labelStyle={[styles.subtitle2, { color: 'white' }]} color={"white"} uncheckedColor={"white"} style={{ marginTop: -10 }} />
                            <RadioButton.Item label="Bank Transfer" value="second" labelStyle={[styles.subtitle2, { color: 'white' }]} color={"white"} uncheckedColor={"white"} style={{ marginTop: -12 }} />
                            <RadioButton.Item label="Online Transfer" value='third' labelStyle={[styles.subtitle2, { color: 'white' }]} color={"white"} uncheckedColor={"white"} style={{ marginTop: -12 }} />
                        </RadioButton.Group>

                        <TouchableOpacity onPress={() =>
                            Alert.alert(
                                "Appointment Booking Saved",
                                "You appointment booking has been sent successfully. Kindly wait for your appointment confirmation.",
                                [{
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                {
                                    text: "Ok", onPress: () => navigation.navigate('Home'),
                                }
                                    //  console.log("Proceed Pressed");
                                ]
                            )}>
                            <View style={styles.selectBookContainer}>
                                <Text style={styles.subtitle}>
                                    BOOK APPOINTMENT
                            </Text>

                            </View>
                        </TouchableOpacity>

                    </View>



                    {/* <View style={styles.bodyContainer}>
                            <View style={styles.selectedContainer}>
                                {list()}
                            </View>
                        </View> */}






                </View>

            </LinearGradient>
        </View>



    )
}

export default AddAppointmentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }, linearGradient: {
        flex: 1,
    },
    containerSafe: {
        flex: 1,
        // height: '100%',
        // // // paddingTop: StatusBar.currentHeight,
        // width: '100%'
    },
    scrollView: {
        flexGrow: 1,
        paddingBottom: 50

        // width: '100%',
        // height: '100%',
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
        paddingLeft: 20,
        paddingRight: 20,
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
        color: '#27b2c9',
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
        marginTop: 70,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderColor: '#27b3c9',
        elevation: 0,
        paddingVertical: 12,
        borderRadius: 10
    },
    selectDocContainer: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: '#27b3c9',
        elevation: 5,
        borderRadius: 10,
        height: 45,
    },
    selectBookContainer: {
        backgroundColor: '#27b3c9',
        // // marginHorizontal: 20,
        borderColor: 'white',
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 15,

    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        alignItems: 'flex-start',
        alignSelf: 'center',
        fontFamily: 'couture-bld',
        // paddingVertical: 10,
        marginTop: 10
    },
    subtitle0: {
        color: 'white',
        fontSize: 18,
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
        fontSize: 16,
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
        color: 'white',
        fontSize: 17,
        textAlign: 'left',
        fontFamily: 'Berlin-Bold',
        margin: 20,
        justifyContent: 'flex-start'
        // paddingVertical: 10
        //marginBottom: 20
    },
});