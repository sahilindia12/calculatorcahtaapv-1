


import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Add({navigation }) {
  return (
  <>
  
  
  <View>

    <Text> add </Text>


   
<Button
        title="Go to Details"
        onPress={() => navigation.navigate('op')}
      />

<Button
        title="Go to cal"
        onPress={() => navigation.navigate('cal')}
      />

<Button
        title="Go to new "
        onPress={() => navigation.navigate('neww')}
      />
  </View>
  </>
  );
}

export default Add;