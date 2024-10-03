import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cal({navigation}) {
  const [pass, setpass] = useState();


useEffect(() => {
  const localget=async()=>{
      
  
    try {
      const value = await AsyncStorage.getItem('pass');
    console.warn(value);
    setpass(value)

    } catch (error) {
      // Error retrieving data

  };
}

localget()
 
}, []);

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = ({navigation}) => {
    setInput("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input || "0"}</Text>
      <Text style={styles.result}>{result || "0"}</Text>

      <View style={styles.row}>
        <Button label="1" onPress={() => handleInput("1")} />
        <Button label="2" onPress={() => handleInput("2")} />
        <Button label="3" onPress={() => handleInput("3")} />
        <Button label="+" onPress={() => handleInput("+")} />
      </View>
      <View style={styles.row}>
        <Button label="4" onPress={() => handleInput("4")} />
        <Button label="5" onPress={() => handleInput("5")} />
        <Button label="6" onPress={() => handleInput("6")} />
        <Button label="-" onPress={() => handleInput("-")} />
      </View>
      <View style={styles.row}>
        <Button label="7" onPress={() => handleInput("7")} />
        <Button label="8" onPress={() => handleInput("8")} />
        <Button label="9" onPress={() => handleInput("9")} />
        <Button label="*" onPress={() => handleInput("*")} />
      </View>
      <View style={styles.row}>
        <Button label="C" onPress={clearInput} />
        <Button label="0" onPress={() => handleInput("0")} />
        <Button label="=" onPress={calculateResult} />
        <Button label="/" onPress={() => handleInput("/")} />
      </View>

  {/* {
    pass===result?    <TouchableOpacity  className=' flex justify-center items-center bg-green-800 'onPress={()=>navigation.navigate('pass')}>
    <Text className=' text-white text-2xl'>ccreapsswoed</Text>
  </TouchableOpacity>:null
  } */}



      {
        pass===result?     pass===result?    <TouchableOpacity  className=' flex justify-center items-center bg-green-800 'onPress={()=>navigation.navigate('chat')}>
    <Text className=' text-white text-2xl'>go to chat</Text>
  </TouchableOpacity>:null
 
:<Text>no mtach your password</Text>
      }
    </View>
  );
}

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button}  onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 20,
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});
