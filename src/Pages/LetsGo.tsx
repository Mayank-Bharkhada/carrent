/**
 * Sample React Native LetsGo
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack'; // Import the StackNavigationProp type



// Define the props for the LetsGo component including the navigation prop
type YourStackParamList = {
  LetsGo: undefined; // You can define route parameters here if needed
  Home: undefined; // You can define route parameters here if needed
};

// In your component, use the 'StackNavigationProp' with your param list
type LetsGoProps = {
  navigation: StackNavigationProp<YourStackParamList>;
};

function LetsGo({ navigation }: LetsGoProps) {
  const isLightMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isLightMode ? Colors.lighter : Colors.darker,
  };

  console.log(backgroundStyle)
  
  const navigateToHomeScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle={isLightMode ? 'dark-content' :'light-content' }
        backgroundColor="#2C2B34"
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
        <ImageBackground
          source={require('../Photos/BackgroundLetsGo.png')}
          style={styles.backgroundImage}
        >
        </ImageBackground>
        <View style={[styles.contentView,{backgroundColor:backgroundStyle.backgroundColor}]}>
          <Text style={styles.LetsGoTitle}>Premium cars.</Text>
          <Text style={styles.LetsGoTitle}>Enjoy the luxury</Text>
          <Text style={[styles.LetsGoContent,{ marginTop:10}]}>Premium and prestige car daily rental.</Text>
          <Text style={styles.LetsGoContent}>Experience the thrill at a lower price</Text>
          <Button
            mode="contained"
            color='#FFF'
            onPress={navigateToHomeScreen}
            style={styles.LetsGoButton}
          >
            Let's Go
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    height:400,
    width:350,
    marginTop:"10%",
    marginBottom:"2%",
    resizeMode: 'cover', // You can adjust the resizeMode as needed
    justifyContent: 'center',
  },
  contentView: {
    flex: 1,
    paddingHorizontal:"10%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Add a semi-transparent background over the image
  },
  LetsGoTitle:{
    alignSelf:"flex-start",
    color:"#FFF",
    fontSize:30,
    fontWeight:"700"
  },
  LetsGoContent:{
    alignSelf:"flex-start",
    fontSize:18,
    fontWeight:"400",
    color:"#8E8E8E"
  },
  LetsGoButton:{
    width:"100%",
    marginTop:30,
    marginBottom:50,
    padding:3
  }
 
});

export default LetsGo;
