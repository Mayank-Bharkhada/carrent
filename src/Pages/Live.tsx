/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Avatar, Button, IconButton } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack'; // Import the StackNavigationProp type
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Diesel from '../Photos/Diesel.png';
import Acceleration from '../Photos/Acceleration.png';
import CoolSeat from '../Photos/CoolSeat.png';
import LiveCar from '../Photos/LiveCar.png';

// Define the props for the Home component including the navigation prop
type YourStackParamList = {
  LetsGo: undefined; // You can define route parameters here if needed
  Home: undefined; // You can define route parameters here if needed
  Live: undefined; // You can define route parameters here if needed
};

// In your component, use the 'StackNavigationProp' with your param list
type HomeProps = {
  navigation: StackNavigationProp<YourStackParamList>;
};

interface DataItem {
  id: string;
  icon: number;
  title: string;
  subText: string;
}

function Live({ navigation }: HomeProps) {
  const data: DataItem[] = [
    {
      id: '1',
      icon: Diesel,
      title: 'Diesel',
      subText: 'Common Rail Fuel Injection',
    },
    {
      id: '2',
      icon: Acceleration,
      title: 'Acceleration',
      subText: '0 - 100km / 11s',
    },
    {
      id: '3',
      icon: CoolSeat,
      title: 'CoolSeat',
      subText: 'Temp Control on seat',
    },

    // Add more data items as needed
  ];
  const isLightMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isLightMode ? Colors.darker : Colors.lighter,
  };

  console.log(backgroundStyle)

  const navigateToSecondScreen = () => {
    navigation.navigate("Home");
  };

  
const [showBar, setShowBar] = useState(true);

  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: "flex-start", backgroundColor: "transparent", marginHorizontal: 10, paddingVertical: 20, paddingHorizontal: 10, width: 160, height: 120, borderRadius: 20, borderWidth: 2, borderColor: "#E8E8E8" }}>
      <ImageBackground
        source={item.icon}
        style={{ height: 40, width: 40 }}
        resizeMode="contain"
      >

      </ImageBackground>
      <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>{item.title}</Text>
      <Text style={{ color: "#000", fontSize: 12 }}>{item.subText}</Text>


    </View>
  );

  const { width, height } = Dimensions.get('window');

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle={isLightMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />


      <View style={{ width: width, height: height + 100 }}>
        <ImageBackground
          source={require('../Photos/LiveMap.png')}
          style={styles.backgroundImage}
          >
        </ImageBackground>
      </View>
      <View style={{ height: 450, width: width, backgroundColor: "#2C2B34", marginTop:  !showBar ? -100 : -500, borderTopRightRadius: 60, borderTopLeftRadius: 60 }} >
        

        <ScrollView
        showsVerticalScrollIndicator={false}
          style={{}}>
                    {
          !showBar &&
          <TouchableOpacity
          onPress={()=>{
            setShowBar(true)
          }}
          >
            <Text style={{color:"#fff",fontSize:20,fontWeight:"700",alignSelf:"center",marginTop:-5}}>______________________</Text>
          </TouchableOpacity>
          
        }
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between"}}>


            <Text style={{ color: "#fff", marginLeft: 30, marginTop: 40, fontSize: 22, fontWeight: "600" }}>Fortuner GR</Text>
            <TouchableOpacity
              onPress={() => {setShowBar(false)}}
              style={{ backgroundColor: "#45454B", borderRadius: 100, zIndex: 1000, width: 30, height: 30, alignItems: "center", justifyContent: "center", marginRight: 30, marginTop: 20 }}
              >
              <MaterialCommunityIcons
                name="window-close" // Replace with your custom icon name
                size={20} // Adjust the icon size as needed
                color="#FFF" // Adjust the icon color as needed
                />
            </TouchableOpacity>
          </View>
          <View style={styles.Details}>
            <View style={styles.ViewDetailLeft} >
              <Button
                icon={() =>
                  <Icon
                  name="location-arrow" // Replace with your custom icon name
                  size={10} // Adjust the icon size as needed
                  color="#787878" // Adjust the icon color as needed
                  />}
                  mode="text" onPress={() => console.log('Pressed')}
                  textColor='#787878'
                  >

                > 870km
              </Button>
              <Button
                icon={() =>
                  <Icon
                  name="fill-drip" // Replace with your custom icon name
                  size={10} // Adjust the icon size as needed
                  color="#787878" // Adjust the icon color as needed
                  />}
                  mode="text" onPress={() => console.log('Pressed')}
                  textColor='#787878'
                  >

                50L
              </Button>

            </View>

          </View>
          <View style={{ height: height / 2, width: width, backgroundColor: "#FFF", borderTopRightRadius: 60, height: 400 ,borderTopLeftRadius: 60, paddingTop: 40, paddingBottom: 40 }} >



            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" ,paddingHorizontal:20}}>
              <Text style={{ flex: 0.6, color: "#000", fontSize: 23, fontWeight: "700" }}>Features</Text>
              <ImageBackground
                source={LiveCar}
                resizeMode="contain"
                style={{ width: 180, height: 180, marginTop: -110, marginRight: -20 }}
                >

              </ImageBackground>
            </View>






            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              style={{ marginTop: 40, marginBottom: 0 }}
              />








            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center",marginBottom:40 }}>
              <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "center", alignItems: "baseline" }}>


                <Text style={{ color: "#000", fontSize: 25, fontWeight: "600" }}>$ 45,00</Text>
                <Text style={{ color: "#000", fontSize: 15, fontWeight: "600" }}>/day</Text>


              </View>
              <Button
                mode="contained"
                onPress={() => console.log('Pressed')}
                textColor='#FFF'
                style={{ backgroundColor: "#000" }}
                labelStyle={{
                  fontSize: 16,
                }}
                >
                Book Now
              </Button>
            </View>

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  ViewContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    // padding:10
  },
  firstView: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
  },
  backgroundImage: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "2%",
    resizeMode: 'cover', // You can adjust the resizeMode as needed
    justifyContent: 'center',
  },
  nearestcar: {
    marginTop: 20,
    marginLeft: "15%",
    fontWeight: "700",
    color: "#787878",
    alignSelf: "flex-start"
  },
  carTitle: {
    color: "#2C2B34",
    fontSize: 24,
    fontWeight: "700",
    alignSelf: "flex-start",
    marginLeft: "15%",
  },
  Details: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  ViewDetailLeft: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ViewDetailRight: {
    flex: 0.85,
    alignSelf: "flex-end"
  },

  /////Second block

  secondBlock: {
    flex: 1,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 200,
  },
  leftBlock: {
    flex: 0.5,
    marginRight: 10,
    flexDirection: 'column',
    paddingHorizontal: '2%',
    paddingVertical: "10%",
    borderRadius: 20,
    backgroundColor: "#F3F3F3",
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarLeft: {
    borderRadius: 100,
  },
  avatarRight: {
    height: "100%",
    width: "100%",
  },
  userName: {
    color: '#000',
    fontWeight: "600",
    marginVertical: 5,
    alignSelf: 'center',
  },
  userPrice: {
    color: '#000',
    fontWeight: '700',
    alignSelf: 'center',
  },
  rightBlock: {
    flex: 0.5,
    marginLeft: 10,
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: "#F3F3F3",
    justifyContent: 'center',
    alignItems: 'center',
    // Add styles for the right block here
  },




});

export default Live;
