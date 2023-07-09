import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChartItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>2</Text>
      <View style={{justifyContent:'flex-end'}}>
        <View style={styles.background} />
        <View style={styles.bar} />
      </View>
      <Text style={styles.text}>Mon</Text>
    </View>
  );
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
    height: 92,
    width: 8,
    borderWidth: 0.5,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  bar: {
    zIndex: 1,
    height: 72,
    width: 8,
    borderWidth: 0.5,
    backgroundColor: 'blue',
    borderRadius: 5,
    position:'absolute'
  },
});
