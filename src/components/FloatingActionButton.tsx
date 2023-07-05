import React, {useState} from "react";
import { View, Text, ToastAndroid } from "react-native";
import {FAB} from 'react-native-paper'

const FloatingActionButton= ()=>{
    const handleFabPress = () => {

    }
    return(
        <View style={{flex:1}}>

                <FAB
                    style={{
                        position: 'absolute',
                        margin:16,
                        right:0,
                        bottom:0,
                        borderRadius: 30,
                    }}
                    label="+"
                    onPress={()=>{ToastAndroid.show('Working!', ToastAndroid.SHORT);}}
                    />
        </View>
    )
}
export default FloatingActionButton