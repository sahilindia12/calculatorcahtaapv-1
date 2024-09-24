// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Op from './src/Op';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Add from './src/Add';
import Cal from './src/Cal';
import New from './src/New';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App({navigation}) {


  const stack=()=>{
    <Stack.Navigator>
    <Stack.Screen name="op" component={Op} />
    <Stack.Screen name="add" component={Add} />
    <Stack.Screen name="neww" component={New} />

  </Stack.Navigator>
  }
  return (

    <>
    <NavigationContainer>


      <Tab.Navigator>
        <Tab.Screen name="op" component={Op} />
        <Tab.Screen name="add" component={Add} />

        
      </Tab.Navigator>
    </NavigationContainer>

   
 
    
    <View>

    <Button
        title="Go to add"
        onPress={() => navigation.navigate('add')}
      />
</View>
    </>
  );
}

export default App;