import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//const W = Dimensions.get('window').width;

const Sample = ({ }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/img_src/exoldc-og.png')}
                    style={styles.mainLogo}
                />
                <Text style={styles.headertext}>EXO-LUCENT</Text>
                <Text style={styles.headersubtext}>Dental Clinic</Text>
                <Text style={styles.default}>
                    Hello
                    Annyeong
        </Text>
            </View>
        </View>
    )
}
export default Sample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // //backgroundColor: '#27b2c9',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flex: 0.5,
        flexDirection: 'column',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        backgroundColor: "#27b2c9"
    },
    mainLogo: {
        width: 100, height: 100, marginTop: 50, alignSelf: 'center'
    },

    headertext: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'couture-bld'
    },
    headersubtext: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 5,
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
});