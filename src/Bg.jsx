


import * as React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View } from 'react-native';




function Bg({ navigation }) {
    return (
        <>
   <Image
          source={require('../publice/acon.png')}  // Path to your local image

        // Local image path
        style={styles.image}
      />
            <View>

                <Text>

                    thi is bg groii fdige
                </Text>
            </View>
            

            <ImageBackground 
        source={require('../publice/acon.png')}  // Path to your image
      
      >
        <Text >Hello, World!</Text>
      </ImageBackground>
        </>
    );
}




export default Bg;

// const styless = StyleSheet.create({

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
      
//     },
//     backgroundImage: {
//       flex: 1,
//       resizeMode: 'cover',  // or 'contain'
//       justifyContent: 'center',
//     },
//     text: {
//       color: 'white',
//       fontSize: 30,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   });
//     container: {
//         flex: 1,
//     },
//     image: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     text: {
//         color: 'white',
//         fontSize: 42,
//         lineHeight: 84,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         backgroundColor: '#000000c0',
//     },
// });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',  // Fill the container while maintaining aspect ratio
    },
  });