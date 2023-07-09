import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChartItem from './ChartItem'

const ChartComponent = () => {
  return (
    <View style={styles.container}>
      <ChartItem/>
      <ChartItem/>
      <ChartItem/>
      <ChartItem/>
      <ChartItem/>
      <ChartItem/>
      <ChartItem/>
    </View>
  )
}

export default ChartComponent

const styles = StyleSheet.create({
    container:{
        elevation:10,
        height:'18%',
        marginHorizontal:10,
        marginVertical:6,
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-around'
    }
})