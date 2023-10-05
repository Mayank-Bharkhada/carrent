import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import your Home and Second components
import Home from './src/Pages/Home';
import LetsGo from './src/Pages/LetsGo';
import { Button, Text } from 'react-native-paper';
import { View, useColorScheme, 
  StatusBar, } from 'react-native';
import { Colors } from './src/constants/Colors';// Import the custom icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const App = () => {
  const isLightMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isLightMode ? Colors.darker : Colors.lighter,
  };


  function CustomHeader() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: 15, backgroundColor: backgroundStyle.backgroundColor }}>
         <StatusBar
        barStyle={isLightMode ? 'light-content' : 'dark-content'}
        backgroundColor="#FFF"
      />
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
            Press me
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
          Press me
        </Button>

      </View>
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
            header: () => <CustomHeader />,
            headerLeft: (() => { return false })
          }} // Hide the header for the Notifications screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
