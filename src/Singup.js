import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';


// import auth from '@react-native-firebase/auth';
import * as Yup from 'yup';
import auth, { firebase } from '@react-native-firebase/auth';
// Validation schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});

const Signup = () => {
  const btn = () => {

    auth()
    .createUserWithEmailAndPassword('safijjlfsadf@gmail.com','1235432')
    .then(() => {
      console.log('User account created & signed in!');

      Alert.alert('Alert Title', ' suseecfull singup ', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Alert Title', ' email-already-in-use ', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      }

      if (error.code === 'auth/invalid-email') {


        Alert.alert('Alert Title', ' That email address is invalid! ', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      }

      // console.error(error);
    });
    console.warn("hell  ")
  }


  const [email, setemail] = useState()
  const [pass, setpass] = useState(0)


  const singupp = async () => {

const firebas=async()=>{

    

}
  }


  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          setemail(values.email)
          setpass(values.password)
       
        }}
      >


        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View className=' '>
            {/* Name Input */}
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            {/* Submit Button */}

            <TouchableOpacity className=' mx-28 w-[45%] shadow-2xl rounded-md TouchableOpacity bg-green-500 '
              onPress={() => handleSubmit()}

            >
              <Text className=' flex justify-center mx-[6%] text-white  text-[18px]'>Press Here</Text>
            </TouchableOpacity>
            {/* <Button onPress={handleSubmit}  title="Sign Up" /> */}
          </View>
        )}
      </Formik>








      <View>

        <Text>



        </Text>
      </View>
      <Button
        onPress={singupp}
        title="Learn More"
        color="#841584"

      />

      {/* <TouchableOpacity className='border-2 border-red-700 shadow-md  rounded-md my-9  mx-10   flex1 justify-center ' onPress={console.warn("hello mot66")}>
        <Text className='  text-orange-500 text-2xl  mx-[22%]'>Press Here</Text>
      </TouchableOpacity> */}




      <Button
      title='fdrie'
      onPress={btn}
      
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft: 2,
    borderRadius: 33,

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Signup;
