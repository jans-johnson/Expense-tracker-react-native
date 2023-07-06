import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import FloatingActionButton from '../../components/FloatingActionButton';
import React from 'react';

const addTransactions = () => {
  ToastAndroid.show('From Transactions', ToastAndroid.SHORT);
};

const ScreenTransactions = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex:1}}>
        
      </View>
      <FloatingActionButton fun={addTransactions} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenTransactions;
