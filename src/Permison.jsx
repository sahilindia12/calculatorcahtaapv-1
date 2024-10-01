import { useState } from "react";
import { Button, Text, View} from "react-native";

// import {request, PERMISSIONS} from 'react-native-permissions';
import FilePickerManager from 'react-native-file-picker';

function Permson(){

    const [data,setdata]=useState(9)

const  pp =async()=>{

    // request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
    //     console.warn(result)
    //   });

    FilePickerManager.showFilePicker(null, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled file picker');
        }
        else if (response.error) {
          console.log('FilePickerManager Error: ', response.error);
        }
        else {
        console.warn(response)
        }
      });

}
return(


    <>
    <View>


<Button
title="permison btn pp"
onPress={pp}
/>
<Text>


`this is your anser {data}`
</Text>
    </View>
    
    </>
)



}
 



export default Permson




