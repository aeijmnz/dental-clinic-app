import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground, Alert, ScrollView, SafeAreaView, StatusBar } from 'react-native';
//
import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const About = () => {
	return (


		<View style={styles.container}>
			<StatusBar
				// barStyle="dark-content"
				backgroundColor="#27b2c9"
			/>

			<View style={styles.headerContainer}>
				<LinearGradient colors={['#27b2c9', '#27b2c9', '#0e95c5',]} style={styles.linearGradient}>
					<View style={{ justifyContent: 'center' }}>
						<View style={{ justifyContent: 'center' }}>
							<Image
								source={require('../assets/img_src/exoldc-og.png')}
								style={styles.mainLogo} />
							<Text style={styles.headertext}>EXO-LUCENT{"\n"}Dental Clinic</Text>
						</View>

						<View>
							<Text style={styles.tagline}>Let your smile glow beyond the limits~</Text>
						</View>


						<View style={[styles.container, { marginTop: 60 }]} >
							<View style={styles.cardContainer}>
								<View style={styles.cardBody}>
									<View style={styles.cardBodyTop}>
										<View style={styles.cardLeftSide}>
											<Text style={styles.cardName}>est. 2012 </Text>
											<Text style={styles.cardTime}>Giving our patients confidence by helping them achieve their perfect smile to glow beyond the limits.</Text>

										</View>
									</View>
								</View>
							</View>
						</View>
						</View>
				
				</LinearGradient>
			</View>


			</View >
	)
}
export default About

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
	headertext: {
		color: 'white',
		fontSize: 28,
		textAlign: 'center',
		marginTop: 20,
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
		fontSize: 23,
		marginTop: 12,
		paddingHorizontal: 10,
		fontFamily: 'Autography',
		alignSelf: 'center'
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
				flex: 1,
		width: '100%',
		height: 200,
	},
	mainLogo: {
				width: 120, height: 120, marginTop: 100, alignSelf: 'center', borderRadius: 20
		//flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
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
		borderWidth: 3,
		borderRadius: 20,
		marginHorizontal: 15,
		marginTop: 20,
        borderColor: '#fff',
		top: -70
	},
	cardBody: {
				padding: 15,
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
				color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	cardTime: {
				color: 'white',
		fontSize: 16,
		fontWeight: '500',
		marginTop: 5,
	},

});