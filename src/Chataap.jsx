


import * as React from 'react';
import { View, Text, Button } from 'react-native';




function Caht({ navigation }) {


    const arr = [


        { 'name': "sahil", 'id': '2' },
        { 'name': "sahil", 'id': '2' },
        { 'name': "sahil", 'id': '2' },
        { 'name': "sahil", 'id': '2' }


    ]
    return (
        <>


            <View>

                <Text>

                    this is your caht view
                </Text>
            </View>




            {
                arr.map((item) => {
                    return (<>
                        <View  >

                            <View key={item.id} className=' bg-slate-200  flex justify-center items-center'>

                                <Text className=' text-2xl text-green-300 m-3'>

                                    {item.name}
                                </Text>
                                <Text className=' text-2xl  text-black m-3'>

                                    {item.id}
                                </Text>
                            </View>
                        </View>
                    </>
                    )
                })
            }

        </>
    );
}

export default Caht;