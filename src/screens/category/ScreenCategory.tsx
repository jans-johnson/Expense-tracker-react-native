import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React from 'react';
import FloatingActionButton from '../../components/FloatingActionButton';

const addCategory = () => {
  ToastAndroid.show('From Category', ToastAndroid.SHORT);
};

const ScreenCategory = () => {
  return (
    <View style={{flex: 1}}>
      <FloatingActionButton fun={addCategory} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenCategory;
