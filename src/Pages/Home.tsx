/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
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
import { Avatar, Button, IconButton } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack'; // Import the StackNavigationProp type
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';


// Define the props for the Home component including the navigation prop
type YourStackParamList = {
  LetsGo: undefined; // You can define route parameters here if needed
  Home: undefined; // You can define route parameters here if needed
};

// In your component, use the 'StackNavigationProp' with your param list
type HomeProps = {
  navigation: StackNavigationProp<YourStackParamList>;
};

interface DataItem {
  id: string;
  title: string;
  location: string;
  fuel: string;
}

function Home({ navigation }: HomeProps) {
  const data: DataItem[] = [
    {
      id: '1',
      title: 'Coroola Cross',
      location: '> 870km',
      fuel: '50L',
    },
    {
      id: '2',
      title: 'Coroola Cross',
      location: '> 870km',
      fuel: '50L',
    },
    {
      id: '3',
      title: 'Coroola Cross',
      location: '> 870km',
      fuel: '50L',
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


  const renderItem = ({ item } : {item : DataItem}) => (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={{ flex: 10.7, flexDirection: 'column' }}>
          <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 20, fontWeight: '700', color: '#FFF' }}>{item.title}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={[styles.ViewDetailLeft]}>
              <Button
                icon={() =>
                  <Icon
                    name="location-arrow"
                    size={15}
                    color="#D8D8D8"
                  />}
                mode="text" onPress={() => console.log('Pressed')}
                textColor='#D8D8D8'
              >
                {item.location}
              </Button>
              <Button
                icon={() =>
                  <Icon
                    name="fill-drip"
                    size={15}
                    color="#D8D8D8"
                  />}
                mode="text" onPress={() => console.log('Pressed')}
                textColor='#D8D8D8'
              >
                {item.fuel}
              </Button>
            </View>
          </View>
        </View>
        <View>
          <Icon
            name="circle-arrow-right"
            size={35}
            color="#FFF"
          />
        </View>
      </View>
  );

  const SeparatorComponent = () => <View style={{ height: 1, backgroundColor: '#787878' }} />;

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle={isLightMode ? 'light-content' : 'dark-content'}
        backgroundColor="#FFF"
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: backgroundStyle.backgroundColor, paddingHorizontal: 20 }}>


        {/* First Block  */}

        <View style={styles.firstView}>
          <Text style={styles.nearestcar}>NEAREST CAR</Text>
          <ImageBackground
            source={require('../Photos/SecondPageCar.png')}
            style={styles.backgroundImage}
          >
          </ImageBackground>
          {/* <View.Cover source={require('../Photos/SecondPageCar.png')} style={styles.carView} /> */}
          <Text style={styles.carTitle}>Fortuner GR</Text>
          <View style={styles.carDetails}>
            <View style={styles.ViewDetailLeft} >
              <Button
                icon={() =>
                  <Icon
                    name="location-arrow" // Replace with your custom icon name
                    size={15} // Adjust the icon size as needed
                    color="#787878" // Adjust the icon color as needed
                  />}
                mode="text" onPress={() => console.log('Pressed')}
                textColor='#787878'
              >

                &gt; 870km
              </Button>
              <Button
                icon={() =>
                  <Icon
                    name="fill-drip" // Replace with your custom icon name
                    size={15} // Adjust the icon size as needed
                    color="#787878" // Adjust the icon color as needed
                  />}
                mode="text" onPress={() => console.log('Pressed')}
                textColor='#787878'
              >

                50L
              </Button>

            </View>
            <View style={styles.ViewDetailRight}>
              <Button
                mode="text"
                onPress={() => console.log('Pressed')}
                textColor='#000'
                labelStyle={{
                  fontSize: 16, // Set the font size to 16
                  fontWeight: 'bold', // Set the font weight to bold
                }}
              >
                $ 45,00/h
              </Button>

            </View>
          </View>
        </View>


        {/* Second block */}

        <View style={styles.secondBlock}>
          {/* Left Block */}
          <View style={styles.leftBlock}>
            <Avatar.Image
              size={60}
              style={styles.avatar}
              source={require('../Photos/Avtar.png')}
            />
            <Text style={styles.userName}>Jane Cooper</Text>
            <Text style={styles.userPrice}>$4,253</Text>
          </View>

          {/* Right Block */}
          <View style={styles.rightBlock}>
            <Avatar.Image
              size={60}
              style={styles.avatar}
              source={require('../Photos/Avtar.png')}
            />
            <Text style={styles.userName}>Jane Cooper</Text>
            <Text style={styles.userPrice}>$4,253</Text>
          </View>
        </View>

        {/* Third Block */}

        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#4B4B4B', borderRadius: 25, marginVertical: 15, paddingHorizontal: 20, paddingVertical: 10 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#D4D4D4', fontSize: 13, fontWeight: '400' }}>More Cars</Text>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={35}
          color="#787878"
        />
      </View>
        <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={SeparatorComponent}
    />
    </View>
      </ScrollView>
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
    height: 100,
    width: 300,
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
  carDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignSelf: "flex-start",
    marginLeft: "15%",
  },
  ViewDetailLeft: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ViewDetailRight: {
    flex: 0.5,
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
  avatar: {
    borderRadius: 100,
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
    paddingHorizontal: '2%',
    paddingVertical: "10 %",
    borderRadius: 20,
    backgroundColor: "#F3F3F3",
    justifyContent: 'center',
    alignItems: 'center',
    // Add styles for the right block here
  },




});

export default Home;
