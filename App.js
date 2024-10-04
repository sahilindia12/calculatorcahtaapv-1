import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Add from './src/Add';
import Cal from './src/Cal';
import { NavigationContainer } from '@react-navigation/native';
import Group from './src/Groups';
import Singup from './src/Singup';
import Signup from './src/Singup';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Permson from './src/Permison';
import New from './src/New';
import Local from './src/Local';

import Caht from './src/Chataap';
import Navagat from './src/Navigat';
import Bg from './src/Bg';



const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const stack=()=>{
  return(

 
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Cal} />
      <Stack.Screen name="Per" component={Permson} />
      <Stack.Screen name="chat" component={Caht} />
      <Stack.Screen name="bg" component={Bg} />

      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="Use" component={Navagat} />

      <Stack.Screen name="password" component={Permson} />

      <Stack.Screen name="local" component={Local} />
    </Stack.Navigator>

  )
}

function App() {


  return (

   <>
   
   
   <NavigationContainer>


<Tab.Navigator key={1}>
  <Tab.Screen name="Home" component={stack} />
  <Tab.Screen name="cal" component={Cal} />
  <Tab.Screen name="singup" component={Signup} />
  <Tab.Screen name="grups" component={Group} />
</Tab.Navigator>

</NavigationContainer>

<View>


</View>
   </>
  );
   



}

export default App