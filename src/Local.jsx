


import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';



function Local({navigation }) {

    const [local,setlocal]=useState(5)


   const storeData = async () => {
        try {
          
          await AsyncStorage.setItem('pass','12345678')
          console.warn('set dta');
       
        } catch (error) {
          // Error saving data
          console.warn(error);

        }
      };

    const localget=async()=>{
      
  
            try {
              const value = await AsyncStorage.getItem('pass');
            console.warn(value);

            } catch (error) {
              // Error retrieving data
    
          };
}



  return (
  <>
  
  
  <View>




   
<Button
        title="Go to Details"
        onPress={() => navigation.navigate('New')}
      />

<Button
        title="Go local set item"
        onPress={storeData}
      />

      
<Button
        title="Go local get"
        onPress={localget}
      />

  </View>


 <Text>

    {local}
 </Text>
  </>
  );
}

export default Local;