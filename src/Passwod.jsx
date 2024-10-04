


import * as React from 'react';
import { useState } from 'react';
import { View, TextInput,Text, Button, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

function Password({navigation }) {

    const [pass, setpass] = useState();

const [localge, setlocalge] = useState();

    const storeData = async () => {
        try {
          
          await AsyncStorage.setItem('pass',pass)
          console.warn('set dta');
          setpass("")
       
        } catch (error) {
          // Error saving data
          console.warn(error);

        }
      };

      const localget=async()=>{
      
  
        try {
          const value = await AsyncStorage.getItem('pass');
        console.warn(value);
        setlocalge(value)

        } catch (error) {
          // Error retrieving data

      };
}



  return (
  <>
  
  
 <View className=' border-2 '>



  <TextInput
        
        onChangeText={setpass}
        value={pass}
        placeholder='interpassword'
      />

<Button
title='cratepssword'
   onPress={storeData}
/>

<Button
title='getpass'
   onPress={localget}
/>


  </View>

  <Text className=' text-2xl text-green-400'>

{localge} hell pass
</Text>
  </>
  );
}

export default Password;

