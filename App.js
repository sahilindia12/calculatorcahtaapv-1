import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Add from './src/Add';
import Cal from './src/Cal';
import { NavigationContainer } from '@react-navigation/native';
import Group from './src/Groups';
import Singup from './src/Singup';
import Signup from './src/Singup';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (

    <NavigationContainer>


    <Tab.Navigator key={1}>
      <Tab.Screen name="Home" component={Add} />
      <Tab.Screen name="cal" component={Cal} />
      <Tab.Screen name="singup" component={Signup} />
      <Tab.Screen name="grups" component={Group} />
    </Tab.Navigator>

    </NavigationContainer>
  );
   



}

export default App