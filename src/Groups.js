


import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Group() {

  const navigation = useNavigation();  // Get the navigation object


  const usenavi = async () => {
    console.warn('usenavigation');
    if (22 == 225) {
      navigation.navigate('Use')

    }
    else {
      navigation.navigate('Per')

    }
  }
  return (
    <>


      <View className='   bg-green-300'>

        <Text> add </Text>


        <Button


          title='go to  chat'
          onPress={() => navigation.navigate('chat')}

        />

        <Button


          title='go to local staoreg'
          onPress={() => navigation.navigate('local')}

        />
        <Button


          title='go to usenaviton'
          onPress={() => navigation.navigate('Use')}

        />
        <Button


          title='go to pass'
          onPress={() => navigation.navigate('password')}

        />

        <Button


          title='go to bg'
          onPress={() => navigation.navigate('bg')}

        />

        <Button


          title='go to usenaviton'
          onPress={usenavi}

        />


        <Button


          title='go to usenaviton'
          onPress={usenavi}

        />
      </View>
    </>
  );
}

export default Group;

