


import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


function Group({navigation }) {
  return (
  <>
  
  
  <View className=' bg-red-700'>

    <Text> add </Text>


   <Button
 

 title='go to  chat'
 onPress={()=>navigation.navigate('chat')}
   
   />

<Button
 

 title='go to local staoreg'
 onPress={()=>navigation.navigate('local')}
   
   />

  </View>
  </>
  );
}

export default Group;

