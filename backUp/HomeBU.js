import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';
//
import Icon from '@expo/vector-icons/AntDesign';


const Home = ({ navigation, route }) => {
    const [errorr, setError] = useState();
    const { params } = route;

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (params) {
            const { userData } = params;
            if (userData) {
                setUser(userData);
            }
        }
    }, [])

    // const signOut = async () => {
    //     try {
    //       firebase.auth().signOut();
    //       navigation.navigate("SignInScreen");

    //     } catch (err) {
    //       setError(err.message);
    //     }
    //   }

    return (
        <View style={styles.container} >
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row', }}>
                    <Image
                        source={require('../assets/img_src/exoldc-og.png')}
                        style={styles.mainLogo} />
                    <Text style={styles.headertext}>EXO-LUCENT{"\n"}Dental Clinic</Text>
                </View>
            </View>
            {/* <Image
                    source={require('../assets/img_src/exoldc-og.png')}
                    style={styles.mainLogo}
                /> */}
            {/* <Text style={styles.headersubtext} >{user ? user.email : "No info yet"}</Text> */}
            <View>
                {/* <Text style={styles.headertext}>EXO-LUCENT</Text> */}
                <Text style={styles.headersubtext}>Dental Clinic</Text>
                <Text style={styles.default}>
                    Hello
                    Annyeong
                 </Text>
            </View>

            <View style={styles.cardContainer}>

            <View style={styles.cardBody}>
                <View style={styles.cardBodyTop}>
                <Image
                     style={styles.cardAvatar}
                     source={{
                      uri:
                'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
                     }}
                 />

                <View style={styles.cardLeftSide}>  {/* <Text style={styles.tag}>Your Next Appointment</Text> */}
                    {/* <Text style={styles.cardName}>Dr.Oh Sehun</Text>
                    <Text style={styles.cardTime}>{info.time}</Text>
                    <Text style={styles.cardAddress}>{info.address}</Text>
                    <Text style={styles.cardAddress}>{info.detail}</Text>
                    {info.rating && <Rating rating={info.rating} />}
                    <View style={styles.iconMore}>
                        <Icon name="angle-right" color="gray" />
                    </View> */}



                    <View style={styles.cardBodyBottom}>
                        <View style={styles.cardGroupIcon}>
                            <Icon name="checkcircleo" size={32} />
                            <Text style={styles.cardBottomTitle}>Check-in</Text>
                        </View>

                        <View style={styles.cardGroupIcon}>
                            <Icon name="closecircleo" size={32} />
                            <Text style={styles.cardBottomTitle}>Cancel</Text>
                        </View>

                        <View style={styles.cardGroupIcon}>
                            <Icon name="calendar" size={32} />
                            <Text style={styles.cardBottomTitle}>Reschedule</Text>
                        </View>
                    </View>
                </View>

                {/* <View style={styles.bannerContainer}>
                    <Image source={user ? user.photoURL : null} style={styles.banner} />
                    <Text style={styles.headersubtext} >{user ? user.email : "No info yet"}</Text>
                    <Text style={styles.headersubtext} >{user ? user.displayName + user.photoURL : "No info yet"}</Text>
            </View> */}

            </View>
            </View>
            </View>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#27b2c9',
        // backgroundColor: 'white',
        // justifyContent: 'center',
    },
    bannerContainer: {
        flex: 1,
    },
    banner: {
        flex: 1,
        width: 80,
        height: 80
    },
    headerContainer: {
        flex: 0.28,
        //flexDirection: 'row',
        width: '100%',
        height: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: "#27b2c9",

        // borderWidth: 3,
        // borderColor: "#27b2c9"
    },
    mainLogo: {
        width: 100, height: 100, marginTop: 35, alignItems: 'center', marginLeft: 25
        // flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    headertext: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 60,
        marginRight: 30,
        fontFamily: 'couture-bld',
        alignItems: 'center',
    },
    headersubtext: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        alignItems: 'flex-start',
        // marginTop: 5,
        fontFamily: 'couture-bld',
        // marginBottom: 20
    },
    subtext: {
        color: 'black',
        fontSize: 14,
        paddingHorizontal: 10,
        fontFamily: 'normal',
    },
    text: {
        color: '#27b2c9',
        fontSize: 20,
        textAlign: 'center',
    },
    //
    cardContainer: {
        padding: 15,
        paddingBottom: 10,
        borderColor: 'gray',
        borderWidth: 3,
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 10
    },
    cardBodyBottom: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cardGroupIcon: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center'

    },
    cardBottomTitle: {
        fontSize: 14,
        marginTop: 4,
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
    cardAddress: {
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

});

/* <View style={{ marginTop: 50 }} >
                {/* <Button
            onPress={signOut}
            title="sgn out"
            color="blue"
          /> */
/* </View> * /} */ 