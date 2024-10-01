


import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


function Group({navigation }) {
  return (
  <>
  
  
  <View className=' bg-red-700'>

    <Text> add </Text>


   <Button
 

 title='go to permison'
 onPress={()=>navigation.navigate('Per')}
   
   />

  </View>
  </>
  );
}

export default Group;

