


import * as React from 'react';
import { View, Text, Button } from 'react-native';




function Add({navigation }) {
  return (
  <>
  
  
  <View>

    <Text> add  to acrt google uu</Text>


   
<Button
        title="Go to Details"
        onPress={() => navigation.navigate('op')}
      />

  </View>
  </>
  );
}

export default Add;