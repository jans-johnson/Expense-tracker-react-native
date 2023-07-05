import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <View>
        <TouchableOpacity onPress={()=>{setCount(count+1)}}>
          <Text style={{fontSize:40}}>Current Count: {count}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})