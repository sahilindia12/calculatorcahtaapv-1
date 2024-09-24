


import * as React from 'react';
import { View, Text } from 'react-native';

function Op() {
  return (
  <>
  
  
  <View>
  <Button
        title="Go to Details"
        onPress={() => navigation.navigate('add')}
      />
    <Text className=' bg-red-500'>hello</Text>
  </View>
  </>
  );
}

export default Op;