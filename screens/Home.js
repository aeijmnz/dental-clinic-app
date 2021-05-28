import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground, Alert, ScrollView } from 'react-native';
//
import Icon from '@expo/vector-icons/AntDesign';
import {LinearGradient} from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { useFocusEffect } from '@react-navigation/core';

// import HomeCard from './HomeCard';


const Home = ({navigation, route}) => {
    const { params } = route;

    const [user, setUser] = useState(null);

    useEffect(()=> {
		console.log("params", params);
        if(params){
            const {userData} = params;
            if(userData){
				console.log("ano ba laman mo userdata-?", userData);
                setUser(userData);
            }
        }
    }, [setUser])

	// useFocusEffect(()=>{
	// 	console.log("params1", params);
    //     if(params){
	// 		console.log("params2", params);
    //         const {userData} = params;
    //         if(userData){
	// 			console.log("ano ba laman mo userdata-?", userData);
    //             setUser(userData);
    //         }
    //     }
	// })

	const onPressReschedule = () => {
		navigation.navigate('Home')
	  }

	return (
		<View style={styles.container} >
			<View style={styles.headerContainer}>
			<LinearGradient colors={['#27b2c9', '#27b2c9', '#0e95c5',]} style={styles.linearGradient}>
				<View style={{ flexDirection: 'row', justifyContent: 'center'}}>
					<Image
						source={require('../assets/img_src/exoldc-og.png')}
						style={styles.mainLogo} />
					<Text style={styles.headertext}>EXO-LUCENT{"\n"}Dental Clinic</Text>
					</View>
					
					<View>
					<Text style={styles.tagline}>Let your smile glow beyond the limits~</Text>
					</View>

					<View>
					<View style={styles.margin1} />
					<Text style={styles.subtext}>SERVICES OFFERED</Text>
					</View>

					

					<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.headerContainer, {
		marginHorizontal: -3,}}>
						
					<Image source={require('../assets/img_src/oralhygiene.png')} style={styles.services} />
					<Image source={require('../assets/img_src/consultation.png')} style={styles.services} />
					<Image source={require('../assets/img_src/dentaltreatments.png')} style={styles.services} />
					<Image source={require('../assets/img_src/orthodontics.png')} style={styles.services} />
					<Image source={require('../assets/img_src/periodontics.png')} style={styles.services} />
					<Image source={require('../assets/img_src/dentures.png')} style={styles.services} />
					<Image source={require('../assets/img_src/dentalimplants.png')} style={styles.services} />
					<Image source={require('../assets/img_src/dentalsurgery.png')} style={styles.services}/>
					<Image source={require('../assets/img_src/cosmeticsdentistry.png')} style={styles.services} />

			</ScrollView>

			</LinearGradient>
			</View>
			
			
			

			<View>
				<Text style={styles.subtitle}>{user ? "YOUR NEXT APPOINTMENT" : "WELCOME"} </Text>

			</View>

			<View style={styles.cardContainer}>

				<View style={styles.cardBody}>
					<View style={styles.cardBodyTop}>
						<Image
							style={styles.cardAvatar}
							source={{
								uri:
									'https://pbs.twimg.com/media/EooktELUcAEqZ4R?format=jpg&name=small',
							}}
						/>
						<View style={styles.cardLeftSide}>
							{/* <Text style={styles.tag}>{info.tag}</Text> */}
							<Text style={styles.cardName}>{user ? "Dr. Oh Sehun" : "Dentist"} </Text>
							{/* <Text style={styles.cardName}>{user ? user.displayName : "I can't Display info TT" }</Text> */}
							{/* <Text style={styles.cardName}>{user ? user.user.uid : "I can't Display info" }</Text> */}
							<Text style={styles.cardTime}>{user ? "Monday, June 7th at 1PM" : "Date and Time"}</Text>
							<Text style={styles.cardService}>{user ? "Dental Cleaning" : "Service"} </Text>
						
						</View>
					</View>
					<View style={styles.margin} />


					<View style={styles.cardBodyBottom}>
						<TouchableOpacity onPress={() => Alert.alert("Check-in confirmed", "Thank you.")}>
							<View style={styles.cardGroupIcon}>
								<Icon name="checkcircleo" size={28} color='#666'/>
								<Text style={styles.cardBottomTitle}>Check-in</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() =>
							Alert.alert(
								"Reschedule Appointment",
								"Please proceed to request new appointment schedule",
								[{text: "Cancel",
										onPress: () => console.log("Cancel Pressed"),
										style: "cancel"
									},
									{ text: "Proceed", onPress: () => navigation.navigate('Reschedule'),
									 } 
									//  console.log("Proceed Pressed");
								]
							)}>
						<View style={styles.cardGroupIcon}>
							<Icon name="calendar" size={28} color='#666'/>
							<Text style={styles.cardBottomTitle}>Reschedule</Text>
						</View>
						</TouchableOpacity>


						<TouchableOpacity onPress={() =>
							Alert.alert(
								"Cancel Appointment",
								"Are you sure to cancel your appointment?",
								[{text: "Cancel",
										onPress: () => console.log("Cancel Pressed"),
										style: "cancel"
									},
									{ text: "Yes", onPress: () => console.log("Yes Pressed")}
								]
							)}>
						<View style={styles.cardGroupIcon}>
							<Icon name="closecircleo" size={28} color='#666'/>
							<Text style={styles.cardBottomTitle}>Cancel</Text>
						</View>
						</TouchableOpacity>
							
						
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
		//backgroundColor: 'white',
		//justifyContent: 'center',
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	  },
	bannerContainer: {
		flex: 1,
	},
	banner: {
		flex: 1,
		width: 80,
		height: 80
	},
	//headerpart
	margin1: {
		height: 1.5,
		backgroundColor: '#cccccc',
		width: '100%',
		marginTop: 10,
	},
	headerContainer: {
		flex: 0.83,
		width: '100%',
		height: 30,

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
	subtitle: {
		// color: '#1f7a8c',
		color: '#0e95c5',
		fontSize: 20,
		textAlign: 'left',
		alignItems: 'flex-start',
		marginLeft: 25,
		fontFamily: 'couture-bld',
		paddingVertical: 10
	},
	subtext: {
		color: 'white',
		fontSize: 20,
		marginTop: 12,
		paddingHorizontal: 10,
		fontFamily: 'Metropolis-Bold',
		alignSelf: 'center'
	},
	tagline: {
		color: 'white',
		fontSize: 22,
		marginTop: 12,
		paddingHorizontal: 10,
		fontFamily: 'Autography',
		alignSelf: 'center'
	},
	services: {
		width: 120, 
		height: 160, 
		borderRadius: 20, 
		marginTop:20,
		marginHorizontal: 10, 
	},
	//cards
	cardContainer: {
		padding: 10,
		paddingBottom: 5,
		borderColor: 'gray',
		borderWidth: 0,
		backgroundColor: 'white',
		borderRadius: 20,
		marginHorizontal: 15,
		elevation: 8,
		top: 5
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
		marginTop: 5,
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
		color: '#666'
	},
	cardLeftSide: {
		paddingHorizontal: 10,
		flex: 1,
	},
	cardName: {
		color: '#222',
		fontSize: 19,
		fontFamily: 'Barlow-Bold',
	},
	cardTime: {
		color: '#222',
		fontSize: 18,
		marginTop: 3,
		fontFamily: 'Berlin-Bold',
	},
	cardService: {
		color: 'gray',
		fontSize: 16,
		marginTop: 3,
		fontFamily: 'Berlin-Bold',
		paddingBottom: 5
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
		width: '100%',
		marginVertical: 6,
	},
	iconMore: {
		position: 'absolute',
		bottom: 0,
		right: 10,
	 },
	 //endofcard
});