import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground, Alert, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from "react-native-elements";

import firebase from "firebase";
import 'firebase/auth';
import { firebaseConfig } from '../firebase/firebaseConfig';
import { retrieveAUser, saveAUser } from '../firebase/firebaseHelper';


import { CommonActions } from '@react-navigation/native';
import { TabActions } from '@react-navigation/native';

const UserAccountScreen = ({ navigation, route }) => {
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

	const onPressSignOut = (user) => {
		firebase.auth().signOut()
		.then(navigation.navigate('Auth'))
		.catch((error) => {
			// An error happened.
		  });
		  console.log("user", user);
	}
	const onPressAbout = () => {
		navigation.navigate('About')
	}


	return (
		<SafeAreaView style={{height: '90%', width: '100%', }}>
		<ScrollView style={{ height: '100%', width: '100%', paddingBottom: 100 }} nestedScrollEnabled = {true} showsVerticalScrollIndicator={false}>
		
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
						<Text style={styles.subtitle}>ACCOUNT</Text>
					</View>
				</LinearGradient>
			</View>

			<View style={[styles.container, {marginTop: 10}]} >
				<View style={styles.cardContainer}>
					<View style={styles.cardBody}>
						<View style={styles.cardBodyTop}>
							<Avatar
							size= "large"
						  	rounded
							activeOpacity={0.7}
							source={{
								uri: user ? user.photoURL : 'https://image.flaticon.com/icons/png/512/1177/1177568.png'                          
							}}/>

							<View style={styles.cardLeftSide}>
								{/* <Text style={styles.tag}>{info.tag}</Text> */}
								<Text style={styles.cardName}>Name: {user ? user.given_name + " " + user.family_name : " Name"}</Text>
								<Text style={styles.cardTime}>Address: {user ? user.address : "Not yet Provided"}</Text>
								<Text style={styles.cardTime}>Birthdate: {user ? user.birthdate : "Not yet Provided" }</Text>
								<Text style={styles.cardService}>Email: {user ? user.email : ": No info"}</Text>
								<Text style={styles.cardService}>Contact No.: {user ? user.contact : ": Not yet Provided"}</Text>
								{/* <View style={styles.iconMore}>
								<Icon name="right" color="#0e95c5" size={20} />
							</View> */}
							</View>
						</View>
					</View>
				</View>
				<View style={styles.margin} />

				<View style={styles.bodyContainer, {marginBottom: -30}}>
					<Text style={styles.subtitle2}>Appointment History</Text>
				</View>


				<SafeAreaView style={styles.containerSafe}>
				<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true} nestedScrollEnabled = {true} >

					<View style={styles.containerSafe, {height:60}}></View>

					<View style={styles.cardHistoContainer}>
						<View style={styles.cardHistoBody}>
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
									<Text style={styles.cardName}>Dr. Oh Sehun </Text>
									{/* <Text style={styles.cardName}>{user ? user.displayName : "I can't Display info TT" }</Text> */}
									{/* <Text style={styles.cardName}>{user ? user.user.uid : "I can't Display info" }</Text> */}
									<Text style={styles.cardTime}>Monday, April 12th at 10AM</Text>
									<Text style={styles.cardService}>Consultation</Text>
									
								</View>
							</View>
						</View>
					</View>



					{/* more sample  */}

					<View style={styles.cardHistoContainer}>
						<View style={styles.cardHistoBody}>
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
									<Text style={styles.cardName}>Dr. Oh Sehun </Text>
									{/* <Text style={styles.cardName}>{user ? user.displayName : "I can't Display info TT" }</Text> */}
									{/* <Text style={styles.cardName}>{user ? user.user.uid : "I can't Display info" }</Text> */}
									<Text style={styles.cardTime}>Thursday, January 7th at 2PM</Text>
									<Text style={styles.cardService}>Dental Treatment</Text>
									
								</View>
							</View>
						</View>
					</View>

					
				</ScrollView>
				</SafeAreaView>

				<TouchableOpacity onPress={onPressAbout}>
                            <View style={[styles.selectBookContainer , {marginTop: 5}]}>
                                <Text style={[styles.subtitle, {fontSize: 13,}]}>
                                    about EXO-Lucent Dental Clinic
                            </Text>
                            </View>
                        </TouchableOpacity>

				<TouchableOpacity onPress={onPressSignOut}>
                            <View style={styles.selectBookContainer}>
                                <Text style={styles.subtitle}>
                                    LOGOUT
                            </Text>
                            </View>
                        </TouchableOpacity>
						

			</View>
		</View >
		</ScrollView>
		</SafeAreaView>
	)
}
export default UserAccountScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerSafe: {
			flex: 1,
			// paddingTop: StatusBar.currentHeight,
			height: 300
	},
	scrollView: {
    marginHorizontal: 30,
	paddingBottom : 100,
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
		flex: 0.4,
		width: '100%',
		height: 200,
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
	selectBookContainer: {
        backgroundColor: '#27b3c9',
        marginHorizontal: 20,
        borderColor: 'white',
        borderWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 15,
		marginTop: 5

    },
	subtitle: {
		color: 'white',
		fontSize: 18,
		alignItems: 'flex-start',
		alignSelf: 'center',
		fontFamily: 'couture-bld',
		paddingVertical: 8,
	},
	subtitle2: {
		color: '#3a3b3c',
		fontSize: 20,
		alignSelf: 'center',
		fontFamily: 'couture-bld',
		top: -40
		// paddingVertical: 30
		//marginBottom: 20
	},
	text: {
		color: '#27b2c9',
		fontSize: 20,
		textAlign: 'center',
	},
	bodyContainer: {
		flex: 0.2,
		width: '100%',
		height: 100,
		paddingLeft: 20,
		paddingRight: 20,
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
	cardHistoContainer: {
		padding: 5,
		paddingBottom: 5,
		borderColor: 'gray',
		borderWidth: 0,
		backgroundColor: 'white',
		borderRadius: 10,
		marginHorizontal: 5,
		marginTop: 20,
		elevation: 4,
		top: -70,
	},
	cardBody: {
		padding: 15,
		// backgroundColor: '#fff',
		// marginTop: 2,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	cardHistoBody: {
		padding: 15,
		backgroundColor: '#fff',
		// marginTop: 2,
		// borderRadius: 10,
		// shadowColor: '#000',
		// shadowOffset: { width: 0, height: 1 },
		// shadowOpacity: 0.1,
		// shadowRadius: 1,
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
		top: -50,
		marginHorizontal: 15,
	},
	iconMore: {
		position: 'absolute',
		bottom: 0,
		right: 10,
	},
});