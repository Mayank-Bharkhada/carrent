import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
// Import your Home and Second components
import Home from './src/Pages/Home';
import LetsGo from './src/Pages/LetsGo';
import { Button, Text } from 'react-native-paper';
import { View, useColorScheme, 
  StatusBar,
  TouchableOpacity,
  ImageBackground, } from 'react-native';
import { Colors } from './src/constants/Colors';// Import the custom icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Live from './src/Pages/Live';
import Menu from './src/Photos/Menu.png';
const Stack = createStackNavigator();

const App = () => {
  const isLightMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isLightMode ? Colors.darker : Colors.lighter,
  };


  function HomeHeader() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: 15,paddingTop:35, backgroundColor: backgroundStyle.backgroundColor }}>
          <Button 
            icon={() =>   
              <MaterialCommunityIcons
                name="information-outline" // Replace with your custom icon name
                size={30} // Adjust the icon size as needed
                color="#000" // Adjust the icon color as needed
              />} 
          mode="text" onPress={() => console.log('Pressed')}
          textColor='#000'
          >
            Information
          </Button>
      
        <Button 
        icon={() =>   
          <View style={{flexDirection:"row"}}>

        <MaterialCommunityIcons
          name="bell-outline" // Replace with your custom icon name
          size={30} // Adjust the icon size as needed
          color="#000" // Adjust the icon color as needed
          />
        <MaterialCommunityIcons
          name="circle" // Replace with your custom icon name
          size={15} // Adjust the icon size as needed
          color="#FF0000" // Adjust the icon color as needed
          style={{marginLeft:-15}}
          />
          </View>
      
      }       
        mode="text" onPress={() => console.log('Pressed')}
        textColor='#000'
        >
          Notifications
        </Button>

      </View>
    );
    
  }

  // Define the props for the Home component including the navigation prop


  function LiveHeaderRight() {
    return (
  
        <TouchableOpacity 
        onPress={() => console.log('Pressed')}
        >
            <ImageBackground
            source={Menu}
            resizeMode="contain"
          
            style={{width:25,height:25,marginRight:20}}
            >

            </ImageBackground>
        </TouchableOpacity>

    );
  }

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LetsGo">
        <Stack.Screen
          name="LetsGo"
          component={LetsGo}
          options={{ headerShown: false }} // Hide the header for the Home screen
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            
            header: () => <HomeHeader />,
            headerLeft: (() => { return false })
          }} // Hide the header for the Notifications screen
        />
        <Stack.Screen
          name="Live"
          component={Live}
          options={{
            headerTitle:"",
            headerShown: true,
            headerTransparent: true, 
            headerRight: () => <LiveHeaderRight />,
            // headerLeft: (() => { return false })
          }} // Hide the header for the Notifications screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
