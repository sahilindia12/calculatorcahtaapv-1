import { useState } from "react";
import { Button, TextInput, TouchableOpacity, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {request, PERMISSIONS} from 'react-native-permissions';

function Permson() {

  const [pass, setpass] = useState();

  const [localge, setlocalge] = useState();

  const storeData = async () => {
    try {

      await AsyncStorage.setItem('pass', pass)
      console.warn('set dta');
      setpass("")

    } catch (error) {
      // Error saving data
      console.warn(error);

    }
  };

  const localget = async () => {


    try {
      const value = await AsyncStorage.getItem('pass');
      console.warn(value);
      setlocalge(value)

    } catch (error) {
      // Error retrieving data

    };
  }

  const remove = async () => {


    try {
      const value = await AsyncStorage.removeItem('pass');
      console.warn(value);
      setlocalge(value)

    } catch (error) {
      // Error retrieving data

    };
  }

  return (


    <>
      <View className=' border-2 '>



        <TextInput className=' border-2'

          onChangeText={setpass}

          placeholder="useless placeholder"
          keyboardType="numeric"

        />
        <TouchableOpacity className=' flex justify-center items-center bg-green-500 ' onPress={storeData}>
          <Text className=' text-white text-2xl'>ccreapsswoed</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity className=' flex justify-center items-center bg-green-500 ' onPress={localget}>
          <Text className=' text-white text-2xl'>getpass</Text>
        </TouchableOpacity>

        <TouchableOpacity className=' flex justify-center items-center bg-green-500 ' onPress={remove}>
          <Text className=' text-white text-2xl'>remove </Text>
        </TouchableOpacity>

        <Text>
        {localge}
      </Text>
   {
    localge?<Text>pass </Text>:<Text>not ps</Text>
   }

    </>
  )



}




export default Permson




