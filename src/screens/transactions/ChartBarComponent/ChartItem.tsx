import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../../constants/colors';

export type chartItem={
    highest:number,
    current:number,
    day:string
}

const ChartItem = ({highest,current,day}:chartItem) => {
    
  const windowHeight = Dimensions.get('window').height;
  if(highest)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{current}</Text>
      <View style={{justifyContent:'flex-end'}}>
        <View style={[styles.background,{height:windowHeight*0.11}]} />
        <View style={[styles.bar,{height:windowHeight*0.11*(current/highest)}]} />
      </View>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
  return(
    <View/>
  )
};

export default ChartItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  background: {
    width: 8,
    borderWidth: 0.5,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  bar: {
    zIndex: 1,
    width: 8,
    backgroundColor: Colors.primary200,
    borderRadius: 5,
    position:'absolute'
  },
});
