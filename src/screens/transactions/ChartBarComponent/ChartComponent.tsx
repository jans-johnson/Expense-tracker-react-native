import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChartItem from './ChartItem'

const ChartComponent = () => {
    const windowHeight = Dimensions.get('window').height;
  return (
    <View style={[styles.container,{height:windowHeight*0.155}]}>
      <ChartItem highest={10000} current={8000} day='Mon'/>
    </View>
  )
}

export default ChartComponent

const styles = StyleSheet.create({
    container:{
        elevation:10,
        marginHorizontal:10,
        marginVertical:6,
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-around'
    }
})